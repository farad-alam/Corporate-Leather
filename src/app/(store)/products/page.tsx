"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/product/ProductCard";
import type { ProductWithOptions } from "@/types";

// Mock data
const MOCK_PRODUCTS: ProductWithOptions[] = [
  {
    id: 1,
    name: "Executive Bifold Wallet",
    slug: "executive-bifold-wallet",
    categoryId: 1,
    category: { id: 1, name: "Wallets", slug: "wallets" },
    description: "A premium leather wallet designed for the modern executive.",
    shortDescription: "Classic bifold.",
    images: ["/products/wallet.png"],
    featured: true,
    material: "Full-Grain Leather",
    displayOrder: 1,
    tags: ["wallet", "bifold"],
    createdAt: new Date(),
    updatedAt: new Date(),
    customizationGroups: [
      { id: 1, productId: 1, groupKey: "leather_type", label: "Leather Type", type: "single", required: true, displayOrder: 1, options: [ { id: 1, groupId: 1, label: "Full Grain Pebbled", value: "pebbled", description: null, imageUrl: null, displayOrder: 1 } ] },
      { id: 2, productId: 1, groupKey: "color", label: "Color", type: "single", required: true, displayOrder: 2, options: [ { id: 3, groupId: 2, label: "Classic Black", value: "black", description: "#0f0f14", imageUrl: null, displayOrder: 1 } ] }
    ]
  },
  {
    id: 2,
    name: "Premium Card Holder",
    slug: "premium-card-holder",
    categoryId: 1,
    category: { id: 1, name: "Wallets", slug: "wallets" },
    description: "Sleek and minimal card holder.",
    shortDescription: "Minimal card holder.",
    images: ["/products/cardholder.png"],
    featured: false,
    material: "Full-Grain Leather",
    displayOrder: 2,
    tags: ["card holder", "minimal"],
    createdAt: new Date(),
    updatedAt: new Date(),
    customizationGroups: [
      { id: 3, productId: 2, groupKey: "leather_type", label: "Leather Type", type: "single", required: true, displayOrder: 1, options: [ { id: 4, groupId: 3, label: "Smooth Nappa", value: "nappa", description: null, imageUrl: null, displayOrder: 1 } ] }
    ]
  },
  {
    id: 3,
    name: "Leather Document Bag",
    slug: "leather-document-bag",
    categoryId: 2,
    category: { id: 2, name: "Bags", slug: "bags" },
    description: "The ultimate bag for corporate professionals.",
    shortDescription: "Professional document bag.",
    images: ["/products/gift-set.png"],
    featured: true,
    material: "Full-Grain Leather",
    displayOrder: 3,
    tags: ["bag", "document"],
    createdAt: new Date(),
    updatedAt: new Date(),
    customizationGroups: [
      { id: 5, productId: 3, groupKey: "color", label: "Color", type: "single", required: true, displayOrder: 1, options: [ { id: 5, groupId: 5, label: "Navy Blue", value: "navy", description: "#1e293b", imageUrl: null, displayOrder: 1 } ] }
    ]
  }
];

const CATEGORIES = ["All", "Wallets", "Bags", "Accessories", "Gift Sets"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category?.name === activeCategory);

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "var(--navbar-height)", paddingBottom: "var(--space-24)" }}>
      <div className="container" style={{ paddingTop: "var(--space-12)" }}>
        
        <div style={{ textAlign: "center", marginBottom: "var(--space-16)" }}>
          <span className="section-eyebrow" style={{ justifyContent: "center" }}>B2B Catalog</span>
          <h1 style={{ marginTop: "var(--space-2)", marginBottom: "var(--space-4)" }}>Corporate Leather Collection</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-lg)", maxWidth: "600px", marginInline: "auto" }}>
            Select a product below to begin customization. Minimum order quantity is 50 pieces for all items.
          </p>
        </div>

        <div style={{ display: "flex", gap: "var(--space-3)", justifyContent: "center", marginBottom: "var(--space-12)", flexWrap: "wrap" }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`tag ${activeCategory === cat ? "tag-dark" : "tag-grey"}`}
              style={{ padding: "0.5rem 1.25rem", cursor: "pointer", background: activeCategory === cat ? "var(--charcoal)" : "var(--platinum)" }}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "var(--space-8)" }}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div style={{ textAlign: "center", padding: "var(--space-12)", background: "var(--platinum)", borderRadius: "var(--radius-lg)" }}>
            <h3>No products found</h3>
            <p style={{ color: "var(--text-secondary)", marginTop: "var(--space-2)" }}>Check back later for new corporate gifts in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}
