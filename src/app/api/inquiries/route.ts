import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { generateInquiryNumber } from "@/lib/utils";
import { desc } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const required = [
      "companyName",
      "contactPerson",
      "email",
      "phone",
      "productId",
      "productName",
      "customizations",
      "quantity",
      "timeline",
    ];

    for (const field of required) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const inquiryNumber = generateInquiryNumber();

    // Insert into DB
    // const result = await db.insert(inquiries).values({
    //   inquiryNumber,
    //   ...body,
    // }).returning();

    console.log("[INQUIRY CREATED]", { inquiryNumber, ...body });

    return NextResponse.json(
      { success: true, inquiryNumber },
      { status: 201 }
    );
  } catch (error) {
    console.error("[INQUIRY ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  // TODO: Add admin auth check here

  try {
    // const allInquiries = await db.query.inquiries.findMany({
    //   orderBy: [desc(inquiries.createdAt)],
    // });
    
    // Mock response for now
    return NextResponse.json({ inquiries: [] });
  } catch (error) {
    console.error("[FETCH INQUIRIES ERROR]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
