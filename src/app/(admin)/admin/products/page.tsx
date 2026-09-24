import Link from "next/link";
import { Plus, Edit } from "lucide-react";

const MOCK_PRODUCTS = [
  { id: 1, name: "Executive Bifold Wallet", optionsCount: 4, category: "Wallets" },
  { id: 2, name: "Premium Card Holder", optionsCount: 1, category: "Wallets" },
  { id: 3, name: "Leather Document Bag", optionsCount: 1, category: "Bags" },
];

export default function AdminProductsPage() {
  return (
    <div style={{ padding: "var(--space-8)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-8)" }}>
        <h1 style={{ margin: 0 }}>Products & Configurator CMS</h1>
        <Link href="/admin/products/new" className="btn btn-primary">
          <Plus size={18} /> Add New Product
        </Link>
      </div>

      <div className="card" style={{ overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ background: "var(--platinum)", borderBottom: "1px solid var(--border)" }}>
              <th style={{ padding: "var(--space-4)" }}>Product Name</th>
              <th style={{ padding: "var(--space-4)" }}>Category</th>
              <th style={{ padding: "var(--space-4)" }}>Customization Groups</th>
              <th style={{ padding: "var(--space-4)", textAlign: "right" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_PRODUCTS.map((prod) => (
              <tr key={prod.id} style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ padding: "var(--space-4)", fontWeight: 500 }}>{prod.name}</td>
                <td style={{ padding: "var(--space-4)", color: "var(--text-secondary)" }}>{prod.category}</td>
                <td style={{ padding: "var(--space-4)" }}>
                  <span className="tag tag-grey">{prod.optionsCount} Groups</span>
                </td>
                <td style={{ padding: "var(--space-4)", textAlign: "right" }}>
                  <Link href={`/admin/products/${prod.id}`} className="btn btn-outline btn-sm">
                    <Edit size={16} /> Edit Configurator
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
