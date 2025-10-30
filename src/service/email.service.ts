import { Resend } from "resend";
import { config } from "../config/enviorment.js";

export class EmailService {
  private resend: Resend;

  constructor() {
    this.resend = new Resend(config.RESEND_EMAIL_API_KEY);
  }

  async sendDigest(to: string, subject: string, htmlContent: string) {
    try {
      const { data, error } = await this.resend.emails.send({
        from: `Daily Digest ${config.EMAIL_USER}`,
        to,
        subject,
        html: htmlContent,
      });

      if (error) {
        console.error("Email send error:", error);
        return { success: false, error };
      }

      return { success: true, data };
    } catch (err: any) {
      console.error("Email sending failed:", err);
      return { success: false, error: err.message };
    }
  }
}
