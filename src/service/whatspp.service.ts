
import twilio from "twilio";
import { config } from "../config/enviorment.js";

const client = twilio(config.TWILIO_SID, config.TWILIO_AUTH);

export class WhatsAppMessageService {
  async sendWhatsApp(to: string, message: string) {
    try {
      const res = await client.messages.create({
        from: config.TWILIO_WHATSAPP_PHONE,
        to: `whatsapp:${to}`,
        body: message,
      });
      console.log("✅ Message sent:", res.sid);
      return res.sid;
    } catch (err: any) {
      console.error("❌ Error sending WhatsApp message:", err.message);
      throw err;
    }
  }
}
