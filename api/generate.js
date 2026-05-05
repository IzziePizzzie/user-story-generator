export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { description, toolType, domain } = req.body;

  if (!description || description.trim().length < 10) {
    return res.status(400).json({ error: 'Description too short' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const context = [
    toolType ? `Product type: ${toolType}` : null,
    domain ? `Industry: ${domain}` : null,
  ].filter(Boolean).join('\n');

  const prompt = `You are an expert product manager. Generate a well-structured user story from the following feature description.

${context ? `Context:\n${context}\n` : ''}Feature description: "${description.trim()}"

Output EXACTLY in this format, nothing else:

**User Story**
As a [specific user role],
I want to [specific action or feature],
So that [concrete benefit or outcome].

**Acceptance Criteria**
- Given [initial context or state], When [action is performed], Then [expected result].
- Given [initial context or state], When [action is performed], Then [expected result].
- Given [initial context or state], When [action is performed], Then [expected result].

Rules:
- The user role must be specific (not just "user")
- Each acceptance criterion must be testable and concrete
- Keep language clear and non-technical
- Do not add any explanation or commentary outside the format above`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 512,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(502).json({ error: error.error?.message || 'API error' });
    }

    const data = await response.json();
    const text = data.content[0].text;

    return res.status(200).json({ result: text });
  } catch (err) {
    return res.status(500).json({ error: 'Generation failed. Please try again.' });
  }
}
