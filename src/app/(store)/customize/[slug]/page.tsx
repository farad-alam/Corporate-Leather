"use client";

import { useEffect, useState } from "react";
import { useConfiguratorStore } from "@/store/configuratorStore";
import WizardShell from "@/components/configurator/WizardShell";
import StepLeather from "@/components/configurator/StepLeather";
import StepColor from "@/components/configurator/StepColor";
import StepFeatures from "@/components/configurator/StepFeatures";
import StepBranding from "@/components/configurator/StepBranding";
import StepQuantity from "@/components/configurator/StepQuantity";
import StepReview from "@/components/configurator/StepReview";
import type { ProductWithOptions } from "@/types";
import { useParams } from "next/navigation";

// Mock fetching product configuration data
const MOCK_PRODUCT: ProductWithOptions = {
  id: 1,
  name: "Executive Bifold Wallet",
  slug: "executive-bifold-wallet",
  categoryId: 1,
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
    {
      id: 1, productId: 1, groupKey: "leather_type", label: "Leather Type", type: "single", required: true, displayOrder: 1,
      options: [
        { id: 1, groupId: 1, label: "Full Grain Pebbled", value: "pebbled", description: "Textured, highly durable leather.", imageUrl: null, displayOrder: 1 },
        { id: 2, groupId: 1, label: "Smooth Nappa", value: "nappa", description: "Buttery soft, smooth finish.", imageUrl: null, displayOrder: 2 },
      ]
    },
    {
      id: 2, productId: 1, groupKey: "color", label: "Color", type: "single", required: true, displayOrder: 2,
      options: [
        { id: 3, groupId: 2, label: "Classic Black", value: "black", description: "#0f0f14", imageUrl: null, displayOrder: 1 },
        { id: 4, groupId: 2, label: "Cognac Brown", value: "cognac", description: "#8b4513", imageUrl: null, displayOrder: 2 },
        { id: 5, groupId: 2, label: "Navy Blue", value: "navy", description: "#1e293b", imageUrl: null, displayOrder: 3 },
      ]
    },
    {
      id: 3, productId: 1, groupKey: "card_slots", label: "Card Slots", type: "single", required: true, displayOrder: 3,
      options: [
        { id: 6, groupId: 3, label: "4 Slots", value: "4", description: "Minimalist profile.", imageUrl: null, displayOrder: 1 },
        { id: 7, groupId: 3, label: "6 Slots", value: "6", description: "Standard capacity.", imageUrl: null, displayOrder: 2 },
        { id: 8, groupId: 3, label: "8 Slots", value: "8", description: "Maximum capacity.", imageUrl: null, displayOrder: 3 },
      ]
    },
    {
      id: 4, productId: 1, groupKey: "coin_pocket", label: "Coin Pocket", type: "single", required: true, displayOrder: 4,
      options: [
        { id: 9, groupId: 4, label: "Without Coin Pocket", value: "no", description: "Slimmer design.", imageUrl: null, displayOrder: 1 },
        { id: 10, groupId: 4, label: "With Coin Pocket", value: "yes", description: "Added utility.", imageUrl: null, displayOrder: 2 },
      ]
    }
  ]
};

export default function CustomizePage() {
  const params = useParams();
  const slug = params.slug as string;
  const { currentStep, setProduct, reset } = useConfiguratorStore();
  const [product, setProductData] = useState<ProductWithOptions | null>(null);

  useEffect(() => {
    // Here we would typically fetch from /api/products/[slug]
    // For now, using mock data
    setProductData(MOCK_PRODUCT);
    setProduct(MOCK_PRODUCT.id, MOCK_PRODUCT.slug, MOCK_PRODUCT.name);

    return () => {
      reset(); // Clear store on unmount
    };
  }, [slug, setProduct, reset]);

  if (!product) {
    return <div className="container section">Loading configurator...</div>;
  }

  // Split feature groups (everything except leather and color)
  const featureGroups = product.customizationGroups.filter(
    (g) => g.groupKey !== "leather_type" && g.groupKey !== "color"
  );
  
  const leatherGroup = product.customizationGroups.find(g => g.groupKey === "leather_type");
  const colorGroup = product.customizationGroups.find(g => g.groupKey === "color");

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return leatherGroup ? <StepLeather group={leatherGroup} /> : <div>No leather options configured.</div>;
      case 2:
        return colorGroup ? <StepColor group={colorGroup} /> : <div>No color options configured.</div>;
      case 3:
        return <StepFeatures groups={featureGroups} />;
      case 4:
        return <StepBranding />;
      case 5:
        return <StepQuantity />;
      case 6:
        return <StepReview product={product} />;
      default:
        return null;
    }
  };

  return (
    <div style={{ paddingTop: "var(--navbar-height)", background: "var(--bg-secondary)", minHeight: "100vh" }}>
      <WizardShell>
        {renderStep()}
      </WizardShell>
    </div>
  );
}
