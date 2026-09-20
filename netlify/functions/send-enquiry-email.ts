type EnquiryEmail = {
  name?: string;
  email?: string;
};

const confirmationMessage = `Thank you for reaching out to CTech Cloud Academy.

We have received your enquiry, and our team will review the details and get in touch with you within 1 working day to assist you with the next steps.

We look forward to connecting with you and helping you take the next step in your learning and career journey.

Best Regards,
CTech Cloud Academy
Learn • Transform • Succeed`;

export default async (request: Request) => {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const apiKey = Netlify.env.get("RESEND_API_KEY");
  const fromEmail = Netlify.env.get("RESEND_FROM_EMAIL");

  if (!apiKey || !fromEmail) {
    return Response.json({ error: "Email service is not configured." }, { status: 503 });
  }

  let enquiry: EnquiryEmail;
  try {
    enquiry = (await request.json()) as EnquiryEmail;
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!enquiry.name || !enquiry.email) {
    return Response.json({ error: "Name and email are required." }, { status: 400 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [enquiry.email],
      subject: "Thank you for reaching out to CTech Cloud Academy",
      text: `Hi ${enquiry.name},\n\n${confirmationMessage}`,
    }),
  });

  if (!response.ok) {
    return Response.json({ error: "Email provider rejected the message." }, { status: 502 });
  }

  return Response.json({ sent: true });
};