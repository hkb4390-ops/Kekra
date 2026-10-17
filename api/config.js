export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Put the entire JSON array into Vercel -> Settings -> Environment Variables
  // using the key PLATFORMS_JSON. Keep parsing on the server.
  const rawJson = process.env.PLATFORMS_JSON;
  if (!rawJson || !rawJson.trim()) {
    return res.status(500).json({
      error: "PLATFORMS_JSON is not configured in Vercel. Add the full JSON array and redeploy."
    });
  }

  try {
    const platforms = JSON.parse(rawJson);
    if (!Array.isArray(platforms)) {
      return res.status(400).json({ error: "PLATFORMS_JSON must be a JSON array of objects." });
    }
    for (const [index, item] of platforms.entries()) {
      if (!item || typeof item !== "object" || Array.isArray(item)) {
        return res.status(400).json({ error: `Invalid item at index ${index}: each entry must be an object.` });
      }
    }
    return res.status(200).json({ platforms });
  } catch (error) {
    return res.status(400).json({
      error: "PLATFORMS_JSON contains invalid JSON. Paste the complete JSON array, including [ and ]."
    });
  }
}
