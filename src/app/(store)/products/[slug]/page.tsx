"use client";

import { useParams } from "next/navigation";
import ProductDetail from "@/components/product/ProductDetail";
import type { ProductWithOptions } from "@/types";

// Mock data matching the configurator mock
const MOCK_PRODUCT: ProductWithOptions = {
  id: 1,
  name: "Executive Bifold Wallet",
  slug: "executive-bifold-wallet",
  categoryId: 1,
  category: { id: 1, name: "Wallets", slug: "wallets" },
  description: "A premium leather wallet designed for the modern executive. Crafted from full-grain leather, it ages beautifully, developing a rich patina over time. Perfect for corporate gifting, it offers ample space for cards, cash, and receipts while maintaining a slim profile.",
  shortDescription: "Classic bifold.",
  images: ["/products/wallet.png", "/products/wallet-open.png", "/products/wallet-detail.png"],
  featured: true,
  material: "Full-Grain Leather",
  displayOrder: 1,
  tags: ["wallet", "bifold"],
  createdAt: new Date(),
  updatedAt: new Date(),
  customizationGroups: [
    { id: 1, productId: 1, groupKey: "leather_type", label: "Leather Type", type: "single", required: true, displayOrder: 1, options: [] },
    { id: 2, productId: 1, groupKey: "color", label: "Color", type: "single", required: true, displayOrder: 2, options: [] },
    { id: 3, productId: 1, groupKey: "card_slots", label: "Card Slots", type: "single", required: true, displayOrder: 3, options: [] },
    { id: 4, productId: 1, groupKey: "coin_pocket", label: "Coin Pocket", type: "single", required: true, displayOrder: 4, options: [] }
  ]
};

export default function ProductPage() {
  const params = useParams();
  // In a real app, fetch based on params.slug
  const product = MOCK_PRODUCT;

  if (!product) {
    return <div className="container section">Product not found.</div>;
  }

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh", paddingTop: "var(--navbar-height)" }}>
      <ProductDetail product={product} />
    </div>
  );
}
