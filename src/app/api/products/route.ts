import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { products } from "@/db/schema";
import { asc, desc } from "drizzle-orm";

export async function GET(req: NextRequest) {
  try {
    // const allProducts = await db.query.products.findMany({
    //   with: {
    //     category: true,
    //     customizationGroups: {
    //       with: { options: true }
    //     }
    //   },
    //   orderBy: [desc(products.featured), asc(products.displayOrder)],
    // });
    
    // return NextResponse.json({ products: allProducts });
    
    return NextResponse.json({ products: [] });
  } catch (error) {
    console.error("[FETCH PRODUCTS ERROR]", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
