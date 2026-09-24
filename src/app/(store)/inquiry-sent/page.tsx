"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function InquirySentPage() {
  const searchParams = useSearchParams();
  const inquiryNumber = searchParams.get("id") || "INQ-PENDING";

  return (
    <div style={{ background: "var(--ivory)", minHeight: "100vh", paddingTop: "calc(var(--navbar-height) + var(--space-16))", paddingBottom: "var(--space-24)" }}>
      <div className="container" style={{ maxWidth: "600px", textAlign: "center" }}>
        
        <div style={{ display: "inline-flex", justifyContent: "center", alignItems: "center", width: "80px", height: "80px", background: "rgba(39, 174, 96, 0.1)", borderRadius: "50%", marginBottom: "var(--space-6)" }}>
          <CheckCircle2 size={40} color="var(--success)" />
        </div>

        <h1 style={{ marginBottom: "var(--space-4)" }}>Inquiry Received</h1>
        <p style={{ fontSize: "var(--text-lg)", color: "var(--text-secondary)", marginBottom: "var(--space-8)" }}>
          Thank you for choosing Corporate Leather. Your custom quotation request has been successfully submitted.
        </p>

        <div className="card" style={{ padding: "var(--space-6)", marginBottom: "var(--space-10)", background: "var(--white)" }}>
          <span style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
            Your Reference Number
          </span>
          <div style={{ fontSize: "var(--text-2xl)", fontWeight: 700, color: "var(--charcoal)", marginTop: "var(--space-2)", fontFamily: "monospace" }}>
            {inquiryNumber}
          </div>
        </div>

        <h3 style={{ marginBottom: "var(--space-6)" }}>What happens next?</h3>
        
        <div style={{ textAlign: "left", display: "flex", flexDirection: "column", gap: "var(--space-6)", marginBottom: "var(--space-10)" }}>
          <div style={{ display: "flex", gap: "var(--space-4)" }}>
            <div className="step-number" style={{ width: "32px", height: "32px", flexShrink: 0 }}>1</div>
            <div>
              <strong style={{ display: "block", marginBottom: "var(--space-1)" }}>Review & Quotation</strong>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0 }}>Our B2B team will review your requirements and send a detailed quotation within 24 hours.</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "var(--space-4)" }}>
            <div className="step-number" style={{ width: "32px", height: "32px", flexShrink: 0, background: "var(--border)", color: "var(--warm-grey)" }}>2</div>
            <div>
              <strong style={{ display: "block", marginBottom: "var(--space-1)" }}>Sample Approval</strong>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0 }}>Upon quotation approval, we will create a digital or physical sample for your final confirmation.</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "var(--space-4)" }}>
            <div className="step-number" style={{ width: "32px", height: "32px", flexShrink: 0, background: "var(--border)", color: "var(--warm-grey)" }}>3</div>
            <div>
              <strong style={{ display: "block", marginBottom: "var(--space-1)" }}>Production & Delivery</strong>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)", margin: 0 }}>Mass production begins. Your corporate gifts will be delivered according to the agreed timeline.</p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "var(--space-4)", justifyContent: "center" }}>
          <Link href="/products" className="btn btn-outline-gold">
            Browse More Products
          </Link>
          <a href="https://wa.me/8801700000000" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
