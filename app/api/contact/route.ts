import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); }
  catch { return NextResponse.json({ error: "Please submit a valid form." }, { status: 400 }); }

  const parsed = quoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check your details and try again.", issues: parsed.error.flatten().fieldErrors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return NextResponse.json({ error: "The enquiry service is not configured yet. Your message has not been sent. Please contact the company directly once its contact details are available." }, { status: 503 });
  }

  const { name, email, phone, projectType, message } = parsed.data;
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New website enquiry — ${projectType}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject type: ${projectType}\n\nMessage:\n${message}`,
      }),
      cache: "no-store",
    });
    if (!response.ok) {
      return NextResponse.json({ error: "We could not deliver your enquiry right now. Please try again later." }, { status: 502 });
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "A connection issue prevented delivery. Please try again later." }, { status: 502 });
  }
}
