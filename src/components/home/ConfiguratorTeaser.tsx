"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./ConfiguratorTeaser.module.css";

const DEMO_PRODUCTS = [
  { id: "wallet", name: "Bifold Wallet" },
  { id: "cardholder", name: "Card Holder" },
  { id: "bag", name: "Laptop Bag" },
];

export default function ConfiguratorTeaser() {
  const [activeTab, setActiveTab] = useState(DEMO_PRODUCTS[0].id);

  return (
    <section className={`section-dark ${styles.section}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.textContent}>
            <span className="section-eyebrow">Interactive Demo</span>
            <h2 className={styles.title}>Experience True Customization</h2>
            <p className={styles.desc}>
              Our industry-leading configurator allows you to build the perfect corporate gift. Choose your materials, configure functional features, and add your brand logo instantly.
            </p>
            
            <div className={styles.tabs}>
              {DEMO_PRODUCTS.map((prod) => (
                <button
                  key={prod.id}
                  className={`${styles.tab} ${activeTab === prod.id ? styles.activeTab : ""}`}
                  onClick={() => setActiveTab(prod.id)}
                >
                  {prod.name}
                </button>
              ))}
            </div>

            <Link href={`/products`} className="btn btn-gold btn-lg">
              Explore All Products
            </Link>
          </div>

          <div className={styles.demoVisual}>
            <div className={styles.demoApp}>
              <div className={styles.demoHeader}>
                <div className={styles.dots}>
                  <span /> <span /> <span />
                </div>
                <div className={styles.urlBar}>configurator.corporate-leather.com</div>
              </div>
              <div className={styles.demoBody}>
                {/* Mock Configurator UI */}
                <div className={styles.mockSidebar}>
                  <div className={styles.mockStep} data-active="true">1. Leather</div>
                  <div className={styles.mockStep}>2. Color</div>
                  <div className={styles.mockStep}>3. Features</div>
                  <div className={styles.mockStep}>4. Branding</div>
                </div>
                <div className={styles.mockContent}>
                  <div className={styles.mockImage}>
                    <div className={styles.mockLeather} />
                  </div>
                  <div className={styles.mockOptions}>
                    <div className={styles.mockOptionCard} data-selected="true" />
                    <div className={styles.mockOptionCard} />
                    <div className={styles.mockOptionCard} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
