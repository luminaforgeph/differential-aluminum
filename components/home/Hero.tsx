import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";

export function Hero() {
  return <section className="relative flex min-h-[720px] items-end overflow-hidden bg-[#17191b] pb-20 pt-36 text-white md:min-h-[790px] md:pb-28">
    <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=90" alt="Contemporary commercial architecture with a precision-engineered glass and metal facade" fill priority sizes="100vw" className="object-cover object-center opacity-55"/>
    <div className="absolute inset-0 bg-gradient-to-r from-[#101214]/95 via-[#17191b]/70 to-[#17191b]/15"/>
    <div className="absolute inset-0 grid-lines opacity-40"/>
    <div className="container-shell relative z-10 grid gap-14 lg:grid-cols-[1fr_280px] lg:items-end">
      <div className="max-w-4xl">
        <span className="eyebrow text-[#d1b27d]">Port Harcourt · Nigeria · Fabrication & Engineering</span>
        <h1 className="display mt-7 text-[clamp(3.45rem,10vw,8.6rem)] font-extrabold uppercase leading-[.88]">Built with<br/><span className="text-[#c4a36c]">precision.</span><br/>Made to last.</h1>
        <p className="mt-8 max-w-xl text-sm leading-7 text-white/70 md:text-base">Aluminum systems, structural steel and custom fabrication for projects where material quality and execution matter.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="button-primary">Discuss your project <ArrowUpRight size={16}/></Link>
          <Link href="/projects" className="button-outline">Explore capabilities <MoveUpRight size={15}/></Link>
        </div>
      </div>
      <div className="hidden border-l border-white/25 pb-1 pl-6 lg:block">
        <p className="technical text-[9px] text-[#c4a36c]">Our approach</p>
        <p className="mt-4 text-sm leading-6 text-white/75">Thoughtful material selection. Careful fabrication. A finish that respects the architecture.</p>
        <a href="#capabilities" className="mt-8 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/70 hover:text-white">Discover more <ArrowDown size={14}/></a>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"/>
    <div className="absolute bottom-0 right-0 hidden bg-[#a98248] px-7 py-4 text-[9px] font-bold uppercase tracking-[.16em] text-white md:block">Engineering · Fabrication · Installation</div>
  </section>;
}
