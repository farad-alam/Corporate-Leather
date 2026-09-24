import styles from "./TrustedBy.module.css";

// Placeholder high-profile corporate brands
const LOGOS = [
  "Standard Chartered",
  "Grameenphone",
  "Unilever",
  "BAT",
  "Square Group",
  "Brac Bank",
  "Nestlé",
  "Chevron",
  "Robi Axiata",
  "Beximco",
  "Novartis",
  "HSBC",
];

export default function TrustedBy() {
  return (
    <section className={styles.trusted}>
      <div className={styles.container}>
        <h2 className={styles.title}>Trusted By Leading Corporations</h2>
        
        <div className={styles.tickerWrapper}>
          <div className={styles.fadeLeft} />
          <div className={styles.fadeRight} />
          
          {/* Row 1: Left */}
          <div className={styles.tickerRow}>
            <div className={`${styles.tickerTrack} ${styles.scrollLeft}`}>
              {[...LOGOS, ...LOGOS].map((name, i) => (
                <div key={i} className={styles.logoCard}>
                  <div className={styles.logoPlaceholder}>{name.charAt(0)}</div>
                  <span className={styles.logoName}>{name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Row 2: Right (Slow) */}
          <div className={styles.tickerRow}>
            <div className={`${styles.tickerTrack} ${styles.scrollRight}`}>
              {[...LOGOS, ...LOGOS].reverse().map((name, i) => (
                <div key={i} className={styles.logoCard}>
                  <div className={styles.logoPlaceholder}>{name.charAt(0)}</div>
                  <span className={styles.logoName}>{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: Left (Fast) */}
          <div className={styles.tickerRow}>
            <div className={`${styles.tickerTrack} ${styles.scrollLeftFast}`}>
              {[...LOGOS, ...LOGOS].sort(() => 0.5 - Math.random()).map((name, i) => (
                <div key={i} className={styles.logoCard}>
                  <div className={styles.logoPlaceholder}>{name.charAt(0)}</div>
                  <span className={styles.logoName}>{name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
