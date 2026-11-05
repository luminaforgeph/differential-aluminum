"use client";

import { useMemo, useState } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";

const filters = ["All", "Commercial", "Residential"] as const;
type Filter = typeof filters[number];

export function ProjectGallery() {
  const [active,setActive] = useState<Filter>("All");
  const visible = useMemo(()=>active==="All"?projects:projects.filter(p=>p.category===active),[active]);
  return <div>
    <div className="mb-9 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
      {filters.map(filter=><button key={filter} type="button" aria-pressed={active===filter} onClick={()=>setActive(filter)} className={`min-h-11 border px-5 text-xs font-bold transition ${active===filter?"border-[#17191b] bg-[#17191b] text-white":"border-[#d5d6d1] text-[#555d62] hover:border-[#17191b]"}`}>{filter}</button>)}
    </div>
    <p className="sr-only" aria-live="polite">{visible.length} projects shown</p>
    {visible.length ? <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{visible.map(project=><ProjectCard key={project.id} project={project}/>)}</div> : <div className="border border-dashed border-[#c7c9c4] px-6 py-16 text-center"><p className="display text-2xl font-bold">No projects in this category yet.</p><p className="mt-3 text-sm text-[#6c7479]">Check another category or return later.</p></div>}
  </div>;
}
