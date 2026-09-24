import styles from "./ColorSwatch.module.css";

type ColorSwatchProps = {
  colorCode: string;
  label: string;
  selected: boolean;
  onClick: () => void;
};

export default function ColorSwatch({ colorCode, label, selected, onClick }: ColorSwatchProps) {
  return (
    <div className={styles.wrapper} onClick={onClick}>
      <button
        type="button"
        className={`${styles.swatch} ${selected ? styles.selected : ""}`}
        style={{ backgroundColor: colorCode }}
        aria-label={`Select color ${label}`}
        title={label}
      />
      <span className={`${styles.label} ${selected ? styles.selectedLabel : ""}`}>
        {label}
      </span>
    </div>
  );
}
