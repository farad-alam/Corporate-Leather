import Link from "next/link";
import styles from "./Footer.module.css";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.col}>
            <h3 className={styles.brandName}>Corporate Leather</h3>
            <p className={styles.desc}>
              Bangladesh's premier B2B manufacturer of customized, full-grain leather goods for corporate gifting and branding. 
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">FB</a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">IG</a>
              <a href="#" className={styles.socialIcon} aria-label="LinkedIn">IN</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Solutions</h4>
            <ul className={styles.linkList}>
              <li><Link href="/products">Product Catalog</Link></li>
              <li><Link href="/corporate-solutions">Employee Gifts</Link></li>
              <li><Link href="/corporate-solutions">Executive Gifts</Link></li>
              <li><Link href="/corporate-solutions">Event Merchandise</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li><Link href="/about">Our Craftsmanship</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact</h4>
            <ul className={styles.contactList}>
              <li>
                <MapPin size={18} className={styles.contactIcon} />
                <span>123 Leather District, Hazaribagh, Dhaka, Bangladesh</span>
              </li>
              <li>
                <Phone size={18} className={styles.contactIcon} />
                <a href="tel:+8801700000000">+880 17 0000 0000</a>
              </li>
              <li>
                <Mail size={18} className={styles.contactIcon} />
                <a href="mailto:corporate@corporate-leather.com">corporate@corporate-leather.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} Corporate Leather. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
