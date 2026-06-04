import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getApplicantThankYouTemplate } from "../../../src/lib/templates/applicantThankYou";
import { getHRNotificationTemplate } from "../../../src/lib/templates/hrNotification";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, number, college, program, message } = body;

    if (!name || !email || !number || !program) {
      return NextResponse.json(
        { error: "Required fields (name, email, number, program) are missing" },
        { status: 400 }
      );
    }

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465", 10),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    let origin = request.headers.get("origin") || "https://dct-internship-web.vercel.app";
    if (origin.includes("localhost") || origin.includes("127.0.0.1")) {
      origin = "https://dct-internship-web.vercel.app";
    }

    // 1. Send thank you mail to applicant
    const applicantMailOptions = {
      from: `"DCT Technology" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your application! - DCT Technology",
      html: getApplicantThankYouTemplate(name, program, origin),
    };

    // 2. Send detailed info mail to HR
    const hrMailOptions = {
      from: `"DCT Website Portal" <${process.env.SMTP_USER}>`,
      to: "hr@dctinfotech.com",
      cc: "himanshukar1810@gmail.com",
      subject: `New Internship Application: ${name} (${program})`,
      html: getHRNotificationTemplate({ name, email, number, college, program, message }),
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(applicantMailOptions),
      transporter.sendMail(hrMailOptions),
    ]);

    return NextResponse.json({ success: true, message: "Emails sent successfully" });
  } catch (error: any) {
    console.error("Error in contact form submission API:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error?.message || error },
      { status: 500 }
    );
  }
}
