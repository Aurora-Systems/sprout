import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  console.log(request)
  return new Response("Hello, Next.js!");
}