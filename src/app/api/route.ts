import { NextApiRequest } from 'next';

export async function GET(request: NextApiRequest) {
  return new Response(`${request.body} + hello world`);
}
