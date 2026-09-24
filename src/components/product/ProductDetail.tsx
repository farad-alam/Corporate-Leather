"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProductDetail.module.css";
import type { ProductWithOptions } from "@/types";
import { Check } from "lucide-react";

type ProductDetailProps = {
  product: ProductWithOptions;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  const [activeImage, setActiveImage] = useState(product.images[0] || "/products/wallet.png");

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        
        {/* Images Column */}
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <Image src={activeImage} alt={product.name} fill style={{ objectFit: "cover" }} />
          </div>
          <div className={styles.thumbnails}>
            {product.images.map((img, idx) => (
              <button 
                key={idx} 
                className={`${styles.thumb} ${activeImage === img ? styles.activeThumb : ""}`}
                onClick={() => setActiveImage(img)}
              >
                <Image src={img} alt={`Thumbnail ${idx + 1}`} fill style={{ objectFit: "cover" }} />
              </button>
            ))}
          </div>
        </div>

        {/* Info Column */}
        <div className={styles.info}>
          <div className={styles.header}>
            <span className="section-eyebrow">{product.category?.name || "Corporate Gift"}</span>
            <h1 className={styles.title}>{product.name}</h1>
            <p className={styles.desc}>{product.description}</p>
          </div>

          <div className={styles.specs}>
            <h3 style={{ marginBottom: "var(--space-4)" }}>Product Details</h3>
            <ul className={styles.specList}>
              <li><Check size={16} color="var(--gold)" /> <strong>Material:</strong> {product.material || "Full-Grain Leather"}</li>
              <li><Check size={16} color="var(--gold)" /> <strong>Minimum Order:</strong> 50 pieces</li>
              <li><Check size={16} color="var(--gold)" /> <strong>Turnaround:</strong> 2-4 weeks standard</li>
            </ul>
          </div>

          <div className={styles.customizationsPreview}>
            <h3 style={{ marginBottom: "var(--space-4)" }}>Available Customizations</h3>
            <div className={styles.badges}>
              {product.customizationGroups.map(group => (
                <span key={group.id} className="tag tag-gold">{group.label}</span>
              ))}
              <span className="tag tag-cognac">Logo Embossing</span>
            </div>
          </div>

          <div className={styles.actions}>
            <Link href={`/customize/${product.slug}`} className="btn btn-gold btn-xl" style={{ width: "100%" }}>
              Configure & Request Quote
            </Link>
            <p style={{ textAlign: "center", fontSize: "var(--text-xs)", color: "var(--text-secondary)", marginTop: "var(--space-3)" }}>
              No pricing is displayed as corporate rates vary by quantity and customization.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
