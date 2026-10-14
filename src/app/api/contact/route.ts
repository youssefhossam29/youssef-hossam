import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, subject, message } = body;

    // Validate required fields
    if (!fullName || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const host = process.env.MAIL_HOST || "smtp.gmail.com";
    const port = Number(process.env.MAIL_PORT) || 587;
    const user = process.env.MAIL_USERNAME || "youssefhossam2902@gmail.com";
    const pass = process.env.MAIL_PASSWORD || "qjeqpoiyfcrtvccb";
    const fromName = process.env.MAIL_FROM_NAME || "Portfolio Contact Form";
    const fromAddress = process.env.MAIL_FROM_ADDRESS || user;
    const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "youssefhossam2902@gmail.com";

    // Create transporter
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
    });

    const formattedDate = new Date().toLocaleString("en-US", {
      timeZone: "Africa/Cairo",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Send email
    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: recipient,
      replyTo: `"${fullName}" <${email}>`,
      subject: `🔔 New Portfolio Message: ${subject}`,
      text: `You have received a new message from your portfolio contact form:
      
Name: ${fullName}
Email: ${email}
Phone: ${phone || "Not provided"}
Subject: ${subject}
Date: ${formattedDate} (Cairo Time)

Message:
${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b1120; color: #f8fafc; margin: 0; padding: 24px; }
            .container { max-width: 600px; margin: 0 auto; background: #111827; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; overflow: hidden; }
            .header { background: linear-gradient(135deg, #0649C1 0%, #676CDB 100%); padding: 28px 24px; text-align: center; }
            .header h1 { margin: 0; font-size: 20px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px; }
            .header p { margin: 6px 0 0; font-size: 13px; color: rgba(255, 255, 255, 0.85); }
            .content { padding: 28px 24px; }
            .field-row { margin-bottom: 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.06); padding-bottom: 12px; }
            .field-label { font-size: 11px; text-transform: uppercase; font-weight: 700; color: #94a3b8; letter-spacing: 0.5px; margin-bottom: 4px; }
            .field-value { font-size: 15px; color: #f8fafc; font-weight: 500; }
            .field-value a { color: #60a5fa; text-decoration: none; }
            .message-box { background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 18px; margin-top: 20px; }
            .message-label { font-size: 12px; font-weight: 700; color: #a78bfa; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px; }
            .message-body { font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; }
            .footer { background: #0c1222; padding: 16px 24px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid rgba(255, 255, 255, 0.06); }
            .badge { display: inline-block; background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.3); padding: 4px 10px; border-radius: 9999px; font-size: 11px; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <span class="badge">New Contact Submission</span>
              <h1 style="margin-top: 12px;">${subject}</h1>
              <p>Submitted via Youssef Hossam Portfolio</p>
            </div>
            
            <div class="content">
              <div class="field-row">
                <div class="field-label">Sender Name</div>
                <div class="field-value">${fullName}</div>
              </div>

              <div class="field-row">
                <div class="field-label">Email Address</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>

              <div class="field-row">
                <div class="field-label">Phone / WhatsApp</div>
                <div class="field-value">${phone || '<span style="color: #64748b;">Not provided</span>'}</div>
              </div>

              <div class="field-row">
                <div class="field-label">Submission Time</div>
                <div class="field-value" style="font-size: 13px; color: #94a3b8;">${formattedDate}</div>
              </div>

              <div class="message-box">
                <div class="message-label">Project Details / Message:</div>
                <div class="message-body">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
              </div>
            </div>

            <div class="footer">
              Direct reply enabled — click "Reply" in your email client to respond to <strong>${email}</strong>.
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error: unknown) {
    console.error("Failed to send contact email:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
