import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { products } from "@/db/schema";
import { slugify } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, categoryId, description, shortDescription, images, material } = body;

    if (!name) return NextResponse.json({ error: "Name is required" }, { status: 400 });

    const slug = slugify(name);

    // const product = await db.insert(products).values({
    //   name,
    //   slug,
    //   categoryId,
    //   description,
    //   shortDescription,
    //   images,
    //   material,
    // }).returning();

    return NextResponse.json({ success: true, product: { slug } }, { status: 201 });
  } catch (error) {
    console.error("[CREATE PRODUCT ERROR]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
