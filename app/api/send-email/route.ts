import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail", // Use Gmail service
  auth: {
    user: "qaziadan.hidayat.skipq@gmail.com", // Your Gmail address
    pass: process.env.G_PASS, // App password or Gmail account password
  },
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !company || !message) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    console.log("Form submission received:", {
      name,
      email,
      company,
      message,
    });

    // Configure email options
    const emailContent = `
      <h3>New Enterprise Solution Inquiry</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company Name:</strong> ${company}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `;

    const info = await transporter.sendMail({
      from: `qaziadan.hidayat.skipq@gmail.com`, // sender address
      to: "Support@vetmentorai.com", // recipient email
      subject: `HR NOVA AI - Enterprise Inquiry ${name}`, // Subject line
      html: emailContent, // email body
    });

    console.log("Email sent successfully:", info.messageId);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("[EMAIL_ERROR]", error);
    return new NextResponse("Failed to send email", { status: 500 });
  }
}