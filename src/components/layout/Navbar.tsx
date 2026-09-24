"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Corporate Solutions", href: "/corporate-solutions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/";
  const shouldBeSolid = !isHomePage || isScrolled;

  return (
    <header className={`${styles.header} ${shouldBeSolid ? styles.scrolled : ""}`}>
      <div className={`container ${styles.container}`}>
        
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Corporate Leather</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`${styles.navLink} ${pathname.startsWith(link.href) ? styles.active : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className={styles.actions}>
          <Link href="/products" className="btn btn-gold btn-sm">
            Request a Quote
          </Link>
          
          <button 
            className={styles.mobileMenuBtn} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className={styles.mobileNav}>
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`${styles.mobileNavLink} ${pathname === link.href ? styles.mobileActive : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileActions}>
            <Link href="/products" className="btn btn-gold btn-lg" style={{ width: "100%" }}>
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
