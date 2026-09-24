import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Inter } from "next/font/google";
import "@/styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Corporate Leather — Custom Corporate Leather Goods Bangladesh",
    template: "%s | Corporate Leather",
  },
  description:
    "Bangladesh's premier B2B custom leather manufacturer. Corporate wallets, bags, cardholders, passport holders and executive gifts — fully customized with your company logo. Bulk orders from 50 pieces.",
  keywords: [
    "corporate leather goods Bangladesh",
    "custom leather corporate gifts",
    "bulk leather wallets Bangladesh",
    "branded leather products",
    "custom embossed leather",
    "corporate gift leather Bangladesh",
    "executive leather gifts Dhaka",
    "leather customization B2B",
    "corporate branding leather",
    "leather laptop bag custom",
  ],
  openGraph: {
    type: "website",
    locale: "en_BD",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Corporate Leather",
    title: "Corporate Leather — Custom B2B Leather Goods Bangladesh",
    description:
      "Fully customized leather products for corporations — wallets, bags, cardholders and more. Company logo embossing. Minimum 50 pieces.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Leather",
    description:
      "Custom corporate leather goods with your company branding. Bulk orders from 50 pieces.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
