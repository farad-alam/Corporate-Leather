import styles from "./HowItWorks.module.css";

const STEPS = [
  { id: 1, title: "Choose Product", desc: "Select from our premium catalog" },
  { id: 2, title: "Select Materials", desc: "Pick leather type and color" },
  { id: 3, title: "Configure", desc: "Customize slots, zippers, etc." },
  { id: 4, title: "Add Branding", desc: "Upload your corporate logo" },
  { id: 5, title: "Get Quote", desc: "Submit inquiry for bulk pricing" },
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow">The Process</span>
          <h2 className={styles.title}>How Customization Works</h2>
        </div>

        <div className={styles.flowContainer}>
          {STEPS.map((step, index) => (
            <div key={step.id} className={styles.stepWrapper}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.id}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
              {index < STEPS.length - 1 && (
                <div className={styles.connector}>
                  <div className={styles.line} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
