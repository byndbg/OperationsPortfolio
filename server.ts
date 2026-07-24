import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { portfolioDataText } from "./src/portfolioDataText";

let ai: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!ai) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is required. Please set it in Settings > Secrets.");
    }
    ai = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
  }
  return ai;
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing JSON requests
  app.use(express.json());

  // API endpoint for chatbot communication
  app.post("/api/chat", async (req, res) => {
    try {
      const { history } = req.body;
      if (!history || !Array.isArray(history)) {
        return res.status(400).json({ error: "Invalid history format. Expected an array of chat messages." });
      }

      const client = getGeminiClient();

      // Construct the system instruction containing all the portfolio data
      const systemInstruction = `You are a warm, highly professional, and helpful AI assistant representing Blake Dyson Gibbons on his portfolio website.
Your objective is to answer questions from recruiters, hiring managers, and general visitors about Blake's professional experience, background, skills, education, projects, and press coverage.

Personality & Guidelines:
1. Speak in a helpful, friendly, and professional tone.
2. Refer to yourself as Blake's virtual assistant. Talk about Blake in the third person (e.g., "Blake has experience in...", "I can tell you that Blake...").
3. Always base your answers strictly on the official portfolio data provided below. Do not make up facts or project details.
4. If a user asks a question about something not mentioned in Blake's portfolio, answer politely that you only have access to his professional portfolio details, but offer to help connect them directly with Blake (email: bdg710@gmail.com, phone: (803) 760-9872).
5. Keep your responses relatively concise and easy to read (use short paragraphs and bullet points if explaining multiple items).

Here is Blake Dyson Gibbons' complete official portfolio data:
${JSON.stringify(portfolioDataText, null, 2)}
`;

      // Format history for @google/genai SDK
      // The contents parameter expects an array of Content objects:
      // { role: "user" | "model", parts: [{ text: string }] }
      const formattedContents = history.map((msg: any) => ({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.content || "" }]
      }));

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: formattedContents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Error in /api/chat:", error);
      res.status(500).json({ error: error.message || "Failed to generate response from chatbot." });
    }
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Robots & Sitemap explicit endpoints
  app.get("/robots.txt", (req, res) => {
    res.sendFile(path.join(process.cwd(), "public", "robots.txt"));
  });

  app.get("/sitemap.xml", (req, res) => {
    res.type("text/xml");
    res.sendFile(path.join(process.cwd(), "public", "sitemap.xml"));
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode...");
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
