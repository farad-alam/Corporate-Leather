"use client";

import { useConfiguratorStore } from "@/store/configuratorStore";
import LogoUploadZone from "./LogoUploadZone";

const BRANDING_TYPES = [
  { id: "embossing", label: "Blind Embossing", desc: "Subtle, classic pressed logo without color." },
  { id: "foil_stamping", label: "Foil Stamping", desc: "Gold or silver metallic foil pressed into the leather." },
  { id: "printing", label: "UV Printing", desc: "Full-color printing on the leather surface." },
  { id: "none", label: "No Branding", desc: "Leave the product completely unbranded." },
];

export default function StepBranding() {
  const { brandingType, brandingNotes, logoFile, setBranding, setLogoFile } = useConfiguratorStore();

  return (
    <div>
      <h3 style={{ marginBottom: "var(--space-2)" }}>Corporate Branding</h3>
      <p style={{ color: "var(--text-secondary)", marginBottom: "var(--space-6)" }}>
        Add your company logo to the product.
      </p>

      <div style={{ marginBottom: "var(--space-8)" }}>
        <h4 style={{ marginBottom: "var(--space-4)" }}>1. Upload Logo (Optional)</h4>
        <LogoUploadZone currentFile={logoFile} onFileSelect={setLogoFile} />
      </div>

      <div style={{ marginBottom: "var(--space-8)" }}>
        <h4 style={{ marginBottom: "var(--space-4)" }}>2. Branding Method</h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "var(--space-4)" }}>
          {BRANDING_TYPES.map((type) => (
            <div 
              key={type.id}
              className={`option-card ${brandingType === type.id ? "selected" : ""}`}
              onClick={() => setBranding(type.id, brandingNotes)}
              role="button"
            >
              <h4 style={{ fontSize: "var(--text-base)", margin: "0 0 0.25rem 0" }}>{type.label}</h4>
              <p style={{ fontSize: "var(--text-xs)", color: "var(--text-secondary)", margin: 0, lineHeight: 1.4 }}>
                {type.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {brandingType !== "none" && (
        <div style={{ marginBottom: "var(--space-6)" }}>
          <h4 style={{ marginBottom: "var(--space-2)" }}>3. Placement Notes</h4>
          <textarea
            className="input"
            rows={3}
            placeholder="E.g., Bottom right corner, center aligned..."
            value={brandingNotes}
            onChange={(e) => setBranding(brandingType, e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
