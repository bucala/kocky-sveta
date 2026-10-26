// Vercel serverless funkcia: rozpozná ručne písanú tabuľku skóre z fotky
// pomocou Claude Haiku 5.5 (najlacnejší aktuálny model, Anthropic Vision).
// API kľúč zostáva na serveri, do prehliadača sa nikdy nedostane.
//
// Ochrana pred zneužitím (endpoint je verejný, bez prihlasovania):
// - povolené iba požiadavky z webu aplikácie, z Android aplikácie a z lokálneho vývoja
//   (Origin), ďalšie pôvody sa dajú pridať v SCAN_ALLOWED_ORIGINS
// - rate-limit na IP (best effort v rámci jednej inštancie funkcie)
// - limit veľkosti obrázka a len obrazové typy
// - obsah fotky ani výsledku sa neloguje
// Pre tvrdú ochranu odporúčame v Anthropic Console nastaviť pre kľúč mesačný
// limit útraty a vo Verceli pravidlo Firewall → Rate limit na /api/scan.
import Anthropic from '@anthropic-ai/sdk';

export const config = {
  api: { bodyParser: { sizeLimit: '6mb' } },
};

const MODEL = process.env.SCAN_MODEL || 'claude-haiku-5-5';
const MAX_IMAGE_BASE64 = 5 * 1024 * 1024;
const ALLOWED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const RATE_LIMIT = { windowMs: 60 * 60 * 1000, max: 20 };

const DEFAULT_ORIGINS = [
  'https://kocky-sveta.vercel.app',
  'https://localhost', // Android aplikácia (Capacitor, androidScheme https)
  'capacitor://localhost',
  'http://localhost:5173',
  'http://localhost:4173',
];

function allowedOrigins() {
  const extra = (process.env.SCAN_ALLOWED_ORIGINS || '')
    .split(',').map(s => s.trim()).filter(Boolean);
  return new Set([...DEFAULT_ORIGINS, ...extra]);
}

function isAllowedOrigin(origin) {
  if (!origin) return false;
  if (allowedOrigins().has(origin)) return true;
  // náhľadové deploye tohto projektu na Verceli
  return /^https:\/\/kocky-sveta(-[a-z0-9-]+)?\.vercel\.app$/.test(origin);
}

const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter(t => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT.max;
}

const SYSTEM = `Si expert na čítanie ručne písaných tabuliek skóre zo stolovej hry Kocky (hra s kockami do 10 000 alebo 5 000 bodov).
Prepíš tabuľku presne tak, ako je napísaná. Nič si nevymýšľaj.`;

const PROMPT = `Prečítaj tabuľku skóre na fotke.
1. Mená hráčov sú v hlavičke (prvý riadok).
2. Každý ďalší riadok je jedno kolo. Hodnoty sú body pripísané v danom kole (delta, nie priebežný súčet).
   Ak sú v tabuľke priebežné súčty (stále rastúce čísla), prepočítaj ich na body za kolo.
3. Čiarka, pomlčka alebo prázdne pole znamená, že hráč nič nezapísal: null.
4. Penalizácia -1000 môže byť napísaná ako "-1000", "P" alebo "—1000": zapíš -1000.
5. Cieľové skóre je zvyčajne 10000, pri krátkej hre 5000.
Každé kolo musí mať presne toľko hodnôt, koľko je hráčov. Do notes stručne napíš, čo nebolo čitateľné (alebo prázdny reťazec).`;

const RESULT_SCHEMA = {
  type: 'object',
  properties: {
    players: { type: 'array', items: { type: 'string' } },
    rounds: {
      type: 'array',
      items: { type: 'array', items: { anyOf: [{ type: 'integer' }, { type: 'null' }] } },
    },
    targetScore: { type: 'integer' },
    notes: { type: 'string' },
  },
  required: ['players', 'rounds', 'targetScore', 'notes'],
  additionalProperties: false,
};

function setCors(req, res) {
  const origin = req.headers.origin;
  if (isAllowedOrigin(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', '86400');
  }
}

function sanitize(parsed) {
  const players = (Array.isArray(parsed.players) ? parsed.players : [])
    .map(p => String(p ?? '').trim().slice(0, 40))
    .slice(0, 8);
  const n = players.length;
  const rounds = (Array.isArray(parsed.rounds) ? parsed.rounds : [])
    .slice(0, 200)
    .map(row => Array.from({ length: n }, (_, i) => {
      const v = Array.isArray(row) ? row[i] : null;
      return Number.isInteger(v) && Math.abs(v) <= 20000 ? v : null;
    }));
  const targetScore = parsed.targetScore === 5000 ? 5000 : 10000;
  const notes = String(parsed.notes ?? '').slice(0, 500);
  return { players, rounds, targetScore, notes };
}

export default async function handler(req, res) {
  setCors(req, res);
  if (req.method === 'OPTIONS') return res.status(204).end();
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  if (!isAllowedOrigin(req.headers.origin)) {
    return res.status(403).json({ error: 'Požiadavka nie je z aplikácie Kocky sveta.' });
  }

  const ip = String(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown').split(',')[0].trim();
  if (rateLimited(ip)) {
    return res.status(429).json({ error: 'Príliš veľa skenov za krátky čas. Skús to o hodinu.' });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('[api/scan] ANTHROPIC_API_KEY is not configured');
    return res.status(500).json({ error: 'Skenovanie nie je na serveri nastavené.' });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Neplatná požiadavka.' });
  }

  const { image, mimeType = 'image/jpeg' } = body || {};
  if (typeof image !== 'string' || !image) {
    return res.status(400).json({ error: 'Chýba obrázok.' });
  }
  if (image.length > MAX_IMAGE_BASE64) {
    return res.status(413).json({ error: 'Fotka je príliš veľká.' });
  }
  if (!ALLOWED_MIME_TYPES.includes(mimeType)) {
    return res.status(400).json({ error: 'Nepodporovaný typ obrázka.' });
  }

  const client = new Anthropic();
  try {
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: 4096,
      // nízke úsilie = najmenej tokenov; prepis tabuľky nepotrebuje dlhé uvažovanie
      output_config: {
        effort: 'low',
        format: { type: 'json_schema', schema: RESULT_SCHEMA },
      },
      system: SYSTEM,
      messages: [{
        role: 'user',
        content: [
          { type: 'image', source: { type: 'base64', media_type: mimeType, data: image } },
          { type: 'text', text: PROMPT },
        ],
      }],
    });

    if (response.stop_reason === 'refusal') {
      console.warn('[api/scan] refusal', response.stop_details?.category ?? null);
      return res.status(422).json({ error: 'Túto fotku sa nepodarilo spracovať. Skús inú.' });
    }
    if (response.stop_reason === 'max_tokens') {
      return res.status(422).json({ error: 'Tabuľka je príliš dlhá na jeden sken. Odfoť ju po častiach.' });
    }

    const text = response.content.find(b => b.type === 'text')?.text ?? '';
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      console.error('[api/scan] unparsable output, length', text.length);
      return res.status(502).json({ error: 'AI nevrátila použiteľný výsledok, skús inú fotku.' });
    }

    const result = sanitize(parsed);
    if (result.players.length < 2) {
      return res.status(422).json({ error: 'Na fotke sa nenašli aspoň dvaja hráči.' });
    }
    console.log('[api/scan] ok', { players: result.players.length, rounds: result.rounds.length, in: response.usage?.input_tokens, out: response.usage?.output_tokens });
    return res.status(200).json(result);
  } catch (e) {
    if (e instanceof Anthropic.AuthenticationError) {
      console.error('[api/scan] invalid API key');
      return res.status(502).json({ error: 'Skenovanie je dočasne nedostupné.' });
    }
    if (e instanceof Anthropic.RateLimitError) {
      return res.status(503).json({ error: 'Skenovacia služba je preťažená, skús to o chvíľu.' });
    }
    if (e instanceof Anthropic.APIError) {
      console.error('[api/scan] Anthropic API error', e.status, e.requestID ?? '');
      return res.status(502).json({ error: 'Skenovanie je dočasne nedostupné.' });
    }
    console.error('[api/scan] unexpected error', e?.name);
    return res.status(500).json({ error: 'Neočakávaná chyba servera.' });
  }
}
