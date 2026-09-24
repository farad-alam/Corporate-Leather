import Link from "next/link";
import styles from "./CTABanner.module.css";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <div className={styles.pattern} />
      </div>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Ready to create something exceptional?</h2>
          <p className={styles.subtitle}>
            Minimum 50 pieces. Delivered across Bangladesh. Get a custom quotation within 24 hours.
          </p>
          <div className={styles.actions}>
            <Link href="/products" className="btn btn-gold btn-xl">
              Start Customizing <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
