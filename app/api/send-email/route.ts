/* eslint-disable @typescript-eslint/no-explicit-any */
import nodemailer from "nodemailer";

export async function POST(req: any) {
  try {
    const { user_name, user_email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", 
      port: 465, 
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    await transporter.sendMail({
      from: `"${user_name}" <${process.env.EMAIL_USER}>`,
      to: "nazmulsaw@gmail.com",
      subject: `New Contact Form Submission from ${user_name}`,
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
    });
  }
}
