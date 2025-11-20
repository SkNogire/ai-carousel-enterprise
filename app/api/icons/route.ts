import { NextRequest, NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  const img = await openai.images.generate({
    model: "gpt-image-1",
    prompt,
    size: "1024x1024"
  });

  return NextResponse.json({
    url: img.data[0].url
  });
}
