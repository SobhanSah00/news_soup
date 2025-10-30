import { GoogleGenAI } from "@google/genai";
import { config } from "../config/enviorment.js";

const AI = new GoogleGenAI({
  apiKey: config.GEMINI_API_KEY
});
// const model = AI.getGenerativeModel({ model: "gemini-2.5-flash" });

export class GeminiService {
  async summarizeArticles(articles: any[]) {
    const summaries = [];

    for (const article of articles) {
      const prompt = `You are an expert news curator creating a daily digest for busy professionals who want to stay informed without information overload.

ARTICLE INFORMATION:
Title: ${article.title}
Description: ${article.description || "No description available"}
Source: ${article.source}

YOUR TASK:
Create a balanced, engaging summary (80-120 words) that captures the essence of this story.

TONE SELECTION GUIDE:
- 🔥 Exciting: Breaking news, major announcements, viral trends, cultural moments
- 🧠 Insightful: Analysis, research findings, expert opinions, deep dives
- ⚠️ Alert: Warnings, crises, important updates, urgent matters
- 💡 Innovative: New tech, startups, creative solutions, scientific breakthroughs
- ❤️ Uplifting: Positive stories, human interest, feel-good news, achievements
- 🧊 Neutral: Standard updates, routine news, factual reports

WRITING GUIDELINES:
1. Start with the most newsworthy aspect - hook readers immediately
2. Write 3-4 sentences that flow naturally and build on each other
3. Include specific details: names, numbers, locations, or key facts when available
4. Explain the "why it matters" - give context or implications
5. Use active voice and vivid verbs
6. Avoid jargon, clichés, and redundancy with the title
7. Match the tone to the content authentically

OUTPUT FORMAT (use exactly this structure):
---
**${article.title}**  
🗞️ *Source:* ${article.source}  
🔥 *Tone:* [Choose appropriate emoji and label]

**Summary:** [Your 3-4 sentence summary here, flowing naturally as a cohesive paragraph]

🔗 [Read more](${article.url})
---

Write the summary now:`;

      const result = await await AI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });
      const text = result.text;

      console.log("Summerized gemini text are :",text);
      

      if(text) {
        summaries.push(text.trim());
      }
      else {
        throw new Error("something went wrong in gemini service funciton in generationg ig . . .")
      }
      
    }

    return summaries;
  }
}