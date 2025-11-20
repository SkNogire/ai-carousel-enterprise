let templates = [];

export async function GET(){
  return Response.json(templates);
}

export async function POST(req){
  const data = await req.json();
  const item = {
    id: Date.now(),
    name: data.name,
    preview: data.preview,
    layout: data.layout,
    createdAt: new Date()
  };
  templates.push(item);
  return Response.json(item);
}
