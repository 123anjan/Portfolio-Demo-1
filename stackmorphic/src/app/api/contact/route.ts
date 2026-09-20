import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request payload." },
        { status: 400 },
      );
    }

    const payload = {
      ...body,
      honeypot: typeof body.honeypot === "string" ? body.honeypot : "",
    };

    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const { honeypot, ...validData } = parsed.data;

    if (honeypot && honeypot.length > 0) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    if (JSON.stringify(validData).length > 20000) {
      return NextResponse.json(
        { error: "Payload too large." },
        { status: 413 },
      );
    }

    if (
      !process.env.RESEND_API_KEY ||
      !process.env.CONTACT_TO_EMAIL ||
      !process.env.CONTACT_FROM_EMAIL
    ) {
      return NextResponse.json(
        {
          error:
            "Contact email service is not configured yet. Please contact Stackmorphic directly.",
        },
        { status: 503 },
      );
    }

    return NextResponse.json({
      message: "Project inquiry received successfully.",
      success: true,
      data: {
        ...validData,
        source: "stackmorphic-contact-form",
      },
    });
  } catch {
    return NextResponse.json(
      {
        error:
          "There was a problem processing your inquiry. Please try again later.",
      },
      { status: 500 },
    );
  }
}
