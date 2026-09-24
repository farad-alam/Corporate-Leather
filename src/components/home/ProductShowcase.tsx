import Link from "next/link";
import Image from "next/image";
import styles from "./ProductShowcase.module.css";

// Mock products (later fetch from DB)
const PRODUCTS = [
  { id: 1, name: "Executive Bifold Wallet", slug: "executive-bifold-wallet", image: "/products/wallet.png", options: "12 Customization Options" },
  { id: 2, name: "Premium Card Holder", slug: "premium-card-holder", image: "/products/cardholder.png", options: "8 Customization Options" },
  { id: 3, name: "Leather Document Bag", slug: "leather-document-bag", image: "/products/gift-set.png", options: "15 Customization Options" },
];

export default function ProductShowcase() {
  return (
    <section className={`section-dark ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className="section-eyebrow">Corporate Collection</span>
            <h2 className={styles.title}>Engineered for Professionals</h2>
          </div>
          <Link href="/products" className="btn btn-outline-gold">
            View All Products
          </Link>
        </div>

        <div className={styles.grid}>
          {PRODUCTS.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} />
                <div className={styles.overlay}>
                  <span className={`btn btn-gold ${styles.customizeBtn}`}>Configure Product</span>
                </div>
              </div>
              <div className={styles.info}>
                <h3 className={styles.name}>{product.name}</h3>
                <span className={`tag tag-gold ${styles.tag}`}>{product.options}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
