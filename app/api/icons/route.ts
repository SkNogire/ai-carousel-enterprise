import { openai } from "@/lib/openai";

export async function POST(req){
  const { prompt } = await req.json();

  const img = await openai.images.generate({
    model:"gpt-image-1",
    prompt:`minimal flat vector icon of ${prompt}`,
    size:"512x512"
  });

  return Response.json({ url: img.data[0].url });
}
