import dbConnect from "@/app/lib/db";
import Card from "@/app/(models)/Card";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  try {
    const cards = await Card.find();
    return NextResponse.json({ cards }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  await dbConnect();
  try {
    const body = await req.json();
    const card = await Card.create(body);
    return NextResponse.json(card, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}