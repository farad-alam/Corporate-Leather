import Link from "next/link";
import styles from "./CorporateSolutions.module.css";
import { Briefcase, Gift, Users, Award } from "lucide-react";

const SOLUTIONS = [
  {
    id: 1,
    icon: Gift,
    title: "Employee Gifts",
    desc: "Reward your team with personalized leather goods for milestones, anniversaries, or end-of-year celebrations.",
  },
  {
    id: 2,
    icon: Award,
    title: "Executive Gifts",
    desc: "Premium, highly-customized items crafted for board members, VIP clients, and top-tier executives.",
  },
  {
    id: 3,
    icon: Users,
    title: "Client Appreciation",
    desc: "Strengthen business relationships with branded gifts that keep your company top-of-mind.",
  },
  {
    id: 4,
    icon: Briefcase,
    title: "Corporate Events",
    desc: "High-volume branded merchandise for conferences, seminars, and corporate retreats. Fast turnaround available.",
  },
];

export default function CorporateSolutions() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-eyebrow">Use Cases</span>
          <h2 className={styles.title}>Solutions for Every Corporate Need</h2>
          <p className={styles.subtitle}>
            From everyday employee appreciation to VIP executive gifting, we deliver craftsmanship that reflects your brand's prestige.
          </p>
        </div>

        <div className={styles.grid}>
          {SOLUTIONS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className={`card ${styles.card}`}>
                <div className={styles.iconWrapper}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                <Link href="/corporate-solutions" className={styles.link}>
                  Learn more &rarr;
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
