import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGallery } from "@/components/projects/ProjectGallery";

export const metadata: Metadata = { title: "Projects | Commercial & Residential Portfolio", description: "Browse illustrative commercial and residential project references for aluminum systems, structural steel and custom fabrication." };
export default function ProjectsPage() {
  return <SiteShell><main><section className="bg-[#17191b] pb-20 pt-36 text-white md:pb-28 md:pt-48"><div className="container-shell"><span className="eyebrow">Portfolio / Selected references</span><h1 className="display mt-7 max-w-5xl text-5xl font-extrabold leading-[.98] sm:text-6xl md:text-8xl">Work that<br/><span className="text-[#c4a36c]">takes shape.</span></h1><p className="mt-7 max-w-xl text-sm leading-7 text-white/60 md:text-base">A preview of the architectural and fabrication work we are built to support.</p></div></section><section className="section-pad"><div className="container-shell"><div className="mb-12"><SectionHeading eyebrow="Project gallery" title="Explore by sector." description="The current gallery uses illustrative reference photography only. Verified Differential projects will replace these examples when supplied."/></div><ProjectGallery/></div></section></main></SiteShell>;
}
