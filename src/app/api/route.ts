import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  return new Response(`${request.body} + hello world`)
}
