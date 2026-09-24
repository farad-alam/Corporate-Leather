import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function generateInquiryNumber() {
  const date = new Date();
  const dateStr = date.toISOString().split("T")[0].replace(/-/g, ""); // YYYYMMDD
  const random = Math.floor(1000 + Math.random() * 9000); // 4 digit random
  return `INQ-${dateStr}-${random}`;
}

export function buildWhatsAppUrl(phone: string, text: string) {
  // Ensure phone has country code if missing (assuming Bangladesh default for this project)
  const formattedPhone = phone.startsWith("+") ? phone.replace("+", "") : `88${phone}`;
  return `https://wa.me/${formattedPhone}?text=${encodeURIComponent(text)}`;
}

export const INDUSTRIES = [
  "Banking & Finance",
  "Pharmaceuticals",
  "Telecommunications",
  "FMCG",
  "IT & Software",
  "Real Estate",
  "Manufacturing",
  "Legal Services",
  "Education",
  "Healthcare",
  "Other",
];

export function formatCustomizationSummary(
  productName: string,
  quantity: number,
  selections: Record<string, string | string[] | number>,
  brandingType: string
) {
  let summary = `Product: ${productName}\nQuantity: ${quantity}\nBranding: ${brandingType}\n\nConfigurations:\n`;
  
  for (const [key, value] of Object.entries(selections)) {
    const label = key.replace(/_/g, " ");
    const valStr = Array.isArray(value) ? value.join(", ") : value;
    summary += `- ${label}: ${valStr}\n`;
  }
  
  return summary;
}
