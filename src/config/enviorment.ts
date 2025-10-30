import dotenv from "dotenv";
dotenv.config({
    path : "./.env"
});

export const config = {
  MEDISTACK_NEWS_API_KEY: process.env.NEWS_API_KEY!,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY!,
  TWILIO_SID: process.env.TWILIO_SID!,
  TWILIO_AUTH: process.env.TWILIO_AUTH!,
  TWILIO_PHONE: process.env.TWILIO_PHONE!,
  TWILIO_WHATSAPP_PHONE: process.env.TWILIO_WHATSAPP_PHONE!,
  EMAIL_USER: process.env.EMAIL_USER!,
  RESEND_EMAIL_API_KEY : process.env.RESEND_EMAIL_API_KEY!,
};
