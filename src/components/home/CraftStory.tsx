"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./CraftStory.module.css";

const STATS = [
  { label: "Years Experience", value: 15, suffix: "+" },
  { label: "Corporate Clients", value: 200, suffix: "+" },
  { label: "Products Delivered", value: 50, suffix: "k+" },
];

export default function CraftStory() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.grid}>
        <div className={styles.imageCol}>
          <Image
            src="/about/craft-close.jpg" // Note: Needs real image or placeholder
            alt="Leather Craftsmanship"
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textCol}>
          <div className={styles.content}>
            <span className="section-eyebrow">Our Heritage</span>
            <h2 className={styles.title}>Mastering the Art of Corporate Leather</h2>
            <p className={styles.desc}>
              We believe that a corporate gift is a reflection of the company giving it. That is why we use only the finest full-grain leather, meticulously stitched and finished by master artisans in Bangladesh.
            </p>
            <p className={styles.desc}>
              Whether it's precision laser engraving or traditional hot stamping, our branding process ensures your company logo stands out with elegance and durability.
            </p>

            <div className={styles.stats}>
              {STATS.map((stat, i) => (
                <div key={i} className={styles.statItem}>
                  <div className={styles.statNumber}>
                    {isVisible ? stat.value : 0}
                    <span className={styles.suffix}>{stat.suffix}</span>
                  </div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
