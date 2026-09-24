"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useConfiguratorStore } from "@/store/configuratorStore";
import { useInquiryDraftStore } from "@/store/inquiryDraftStore";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function InquiryPage() {
  const router = useRouter();
  const configurator = useConfiguratorStore();
  const inquiryDraft = useInquiryDraftStore();
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // If no product selected, redirect back to shop
  if (!configurator.productId) {
    if (typeof window !== 'undefined') router.replace("/products");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Build the payload
      const payload = {
        companyName: inquiryDraft.companyName,
        contactPerson: inquiryDraft.contactPerson,
        email: inquiryDraft.email,
        phone: inquiryDraft.phone,
        industry: inquiryDraft.industry,
        productId: configurator.productId,
        productName: configurator.productName,
        customizations: configurator.selections,
        brandingType: configurator.brandingType,
        brandingNotes: configurator.brandingNotes,
        quantity: configurator.quantity,
        timeline: configurator.timeline,
        additionalNotes: inquiryDraft.additionalNotes,
        // In a real app, upload logoFile to Cloudinary first, then pass logoFileUrl
        // logoFileUrl: "..."
      };

      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit inquiry.");
      }

      // Success
      configurator.reset();
      inquiryDraft.clearDraft();
      router.push(`/inquiry-sent?id=${data.inquiryNumber}`);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ background: "var(--bg-secondary)", minHeight: "100vh", paddingTop: "var(--navbar-height)", paddingBottom: "var(--space-24)" }}>
      <div className="container" style={{ maxWidth: "800px", paddingTop: "var(--space-12)" }}>
        
        <div style={{ textAlign: "center", marginBottom: "var(--space-12)" }}>
          <h1 style={{ marginBottom: "var(--space-4)" }}>Request Corporate Quotation</h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "var(--text-lg)" }}>
            Provide your contact details and our B2B team will get back to you within 24 hours with a custom quote.
          </p>
        </div>

        {error && (
          <div style={{ background: "rgba(192,57,43,0.1)", color: "var(--error)", padding: "var(--space-4)", borderRadius: "var(--radius)", marginBottom: "var(--space-6)" }}>
            {error}
          </div>
        )}

        <div className="card" style={{ padding: "var(--space-8)" }}>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
              <div className="form-group">
                <label className="label">Company Name *</label>
                <input 
                  type="text" 
                  required 
                  className="input" 
                  value={inquiryDraft.companyName}
                  onChange={(e) => inquiryDraft.setDraft({ companyName: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="label">Contact Person *</label>
                <input 
                  type="text" 
                  required 
                  className="input" 
                  value={inquiryDraft.contactPerson}
                  onChange={(e) => inquiryDraft.setDraft({ contactPerson: e.target.value })}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-4)" }}>
              <div className="form-group">
                <label className="label">Email Address *</label>
                <input 
                  type="email" 
                  required 
                  className="input" 
                  value={inquiryDraft.email}
                  onChange={(e) => inquiryDraft.setDraft({ email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="label">Phone Number *</label>
                <input 
                  type="tel" 
                  required 
                  className="input" 
                  value={inquiryDraft.phone}
                  onChange={(e) => inquiryDraft.setDraft({ phone: e.target.value })}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="label">Industry</label>
              <select 
                className="input"
                value={inquiryDraft.industry}
                onChange={(e) => inquiryDraft.setDraft({ industry: e.target.value })}
              >
                <option value="">Select an industry...</option>
                <option value="Banking & Finance">Banking & Finance</option>
                <option value="Pharmaceuticals">Pharmaceuticals</option>
                <option value="Telecommunications">Telecommunications</option>
                <option value="FMCG">FMCG</option>
                <option value="IT & Software">IT & Software</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label className="label">Additional Notes</label>
              <textarea 
                className="input" 
                rows={4}
                placeholder="Any specific packaging requirements or questions?"
                value={inquiryDraft.additionalNotes}
                onChange={(e) => inquiryDraft.setDraft({ additionalNotes: e.target.value })}
              />
            </div>

            <div style={{ background: "var(--parchment)", padding: "var(--space-4)", borderRadius: "var(--radius)", display: "flex", gap: "var(--space-3)", alignItems: "flex-start" }}>
              <CheckCircle2 color="var(--success)" style={{ marginTop: "2px" }} />
              <div>
                <strong style={{ display: "block", marginBottom: "var(--space-1)" }}>Configuration Attached</strong>
                <span style={{ fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>
                  Your product configuration ({configurator.productName}, {configurator.quantity} pcs) will be automatically attached to this inquiry.
                </span>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "var(--space-4)" }}>
              <button type="submit" className="btn btn-gold btn-xl" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Inquiry"} <ArrowRight size={20} />
              </button>
            </div>
            
          </form>
        </div>

      </div>
    </div>
  );
}
