// import express from "express";
// import { NewsService } from "./service/news.service.js";
// import { GeminiService } from "./service/gemini.service.js";
// import { EmailService } from "./service/email.service.js";
// import { SMSService } from "./service/sms.service.js";

// const app = express();
// const port = 3000;

// const news = new NewsService();
// const gemini = new GeminiService();
// const email = new EmailService();
// const sms = new SMSService();

// app.get("/test-digest", async (req, res) => {
//   try {
//     const topics = ["AI", "Technology", "Science"];
//     let combinedSummaries: string[] = [];

//     for (const topic of topics) {
//       const articles = await news.getNewsByTopic(topic);
//       const summaries = await gemini.summarizeArticles(articles);
//       combinedSummaries.push(`\n\n🗞️ ${topic.toUpperCase()}\n${summaries.join("\n")}`);
//     }

//     const htmlDigest = combinedSummaries.join("<hr>");
//     const smsDigest = combinedSummaries.map(s => s.slice(0, 120) + "...").join("\n");

//     // Send notifications (optional during testing)
//     await email.sendDigest("sobhansahoo2000@gmail.com", "📰 AI News Digest (Manual Test)", htmlDigest);
//     await sms.sendSMS("+919040006148", smsDigest);

//     console.log("✅ Manual digest sent successfully!");
//     res.json({ message: "Manual digest sent successfully", htmlDigest });
//   } catch (error: any) {
//     console.error("❌ Error in manual digest:", error);
//     res.status(500).json({ error: error.message });
//   }
// });

// app.listen(port, () => {
//   console.log(`🚀 Test server running on http://localhost:${port}`);
// });
