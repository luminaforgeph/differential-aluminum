import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceDetails } from "@/components/services/ServiceDetails";

export const metadata: Metadata = { title: "Services | Aluminum, Steel & Custom Fabrication", description: "Explore aluminum systems, structural steel fabrication and bespoke metalwork capabilities from Differential in Port Harcourt." };
export default function ServicesPage() {
  return <SiteShell><main><section className="bg-[#17191b] pb-20 pt-36 text-white md:pb-28 md:pt-48"><div className="container-shell"><span className="eyebrow">Capabilities / 01—03</span><h1 className="display mt-7 max-w-5xl text-5xl font-extrabold leading-[.98] sm:text-6xl md:text-8xl">Materials.<br/><span className="text-[#c4a36c]">Made capable.</span></h1><p className="mt-7 max-w-xl text-sm leading-7 text-white/60 md:text-base">Three connected disciplines. One commitment to fit, finish and functional performance.</p></div></section><section className="section-pad"><div className="container-shell"><SectionHeading eyebrow="Our capabilities" title={<>The right material.<br/>The right execution.</>} description="Explore the areas where we can support your next commercial, residential or specialist fabrication brief."/><ServiceDetails/></div></section><section className="bg-[#e8e8e3] py-16"><div className="container-shell flex flex-col justify-between gap-6 md:flex-row md:items-center"><div><span className="eyebrow">Have a specification?</span><h2 className="display mt-3 text-3xl font-extrabold">Let's discuss the details.</h2></div><Link href="/contact" className="button-primary">Request a consultation <ArrowUpRight size={16}/></Link></div></section></main></SiteShell>;
}
