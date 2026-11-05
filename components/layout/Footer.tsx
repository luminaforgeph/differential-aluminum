import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return <footer className="bg-[#111315] text-white">
    <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.3fr_.7fr_.8fr] md:py-20">
      <div><div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center border border-[#a98248] text-xs font-bold text-[#d0b17c]">D/A</span><span className="text-sm font-extrabold tracking-[.12em]">DIFFERENTIAL</span></div><p className="mt-6 max-w-sm text-sm leading-7 text-white/55">Aluminum systems, structural steel and custom fabrication. Built around precision, performance and lasting value.</p></div>
      <div><p className="technical text-[10px] text-[#c4a36c]">Explore</p><div className="mt-5 flex flex-col gap-4 text-sm text-white/70"><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/projects">Projects</Link><Link href="/contact">Contact</Link></div></div>
      <div><p className="technical text-[10px] text-[#c4a36c]">Find us</p><p className="mt-5 flex gap-3 text-sm leading-6 text-white/70"><MapPin size={17} className="mt-1 shrink-0 text-[#c4a36c]"/>{siteConfig.address}</p><Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">Start a conversation <ArrowUpRight size={15}/></Link></div>
    </div>
    <div className="border-t border-white/10"><div className="container-shell flex flex-col gap-2 py-5 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Differential Aluminum & Steel Co. Ltd. All rights reserved.</span><span className="technical">Port Harcourt · Nigeria</span></div></div>
  </footer>;
}
