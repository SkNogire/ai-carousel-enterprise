import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    const img = await openai.images.generate({
      model: "gpt-image-1",
      prompt,
      size: "512x512"
    });

    // SAFE TYPE CHECK (fixes your Vercel error)
    const url = img?.data?.[0]?.url || null;

    if (!url) {
      return NextResponse.json(
        { error: "Image generation failed" },
        { status: 400 }
      );
    }

    return NextResponse.json({ url });
  } catch (e) {
    return NextResponse.json(
      { error: "Server error", details: String(e) },
      { status: 500 }
    );
  }
}
