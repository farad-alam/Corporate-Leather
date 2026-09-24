"use client";

import { useConfiguratorStore } from "@/store/configuratorStore";
import OptionCard from "./OptionCard";
import type { CustomizationGroup } from "@/types";

type StepFeaturesProps = {
  groups: CustomizationGroup[]; // Multiple groups like 'Card Slots', 'Zipper', etc.
};

export default function StepFeatures({ groups }: StepFeaturesProps) {
  const { selections, setSelection } = useConfiguratorStore();

  return (
    <div>
      <h3 style={{ marginBottom: "var(--space-2)" }}>Product Features</h3>
      <p style={{ color: "var(--text-secondary)", marginBottom: "var(--space-6)" }}>
        Customize the functional aspects of the product.
      </p>

      {groups.map((group) => (
        <div key={group.id} style={{ marginBottom: "var(--space-8)" }}>
          <h4 style={{ marginBottom: "var(--space-4)" }}>{group.label}</h4>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "var(--space-4)" }}>
            {group.options.map((option) => (
              <OptionCard
                key={option.id}
                label={option.label}
                description={option.description}
                selected={
                  group.type === "multi" 
                    ? Array.isArray(selections[group.groupKey]) && (selections[group.groupKey] as string[]).includes(option.value)
                    : selections[group.groupKey] === option.value
                }
                onClick={() => {
                  if (group.type === "multi") {
                    const current = (selections[group.groupKey] as string[]) || [];
                    const next = current.includes(option.value)
                      ? current.filter(v => v !== option.value)
                      : [...current, option.value];
                    setSelection(group.groupKey, next);
                  } else {
                    setSelection(group.groupKey, option.value);
                  }
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
