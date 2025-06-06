import dbConnect from "@/app/lib/db";
import Card from "@/app/(models)/Card";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await dbConnect();
  try {
    const card = await Card.findById(params.id);
    if (!card) return NextResponse.json({ message: "Card not found" }, { status: 404 });
    return NextResponse.json({ foundCard: card });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  await dbConnect();
  try {
    const body = await req.json();
    const updatedCard = await Card.findByIdAndUpdate(params.id, body, { new: true });
    return NextResponse.json(updatedCard);
  } catch (err) {
    return NextResponse.json({ message: "Update failed", err }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  await dbConnect();
  try {
    await Card.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Card deleted" });
  } catch (err) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
