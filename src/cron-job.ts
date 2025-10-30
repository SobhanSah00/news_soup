import cron from "node-cron";
import { NewsService } from "./service/news.service.js";
import { GeminiService } from "./service/gemini.service.js";
import { EmailService } from "./service/email.service.js";
import { SMSService } from "./service/sms.service.js";
import { WhatsAppMessageService } from "./service/whatspp.service.js"

const news = new NewsService();
const gemini = new GeminiService();
const email = new EmailService();
const sms = new SMSService();
const whatsappSms = new WhatsAppMessageService()

export function initCronJobs() {
  // Run at 9 AM and 6 PM
  cron.schedule("12 1 * * *", async () => {
    console.log("Fetching and sending daily digest...");

    const topics = ["Technology"];
    let combinedSummaries: string[] = [];

    for (const topic of topics) {
      const articles = await news.getNewsByTopic(topic);
      const summaries = await gemini.summarizeArticles(articles);
      combinedSummaries.push(`\n\n🗞️ ${topic.toUpperCase()}\n${summaries.join("\n")}`);
    }

    const htmlDigest = combinedSummaries.join("<hr>");
    const smsDigest = combinedSummaries.map(s => s.slice(0, 120) + "...").join("\n");

    // Send notifications (optional during testing)
    await email.sendDigest("sobhansahoo2000@gmail.com", "📰 AI News Digest (Manual Test)", htmlDigest);
    await sms.sendSMS("+919040006148", smsDigest);
    await whatsappSms.sendWhatsApp("919040006148",htmlDigest)

    console.log("✅ Manual digest sent successfully!");
    // res.json({ message: "Manual digest sent successfully", htmlDigest });

    console.log("✅ Digest sent successfully!");
  });
}
