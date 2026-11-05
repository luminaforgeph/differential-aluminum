import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/services";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceDetails() {
  return <div className="mt-14 border-t border-[#d7d8d2]">{services.map((service,i)=><Reveal key={service.number}><article className="grid gap-7 border-b border-[#d7d8d2] py-10 md:grid-cols-[100px_1fr_1fr] md:gap-10 md:py-14"><span className="technical text-xs text-[#a98248]">0{i+1} / 03</span><div><h2 className="display text-3xl font-extrabold">{service.title}</h2><p className="mt-4 max-w-md text-sm leading-7 text-[#6c7479]">{service.summary}</p><Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider">Discuss this service <ArrowUpRight size={15}/></Link></div><ul className="grid content-start gap-4 sm:grid-cols-2 md:grid-cols-1">{service.details.map(detail=><li key={detail} className="flex items-start gap-3 text-sm text-[#4f575c]"><Check size={16} className="mt-0.5 shrink-0 text-[#a98248]"/>{detail}</li>)}</ul></article></Reveal>)}</div>;
}
