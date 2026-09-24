import Link from "next/link";
import { ArrowLeft, Save, Plus } from "lucide-react";

export default function AdminProductEditPage({ params }: { params: { id: string } }) {
  // In a real app, fetch product and customization groups by params.id
  
  return (
    <div style={{ padding: "var(--space-8)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", marginBottom: "var(--space-8)" }}>
        <Link href="/admin/products" className="btn btn-ghost" style={{ color: "var(--charcoal)" }}>
          <ArrowLeft size={20} />
        </Link>
        <h1 style={{ margin: 0 }}>Edit Configurator: Executive Bifold Wallet</h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "var(--space-8)" }}>
        
        {/* Left Col: Configurator Groups */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <h3>Customization Groups</h3>
            <button className="btn btn-outline btn-sm"><Plus size={16} /> Add Group</button>
          </div>

          <div className="card" style={{ padding: "var(--space-6)", marginBottom: "var(--space-4)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-4)" }}>
              <h4 style={{ margin: 0 }}>1. Leather Type <span className="tag tag-gold" style={{ marginLeft: "var(--space-2)" }}>Single Choice</span></h4>
              <button className="btn btn-ghost btn-sm" style={{ color: "var(--charcoal)" }}>Edit Group</button>
            </div>
            
            <table style={{ width: "100%", fontSize: "var(--text-sm)", textAlign: "left", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                  <th style={{ padding: "var(--space-2) 0" }}>Label</th>
                  <th style={{ padding: "var(--space-2) 0" }}>Value</th>
                  <th style={{ padding: "var(--space-2) 0", textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "var(--space-2) 0", fontWeight: 500 }}>Full Grain Pebbled</td>
                  <td style={{ padding: "var(--space-2) 0", color: "var(--text-secondary)" }}>pebbled</td>
                  <td style={{ padding: "var(--space-2) 0", textAlign: "right" }}><button className="btn btn-ghost btn-sm" style={{ color: "var(--error)" }}>Remove</button></td>
                </tr>
                <tr>
                  <td style={{ padding: "var(--space-2) 0", fontWeight: 500 }}>Smooth Nappa</td>
                  <td style={{ padding: "var(--space-2) 0", color: "var(--text-secondary)" }}>nappa</td>
                  <td style={{ padding: "var(--space-2) 0", textAlign: "right" }}><button className="btn btn-ghost btn-sm" style={{ color: "var(--error)" }}>Remove</button></td>
                </tr>
              </tbody>
            </table>
            
            <button className="btn btn-outline btn-sm" style={{ marginTop: "var(--space-4)", width: "100%" }}>+ Add Option</button>
          </div>
          
          {/* Mock second group */}
          <div className="card" style={{ padding: "var(--space-6)" }}>
            <h4 style={{ margin: 0 }}>2. Color <span className="tag tag-gold" style={{ marginLeft: "var(--space-2)" }}>Single Choice</span></h4>
            {/* Options table omitted for brevity */}
          </div>
        </div>

        {/* Right Col: Basic Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          <div className="card" style={{ padding: "var(--space-6)" }}>
            <h3 style={{ marginBottom: "var(--space-4)" }}>Product Info</h3>
            
            <div className="form-group" style={{ marginBottom: "var(--space-4)" }}>
              <label className="label">Name</label>
              <input type="text" className="input" defaultValue="Executive Bifold Wallet" />
            </div>
            
            <div className="form-group" style={{ marginBottom: "var(--space-4)" }}>
              <label className="label">Category</label>
              <select className="input" defaultValue="1">
                <option value="1">Wallets</option>
                <option value="2">Bags</option>
              </select>
            </div>

            <button className="btn btn-primary" style={{ width: "100%" }}><Save size={16} /> Save Changes</button>
          </div>
        </div>

      </div>
    </div>
  );
}
