import dbConnect from "@/lib/db";
import { Contact } from "@/models/Contact.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {

    await dbConnect()
    const body = await req.json();

    const { firstName, lastName, email, phoneNo, message, services, expense } =
      body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phoneNo ||
      !message ||
      !services ||
      !expense
    ) {
      return NextResponse.json(
        { error: "Missing or invalid required fields" },
        { status: 400 }
      );
    }

    const newContact = await Contact.create({
      firstName,
      lastName,
      email,
      phoneNo,
      message,
      services,
      expense,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact created successfully",
        contact: newContact,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Contact POST error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
