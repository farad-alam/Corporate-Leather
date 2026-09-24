import {
  pgTable,
  serial,
  text,
  integer,
  boolean,
  timestamp,
  jsonb,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// ─── Categories ──────────────────────────────────────────────────────────────

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").unique().notNull(),
  imageUrl: text("image_url"),
  displayOrder: integer("display_order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

// ─── Products (B2B - No pricing) ─────────────────────────────────────────────

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").unique().notNull(),
  categoryId: integer("category_id").references(() => categories.id),
  description: text("description"),
  shortDescription: text("short_description"),
  images: text("images").array().notNull().default([]),
  featured: boolean("featured").default(false).notNull(),
  displayOrder: integer("display_order").default(0),
  tags: text("tags").array().default([]),
  material: text("material").default("Full-Grain Leather"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// ─── Customization Schema ──────────────────────────────────────────────────

export const customizationGroups = pgTable("customization_groups", {
  id: serial("id").primaryKey(),
  productId: integer("product_id").references(() => products.id).notNull(),
  groupKey: text("group_key").notNull(), // e.g., 'leather_type', 'color', 'card_slots'
  label: text("label").notNull(), // e.g., 'Leather Type'
  type: text("type").notNull(), // 'single' | 'multi' | 'text' | 'number' | 'upload'
  required: boolean("required").default(true).notNull(),
  displayOrder: integer("display_order").default(0).notNull(),
});

export const customizationOptions = pgTable("customization_options", {
  id: serial("id").primaryKey(),
  groupId: integer("group_id").references(() => customizationGroups.id).notNull(),
  label: text("label").notNull(), // e.g., 'Premium Brown'
  value: text("value").notNull(), // e.g., 'premium-brown'
  description: text("description"),
  imageUrl: text("image_url"),
  displayOrder: integer("display_order").default(0).notNull(),
});

// ─── Inquiries (B2B Orders) ────────────────────────────────────────────────

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  inquiryNumber: text("inquiry_number").unique().notNull(), // e.g. INQ-20260923-1234
  
  // Company & Contact Details
  companyName: text("company_name").notNull(),
  contactPerson: text("contact_person").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  industry: text("industry"),
  
  // Product & Selections
  productId: integer("product_id").references(() => products.id).notNull(),
  productName: text("product_name").notNull(),
  customizations: jsonb("customizations").notNull(), // JSON mapping of groupKey -> value(s)
  
  // Branding details
  brandingType: text("branding_type").notNull(), // 'embossing' | 'printing' | 'engraving' | 'none'
  brandingNotes: text("branding_notes"),
  logoFileUrl: text("logo_file_url"), // Cloudinary URL
  
  // Order specifics
  quantity: integer("quantity").notNull(),
  timeline: text("timeline").notNull(),
  additionalNotes: text("additional_notes"),
  
  // Admin & Status
  status: text("status").notNull().default("NEW"),
  // 'NEW' | 'REVIEWED' | 'QUOTED' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED'
  adminNotes: text("admin_notes"),
  
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// ─── Trusted Clients ───────────────────────────────────────────────────────

export const clientLogos = pgTable("client_logos", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  logoUrl: text("logo_url").notNull(),
  displayOrder: integer("display_order").default(0),
});

// ─── Testimonials ──────────────────────────────────────────────────────────

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  company: text("company").notNull(),
  role: text("role"),
  quote: text("quote").notNull(),
  rating: integer("rating").default(5),
  featured: boolean("featured").default(false),
  displayOrder: integer("display_order").default(0),
});

// ─── Relations ───────────────────────────────────────────────────────────────

export const categoriesRelations = relations(categories, ({ many }) => ({
  products: many(products),
}));

export const productsRelations = relations(products, ({ one, many }) => ({
  category: one(categories, {
    fields: [products.categoryId],
    references: [categories.id],
  }),
  customizationGroups: many(customizationGroups),
  inquiries: many(inquiries),
}));

export const customizationGroupsRelations = relations(customizationGroups, ({ one, many }) => ({
  product: one(products, {
    fields: [customizationGroups.productId],
    references: [products.id],
  }),
  options: many(customizationOptions),
}));

export const customizationOptionsRelations = relations(customizationOptions, ({ one }) => ({
  group: one(customizationGroups, {
    fields: [customizationOptions.groupId],
    references: [customizationGroups.id],
  }),
}));

export const inquiriesRelations = relations(inquiries, ({ one }) => ({
  product: one(products, {
    fields: [inquiries.productId],
    references: [products.id],
  }),
}));
