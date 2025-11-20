// app/api/templates/route.ts

let templates: any[] = [];

export async function GET() {
  return Response.json(templates);
}
