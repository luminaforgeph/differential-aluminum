import Link from "next/link";
import { ArrowUpRight, Layers3, PanelsTopLeft, Workflow } from "lucide-react";
import { services } from "@/lib/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const icons = [PanelsTopLeft, Layers3, Workflow];
export function ServicesOverview() {
  return <section id="capabilities" className="section-pad bg-[#f5f5f2]">
    <div className="container-shell">
      <Reveal><div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><SectionHeading eyebrow="What we do" title={<>Material expertise.<br/>Measured execution.</>} description="From architectural aluminum to structural steel and specialist metalwork, we bring material understanding and practical fabrication thinking to every brief."/><Link href="/services" className="inline-flex shrink-0 items-center gap-3 border-b border-[#a98248] pb-3 text-xs font-bold uppercase tracking-wider">All services <ArrowUpRight size={15}/></Link></div></Reveal>
      <div className="mt-14 grid gap-px bg-[#d9d9d4] md:grid-cols-3">{services.map((service,i)=>{const Icon=icons[i];return <Reveal key={service.number} delay={i*.08}><article className="group flex h-full min-h-[330px] flex-col bg-[#f5f5f2] p-7 transition-colors duration-300 hover:bg-white md:p-9"><div className="flex items-start justify-between"><span className="technical text-[10px] text-[#a98248]">{service.number} / 03</span><Icon size={27} strokeWidth={1.25} className="text-[#a98248]"/></div><h3 className="display mt-16 text-2xl font-bold">{service.title}</h3><p className="mt-4 text-sm leading-7 text-[#6c7479]">{service.summary}</p><Link href="/services" className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-bold uppercase tracking-wider">Explore service <ArrowUpRight size={14}/></Link></article></Reveal>})}</div>
    </div>
  </section>;
}
