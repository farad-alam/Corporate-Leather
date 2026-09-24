import Image from "next/image";

type OptionCardProps = {
  label: string;
  description?: string | null;
  imageUrl?: string | null;
  selected: boolean;
  onClick: () => void;
};

export default function OptionCard({ label, description, imageUrl, selected, onClick }: OptionCardProps) {
  return (
    <div 
      className={`option-card ${selected ? "selected" : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {imageUrl && (
        <div style={{ position: "relative", width: "100%", height: "120px", marginBottom: "1rem" }}>
          <Image 
            src={imageUrl} 
            alt={label}
            fill
            style={{ objectFit: "cover", borderRadius: "var(--radius)" }}
          />
        </div>
      )}
      <h4 style={{ fontSize: "var(--text-base)", margin: "0 0 0.25rem 0" }}>{label}</h4>
      {description && (
        <p style={{ fontSize: "var(--text-xs)", color: "var(--text-secondary)", margin: 0, lineHeight: 1.4 }}>
          {description}
        </p>
      )}
    </div>
  );
}
