"use client";

import { useConfiguratorStore } from "@/store/configuratorStore";

const TIMELINES = [
  { id: "1 week", label: "Express (1 Week)", desc: "Subject to rush fees and availability." },
  { id: "2 weeks", label: "Standard (2 Weeks)", desc: "Typical turnaround time." },
  { id: "1 month", label: "Relaxed (1 Month+)", desc: "Best for large bulk orders." },
];

export default function StepQuantity() {
  const { quantity, timeline, setQuantity, setTimeline } = useConfiguratorStore();

  return (
    <div>
      <h3 style={{ marginBottom: "var(--space-2)" }}>Quantity & Timeline</h3>
      <p style={{ color: "var(--text-secondary)", marginBottom: "var(--space-6)" }}>
        Let us know how many pieces you need and when you need them.
      </p>

      <div style={{ marginBottom: "var(--space-8)" }}>
        <h4 style={{ marginBottom: "var(--space-4)" }}>Order Quantity</h4>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
          <button 
            className="btn btn-outline" 
            onClick={() => setQuantity(Math.max(50, quantity - 10))}
          >
            -
          </button>
          <div style={{ fontSize: "var(--text-2xl)", fontWeight: 600, minWidth: "60px", textAlign: "center" }}>
            {quantity}
          </div>
          <button 
            className="btn btn-outline" 
            onClick={() => setQuantity(quantity + 10)}
          >
            +
          </button>
        </div>
        <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", marginTop: "var(--space-2)" }}>
          Minimum order quantity is 50 pieces.
        </p>
      </div>

      <div style={{ marginBottom: "var(--space-8)" }}>
        <h4 style={{ marginBottom: "var(--space-4)" }}>Required Timeline</h4>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "var(--space-4)" }}>
          {TIMELINES.map((t) => (
            <div 
              key={t.id}
              className={`option-card ${timeline === t.id ? "selected" : ""}`}
              onClick={() => setTimeline(t.id)}
              role="button"
            >
              <h4 style={{ fontSize: "var(--text-base)", margin: "0 0 0.25rem 0" }}>{t.label}</h4>
              <p style={{ fontSize: "var(--text-xs)", color: "var(--text-secondary)", margin: 0, lineHeight: 1.4 }}>
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
