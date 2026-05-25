// Vercel serverless function — proxies image to Anthropic Claude Vision.
// API key stays server-side, never exposed to the browser.

const SYSTEM = `Si expert na čítanie ručne písaných skóre-tabuliek zo stolovoej hry Kocky.
Vráť VÝLUČNE platný JSON objekt — žiadny iný text, žiadne markdown bloky.`;

const PROMPT = `Pozri sa na fotku ručne písanej skóre-tabuľky zo stolovej hry Kocky (dice game).

Úloha:
1. Zisti mená hráčov z hlavičkového riadku.
2. Prečítaj každé kolo (riadok) — hodnoty sú DELTA body za dané kolo (nie kumulatívny súčet).
   Ak tabuľka obsahuje kumulatívne hodnoty (rastúci súčet), prepočítaj ich na delta.
3. Čiarka / dash / prázdno = hráč nehádzal (null).
4. Penalta -1000 môže byť zapísaná ako "-1000", "P", "—1000" alebo podobne.
5. Odhadni cieľové skóre (zvyčajne 10000).

Vráť PRESNE tento JSON (bez akéhokoľvek iného textu):
{
  "players": ["Meno1", "Meno2"],
  "rounds": [[100, 200], [300, null], ...],
  "targetScore": 10000,
  "notes": "Krátka poznámka ak niečo nebolo jasné"
}

Pravidlá:
- rounds je pole polí — každý vnútorný pole má jednu hodnotu za hráča
- Hodnoty sú celé čísla alebo null
- Ak hráč nedohral kolo, daj null
- Nepremeniteľné: počet hodnôt v každom kole = počet hráčov`;

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not configured' });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  const { image, mimeType = 'image/jpeg' } = body || {};
  if (!image) {
    return res.status(400).json({ error: 'Missing image (base64)' });
  }

  const anthropicBody = {
    model: 'claude-sonnet-4-6',
    max_tokens: 2048,
    system: SYSTEM,
    messages: [{
      role: 'user',
      content: [
        { type: 'image', source: { type: 'base64', media_type: mimeType, data: image } },
        { type: 'text', text: PROMPT },
      ],
    }],
  };

  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify(anthropicBody),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return res.status(502).json({ error: `Anthropic API error: ${resp.status}`, detail: errText });
    }

    const data = await resp.json();
    const rawText = data.content?.[0]?.text ?? '';

    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return res.status(502).json({ error: 'Claude returned no JSON', raw: rawText });
    }

    const parsed = JSON.parse(jsonMatch[0]);

    if (!Array.isArray(parsed.players) || !Array.isArray(parsed.rounds)) {
      return res.status(502).json({ error: 'Invalid structure from Claude', raw: rawText });
    }

    return res.status(200).json(parsed);
  } catch (e) {
    return res.status(500).json({ error: String(e) });
  }
}
