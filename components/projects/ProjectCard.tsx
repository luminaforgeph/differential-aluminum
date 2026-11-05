import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { ProjectImage } from "@/components/ui/ProjectImage";

export function ProjectCard({ project }: { project: Project }) {
  return <article className="group">
    <Link href="/projects" className="relative block aspect-[4/3] overflow-hidden bg-[#292e32]" aria-label={`View portfolio: ${project.title}`}>
      <ProjectImage src={project.image} alt={project.imageAlt}/>
      <span className="absolute left-4 top-4 z-10 bg-[#17191b]/80 px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-white">{project.category}</span>
      <span className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center bg-[#a98248] text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><ArrowUpRight size={17}/></span>
    </Link>
    <div className="flex items-start justify-between gap-4 pt-5"><div><h3 className="display text-xl font-bold">{project.title}</h3><p className="mt-2 text-xs text-[#6c7479]">{project.description}</p></div><span className="technical pt-1 text-[8px] text-[#a98248]">REF.</span></div>
    <p className="mt-3 text-[10px] text-[#858b8e]">{project.location} · Illustrative placeholder</p>
  </article>;
}
