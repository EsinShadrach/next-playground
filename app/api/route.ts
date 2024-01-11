export async function GET(req: Request, res: Response) {
  return new Response(JSON.stringify("Hello World"));
}

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  console.log(body);
  return new Response(JSON.stringify(body));
}
