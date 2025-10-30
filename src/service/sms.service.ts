import twilio from "twilio";
import { config } from "../config/enviorment.js";

const client = twilio(config.TWILIO_SID, config.TWILIO_AUTH);

export class SMSService {

    async sendSMS(to: string, message: string) {
        await client.messages.create({
            from: config.TWILIO_PHONE,
            to,
            body: message,
        });
    }
}
