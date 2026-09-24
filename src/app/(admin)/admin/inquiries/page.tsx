import Link from "next/link";
import { Eye } from "lucide-react";

const MOCK_INQUIRIES = [
  { id: 1, inquiryNumber: "INQ-20260923-001", companyName: "Acme Corp", productName: "Executive Bifold Wallet", quantity: 200, status: "NEW", date: "2026-09-23" },
  { id: 2, inquiryNumber: "INQ-20260922-042", companyName: "TechFlow Ltd", productName: "Leather Document Bag", quantity: 50, status: "QUOTED", date: "2026-09-22" },
];

export default function AdminInquiriesPage() {
  return (
    <div style={{ padding: "var(--space-8)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-8)" }}>
        <h1 style={{ margin: 0 }}>Corporate Inquiries</h1>
      </div>

      <div className="card" style={{ overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ background: "var(--platinum)", borderBottom: "1px solid var(--border)" }}>
              <th style={{ padding: "var(--space-4)" }}>Inquiry No.</th>
              <th style={{ padding: "var(--space-4)" }}>Date</th>
              <th style={{ padding: "var(--space-4)" }}>Company</th>
              <th style={{ padding: "var(--space-4)" }}>Product</th>
              <th style={{ padding: "var(--space-4)" }}>Qty</th>
              <th style={{ padding: "var(--space-4)" }}>Status</th>
              <th style={{ padding: "var(--space-4)" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_INQUIRIES.map((inq) => (
              <tr key={inq.id} style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ padding: "var(--space-4)", fontFamily: "monospace", fontWeight: 600 }}>{inq.inquiryNumber}</td>
                <td style={{ padding: "var(--space-4)" }}>{inq.date}</td>
                <td style={{ padding: "var(--space-4)", fontWeight: 500 }}>{inq.companyName}</td>
                <td style={{ padding: "var(--space-4)", color: "var(--text-secondary)" }}>{inq.productName}</td>
                <td style={{ padding: "var(--space-4)" }}>{inq.quantity}</td>
                <td style={{ padding: "var(--space-4)" }}>
                  <span className={`tag ${inq.status === 'NEW' ? 'tag-gold' : 'tag-cognac'}`}>
                    {inq.status}
                  </span>
                </td>
                <td style={{ padding: "var(--space-4)" }}>
                  <button className="btn btn-outline btn-sm">
                    <Eye size={16} /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
