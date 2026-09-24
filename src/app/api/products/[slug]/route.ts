import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const params = await context.params;
    
    // const product = await db.query.products.findFirst({
    //   where: eq(products.slug, params.slug),
    //   with: {
    //     category: true,
    //     customizationGroups: {
    //       with: { options: true }
    //     }
    //   }
    // });
    
    // if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
    // return NextResponse.json({ product });

    return NextResponse.json({ product: null });
  } catch (error) {
    console.error("[FETCH PRODUCT ERROR]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
