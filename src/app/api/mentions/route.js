import { connectToDatabase } from "@/lib/mongodb";
import Mention from "@/app/adminPage/mentionsupload/page";
import { NextResponse } from "next/server";

// Handle GET Request (Fetch all mentions)
export async function GET() {
  try {
    await connectToDatabase();
    const mentions = await Mention.find().sort({ createdAt: -1 });
    return NextResponse.json(mentions, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch mentions" }, { status: 500 });
  }
}

// Handle POST Request (Create a new mention)
export async function POST(req) {
  try {
    await connectToDatabase();
    const { platform, url, excerpt, title, image } = await req.json();
    const newMention = new Mention({ platform, url, excerpt, title, image });
    await newMention.save();
    return NextResponse.json({ message: "Mention added successfully!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save mention" }, { status: 500 });
  }
}

// Handle DELETE Request (Delete a mention by ID)
export async function DELETE(req) {
  try {
    await connectToDatabase();
    const { id } = await req.json();
    await Mention.findByIdAndDelete(id);
    return NextResponse.json({ message: "Mention deleted successfully!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete mention" }, { status: 500 });
  }
}
