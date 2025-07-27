export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = request.body;
  const apiKey = process.env.GEMINI_API_KEY; // Reads the secret key from Vercel

  if (!prompt) {
    return response.status(400).json({ error: 'Prompt is required' });
  }

  if (!apiKey) {
    return response.status(500).json({ error: 'API key is not configured' });
  }

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  const payload = {
    contents: [{
      role: "user",
      parts: [{ text: prompt }]
    }]
  };

  try {
    const geminiResponse = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!geminiResponse.ok) {
      const errorText = await geminiResponse.text();
      console.error('Gemini API Error:', errorText);
      return response.status(geminiResponse.status).json({ error: 'Failed to fetch from Gemini API' });
    }

    const data = await geminiResponse.json();
    response.status(200).json(data);
  } catch (error) {
    console.error('Internal Server Error:', error);
    response.status(500).json({ error: 'Internal Server Error' });
  }
}
