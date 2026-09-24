"use client";

import { useConfiguratorStore } from "@/store/configuratorStore";
import type { ProductWithOptions } from "@/types";

type StepReviewProps = {
  product: ProductWithOptions;
};

export default function StepReview({ product }: StepReviewProps) {
  const { selections, brandingType, brandingNotes, logoFile, quantity, timeline } = useConfiguratorStore();

  const getOptionLabel = (groupKey: string, value: string | number) => {
    const group = product.customizationGroups.find((g) => g.groupKey === groupKey);
    if (!group) return value;
    const option = group.options.find((o) => o.value === value);
    return option ? option.label : value;
  };

  return (
    <div>
      <h3 style={{ marginBottom: "var(--space-2)" }}>Review Configuration</h3>
      <p style={{ color: "var(--text-secondary)", marginBottom: "var(--space-6)" }}>
        Please review your selections before submitting the inquiry.
      </p>

      <div style={{ background: "var(--platinum)", padding: "var(--space-6)", borderRadius: "var(--radius-lg)", marginBottom: "var(--space-8)" }}>
        <h4 style={{ marginBottom: "var(--space-4)", borderBottom: "1px solid var(--border)", paddingBottom: "var(--space-2)" }}>Product Specs</h4>
        
        <dl style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "var(--space-3)", fontSize: "var(--text-sm)" }}>
          <dt style={{ color: "var(--text-secondary)", fontWeight: 500 }}>Product</dt>
          <dd style={{ fontWeight: 600 }}>{product.name}</dd>

          {Object.entries(selections).map(([key, val]) => (
            <React.Fragment key={key}>
              <dt style={{ color: "var(--text-secondary)", fontWeight: 500, textTransform: "capitalize" }}>
                {key.replace("_", " ")}
              </dt>
              <dd style={{ fontWeight: 600 }}>
                {Array.isArray(val) 
                  ? val.map(v => getOptionLabel(key, v)).join(", ")
                  : getOptionLabel(key, val)}
              </dd>
            </React.Fragment>
          ))}
        </dl>
      </div>

      <div style={{ background: "var(--platinum)", padding: "var(--space-6)", borderRadius: "var(--radius-lg)", marginBottom: "var(--space-8)" }}>
        <h4 style={{ marginBottom: "var(--space-4)", borderBottom: "1px solid var(--border)", paddingBottom: "var(--space-2)" }}>Branding & Order</h4>
        
        <dl style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "var(--space-3)", fontSize: "var(--text-sm)" }}>
          <dt style={{ color: "var(--text-secondary)", fontWeight: 500 }}>Branding Method</dt>
          <dd style={{ fontWeight: 600, textTransform: "capitalize" }}>{brandingType.replace("_", " ")}</dd>
          
          {brandingType !== "none" && (
            <>
              <dt style={{ color: "var(--text-secondary)", fontWeight: 500 }}>Logo Uploaded</dt>
              <dd style={{ fontWeight: 600 }}>{logoFile ? logoFile.name : "No file selected"}</dd>

              <dt style={{ color: "var(--text-secondary)", fontWeight: 500 }}>Placement</dt>
              <dd style={{ fontWeight: 600 }}>{brandingNotes || "Not specified"}</dd>
            </>
          )}

          <dt style={{ color: "var(--text-secondary)", fontWeight: 500 }}>Quantity</dt>
          <dd style={{ fontWeight: 600 }}>{quantity} pieces</dd>

          <dt style={{ color: "var(--text-secondary)", fontWeight: 500 }}>Timeline</dt>
          <dd style={{ fontWeight: 600, textTransform: "capitalize" }}>{timeline}</dd>
        </dl>
      </div>
    </div>
  );
}
