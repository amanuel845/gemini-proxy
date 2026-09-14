export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  return res.status(200).json({
  success: true,
  models: [
    { id: "gemini-3.6-flash", description: "Stable Flash — best default for free tier" },
    { id: "gemini-3.8-flash", description: "Newest flagship Flash (Sept 2026)" },
    { id: "gemini-3.5-flash-lite", description: "Cheapest, high-volume tasks" },
    { id: "gemini-3.5-flash", description: "Previous stable Flash" },
  ],
});
}
