"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Solutions.module.css";
import { CheckCircle } from "lucide-react";

const SOLUTIONS = [
  {
    id: "employee-gifts",
    title: "Employee Appreciation & Milestones",
    desc: "Reward your most valuable asset—your team. Whether it's an end-of-year bonus, a 5-year work anniversary, or an onboarding welcome kit, personalized leather goods leave a lasting impression of value and gratitude.",
    bullets: ["Welcome Kits (Cardholders & Keychains)", "Work Anniversaries (Wallets & Journals)", "Performance Rewards (Briefcases & Bags)"],
    image: "/about/craft-close.jpg", // Using placeholder image from existing assets
    reverse: false,
  },
  {
    id: "executive-gifts",
    title: "Executive & VIP Gifting",
    desc: "When gifting C-suite executives, board members, or high-net-worth clients, the quality of the gift reflects the prestige of your organization. Our premium full-grain leather items are handcrafted to meet the highest standards of luxury.",
    bullets: ["Premium Full-Grain Leather", "Subtle, elegant blind embossing", "Luxury packaging options available"],
    image: "/products/gift-set.png", // Using placeholder
    reverse: true,
  },
  {
    id: "client-appreciation",
    title: "Client Appreciation & Retention",
    desc: "Strengthen your business relationships and stay top-of-mind with your clients. A customized leather wallet or document bag used daily ensures your brand remains visible long after the initial meeting.",
    bullets: ["Functional, everyday-use items", "Durable materials for longevity", "Customized to align with your brand colors"],
    image: "/products/wallet.png", // Using placeholder
    reverse: false,
  },
  {
    id: "corporate-events",
    title: "Corporate Events & Conferences",
    desc: "Stand out at your next industry seminar, trade show, or corporate retreat. Move away from cheap plastic promotional items and offer premium leather goods that attendees will actually want to keep and use.",
    bullets: ["High-volume scalability (50 to 5000+ pieces)", "Fast turnaround times for event deadlines", "Memorable branding opportunities"],
    image: "/products/cardholder.png", // Using placeholder
    reverse: true,
  },
];

export default function CorporateSolutionsPage() {
  return (
    <div className={styles.page}>
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="section-eyebrow" style={{ justifyContent: "center" }}>B2B Expertise</span>
            <h1 className={styles.heroTitle}>Elevate Your Corporate Gifting</h1>
            <p className={styles.heroDesc}>
              Discover how our customized, full-grain leather goods can strengthen your business relationships, reward your team, and elevate your brand presence.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Solutions */}
      <section className={styles.solutionsSection}>
        <div className="container">
          {SOLUTIONS.map((sol) => (
            <div key={sol.id} id={sol.id} className={`${styles.solutionRow} ${sol.reverse ? styles.reverse : ""}`}>
              <div className={styles.imageCol}>
                <Image 
                  src={sol.image} 
                  alt={sol.title} 
                  fill 
                  style={{ objectFit: "cover", borderRadius: "var(--radius-xl)" }} 
                />
              </div>
              <div className={styles.textCol}>
                <h2 className={styles.title}>{sol.title}</h2>
                <p className={styles.desc}>{sol.desc}</p>
                <ul className={styles.bulletList}>
                  {sol.bullets.map((bullet, idx) => (
                    <li key={idx}>
                      <CheckCircle size={20} color="var(--gold)" className={styles.bulletIcon} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/products" className="btn btn-outline-gold">
                  Explore Products &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to impress your stakeholders?</h2>
            <p>Our B2B team is ready to help you curate the perfect corporate gift package. Minimum order quantity is 50 pieces.</p>
            <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center", marginTop: "var(--space-8)" }}>
              <Link href="/products" className="btn btn-gold btn-xl">
                Start Customizing Now
              </Link>
              <Link href="/contact" className="btn btn-outline btn-xl">
                Contact Sales Team
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
