"use client";

import { useConfiguratorStore } from "@/store/configuratorStore";
import OptionCard from "./OptionCard";
import type { CustomizationGroup } from "@/types";

type StepLeatherProps = {
  group: CustomizationGroup;
};

export default function StepLeather({ group }: StepLeatherProps) {
  const { selections, setSelection } = useConfiguratorStore();
  const selectedValue = selections[group.groupKey];

  return (
    <div>
      <h3 style={{ marginBottom: "var(--space-2)" }}>{group.label}</h3>
      <p style={{ color: "var(--text-secondary)", marginBottom: "var(--space-6)" }}>
        Select the type of leather for your product.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "var(--space-4)" }}>
        {group.options.map((option) => (
          <OptionCard
            key={option.id}
            label={option.label}
            description={option.description}
            imageUrl={option.imageUrl}
            selected={selectedValue === option.value}
            onClick={() => setSelection(group.groupKey, option.value)}
          />
        ))}
      </div>
    </div>
  );
}
