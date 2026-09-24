"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element.
      const y = e.clientY - rect.top;  // y position within the element.

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate rotation based on cursor position (max 15 degrees)
      const rotateX = ((y - centerY) / centerY) * -15;
      const rotateY = ((x - centerX) / centerX) * 15;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      card.style.transition = "transform 0.5s ease";
    };

    const handleMouseEnter = () => {
      card.style.transition = "none";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.glow} />
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={`animate-fade-in-up ${styles.textContent}`}>
            <span className="section-eyebrow">Premium B2B Manufacturing</span>
            <h1 className={styles.title}>
              Crafted for <br />
              <span className={styles.goldHighlight}>Corporations,</span><br />
              Built to Last.
            </h1>
            <p className={styles.subtitle}>
              Custom leather goods — wallets, bags, cardholders, and passport holders — with your corporate branding. Minimum 50 pieces.
            </p>
            <div className={styles.actions}>
              <Link href="/products" className="btn btn-gold btn-xl">
                View Products
              </Link>
              <Link href="/corporate-solutions" className="btn btn-outline-light btn-xl">
                Corporate Solutions
              </Link>
            </div>
          </div>
        </div>

        <div className={`animate-fade-in-left delay-3 ${styles.visual}`}>
          <div className={styles.cardWrapper} ref={cardRef}>
            <div className={styles.cardImage}>
              {/* Using a placeholder gradient for the dark moody leather shot */}
              <div className={styles.moodyLeatherOverlay} />
            </div>
            <div className={styles.cardBadge}>
              <span>Fully Customizable</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
        <span className={styles.scrollText}>Scroll to explore</span>
      </div>
    </section>
  );
}
