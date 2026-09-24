import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const id = parseInt(params.id);
    if (isNaN(id)) return NextResponse.json({ error: "Invalid ID" }, { status: 400 });

    // const inquiry = await db.query.inquiries.findFirst({
    //   where: eq(inquiries.id, id),
    //   with: { product: true }
    // });
    
    // if (!inquiry) return NextResponse.json({ error: "Not found" }, { status: 404 });
    // return NextResponse.json({ inquiry });

    return NextResponse.json({ inquiry: null });
  } catch (error) {
    console.error("[FETCH INQUIRY ERROR]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const id = parseInt(params.id);
    if (isNaN(id)) return NextResponse.json({ error: "Invalid ID" }, { status: 400 });

    const body = await req.json();
    
    // await db.update(inquiries).set(body).where(eq(inquiries.id, id));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[UPDATE INQUIRY ERROR]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
