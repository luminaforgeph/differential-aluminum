import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = { title: "Aluminum & Structural Steel Fabrication in Port Harcourt", description: "Explore aluminum systems, structural steel fabrication and custom metalwork from Differential Aluminum & Steel Co. Ltd in Port Harcourt, Nigeria." };
export default function HomePage() {
  return <SiteShell><main><Hero/><TrustBar/><ServicesOverview/><FeaturedProjects/><WhyChooseUs/><CTASection/></main></SiteShell>;
}
