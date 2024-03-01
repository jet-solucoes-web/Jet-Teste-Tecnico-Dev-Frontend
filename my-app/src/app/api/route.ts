import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import cars from "./data";

export async function GET(_req: NextApiRequest) {
  return NextResponse.json({ cars })
}