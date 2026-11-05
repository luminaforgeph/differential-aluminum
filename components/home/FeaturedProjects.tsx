import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FeaturedProjects() {
  return <section className="section-pad bg-white"><div className="container-shell">
    <Reveal><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionHeading eyebrow="Selected work" title={<>Made for the<br/>built environment.</>} description="A visual direction for the work we do. These reference images are illustrative placeholders, not verified Differential project records."/><Link href="/projects" className="inline-flex items-center gap-2 border-b border-[#a98248] pb-3 text-xs font-bold uppercase tracking-wider">View portfolio <ArrowUpRight size={15}/></Link></div></Reveal>
    <div className="mt-12 grid gap-9 sm:grid-cols-2 lg:grid-cols-3">{projects.slice(0,3).map((project,i)=><Reveal key={project.id} delay={i*.07}><ProjectCard project={project}/></Reveal>)}</div>
  </div></section>;
}
