import { db } from "@/db";
import { inquiries } from "@/db/schema";
import { sql } from "drizzle-orm";
import Link from "next/link";
import { ArrowRight, FileText, CheckCircle, Clock } from "lucide-react";

export default async function AdminDashboard() {
  // Mocking DB call for now since we don't have active connection in this env
  const stats = {
    total: 24,
    new: 5,
    quoted: 12,
    completed: 7,
  };

  return (
    <div style={{ padding: "var(--space-8)" }}>
      <h1 style={{ marginBottom: "var(--space-8)" }}>Dashboard Overview</h1>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "var(--space-6)", marginBottom: "var(--space-12)" }}>
        
        <div className="card" style={{ padding: "var(--space-6)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", marginBottom: "var(--space-2)" }}>
            <FileText color="var(--gold)" />
            <h3 style={{ margin: 0 }}>New Inquiries</h3>
          </div>
          <div style={{ fontSize: "var(--text-4xl)", fontWeight: 700 }}>{stats.new}</div>
        </div>

        <div className="card" style={{ padding: "var(--space-6)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", marginBottom: "var(--space-2)" }}>
            <Clock color="var(--cognac)" />
            <h3 style={{ margin: 0 }}>Quoted (Pending)</h3>
          </div>
          <div style={{ fontSize: "var(--text-4xl)", fontWeight: 700 }}>{stats.quoted}</div>
        </div>

        <div className="card" style={{ padding: "var(--space-6)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)", marginBottom: "var(--space-2)" }}>
            <CheckCircle color="var(--success)" />
            <h3 style={{ margin: 0 }}>Completed</h3>
          </div>
          <div style={{ fontSize: "var(--text-4xl)", fontWeight: 700 }}>{stats.completed}</div>
        </div>

      </div>

      <div style={{ display: "flex", gap: "var(--space-6)" }}>
        <Link href="/admin/inquiries" className="btn btn-primary btn-lg">
          Manage Inquiries <ArrowRight size={18} />
        </Link>
        <Link href="/admin/products" className="btn btn-outline btn-lg">
          Manage Products & Configurator <ArrowRight size={18} />
        </Link>
      </div>

    </div>
  );
}
