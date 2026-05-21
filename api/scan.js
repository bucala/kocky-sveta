// Vercel serverless function — proxies image to Anthropic Claude Vision.
// API key stays server-side, never exposed to the browser.
export const config = { runtime: 'edge' };

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

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'ANTHROPIC_API_KEY not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { image, mimeType = 'image/jpeg' } = body;
  if (!image) {
    return new Response(JSON.stringify({ error: 'Missing image (base64)' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
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
      return new Response(JSON.stringify({ error: `Anthropic API error: ${resp.status}`, detail: errText }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await resp.json();
    const rawText = data.content?.[0]?.text ?? '';

    // Parse JSON from Claude's response (strip any accidental markdown fences)
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return new Response(JSON.stringify({ error: 'Claude returned no JSON', raw: rawText }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const parsed = JSON.parse(jsonMatch[0]);

    // Basic validation
    if (!Array.isArray(parsed.players) || !Array.isArray(parsed.rounds)) {
      return new Response(JSON.stringify({ error: 'Invalid structure from Claude', raw: rawText }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(parsed), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
