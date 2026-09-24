import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustedBy from "@/components/home/TrustedBy";
import ProductShowcase from "@/components/home/ProductShowcase";
import HowItWorks from "@/components/home/HowItWorks";
import ConfiguratorTeaser from "@/components/home/ConfiguratorTeaser";
import CorporateSolutions from "@/components/home/CorporateSolutions";
import CraftStory from "@/components/home/CraftStory";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Corporate Leather — Custom Corporate Leather Goods Bangladesh",
  description:
    "Premium full-grain leather goods tailored for corporate gifting and branding. Elevate your corporate identity with custom embossed leather accessories. Minimum 50 pieces.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <ProductShowcase />
      <HowItWorks />
      <ConfiguratorTeaser />
      <CorporateSolutions />
      <CraftStory />
      <CTABanner />
    </>
  );
}
