import Image from "next/image";
import Link from "next/link";
import styles from "./ProductCard.module.css";
import type { ProductWithOptions } from "@/types";

type ProductCardProps = {
  product: ProductWithOptions;
};

export default function ProductCard({ product }: ProductCardProps) {
  const optionsCount = product.customizationGroups?.reduce((acc, group) => acc + (group.options?.length || 0), 0) || 0;

  return (
    <Link href={`/products/${product.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image 
          src={product.images[0] || "/products/wallet.png"} 
          alt={product.name} 
          fill 
          style={{ objectFit: "cover" }} 
        />
        <div className={styles.overlay}>
          <span className={`btn btn-gold ${styles.customizeBtn}`}>Start Customizing</span>
        </div>
      </div>
      <div className={styles.info}>
        <div>
          <h3 className={styles.name}>{product.name}</h3>
          {product.category && (
            <span className={styles.category}>{product.category.name}</span>
          )}
        </div>
        
        {optionsCount > 0 && (
          <div className={styles.tags}>
            <span className={`tag tag-gold`}>{optionsCount} Customization Options</span>
          </div>
        )}
      </div>
    </Link>
  );
}
