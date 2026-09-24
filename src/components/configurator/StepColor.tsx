"use client";

import { useConfiguratorStore } from "@/store/configuratorStore";
import ColorSwatch from "./ColorSwatch";
import type { CustomizationGroup } from "@/types";

type StepColorProps = {
  group: CustomizationGroup;
};

export default function StepColor({ group }: StepColorProps) {
  const { selections, setSelection } = useConfiguratorStore();
  const selectedValue = selections[group.groupKey];

  return (
    <div>
      <h3 style={{ marginBottom: "var(--space-2)" }}>{group.label}</h3>
      <p style={{ color: "var(--text-secondary)", marginBottom: "var(--space-6)" }}>
        Choose the color that best fits your corporate identity.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-6)" }}>
        {group.options.map((option) => {
          // Attempt to extract hex code from description, fallback to #000
          const hexMatch = option.description?.match(/#[0-9a-fA-F]{3,6}/);
          const colorCode = hexMatch ? hexMatch[0] : (option.value === "cognac" ? "#8b4513" : "#0f0f14");

          return (
            <ColorSwatch
              key={option.id}
              label={option.label}
              colorCode={colorCode}
              selected={selectedValue === option.value}
              onClick={() => setSelection(group.groupKey, option.value)}
            />
          );
        })}
      </div>
    </div>
  );
}
