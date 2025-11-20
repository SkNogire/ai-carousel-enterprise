import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.NOGIRE_GLOBAL_OPENAI_KEY!,
});
