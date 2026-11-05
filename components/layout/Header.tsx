"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [{href:"/services",label:"Services"},{href:"/projects",label:"Projects"},{href:"/contact",label:"Contact"}];

export function Header() {
  const [open,setOpen] = useState(false);
  return <header className="absolute inset-x-0 top-0 z-50 border-b border-white/10 text-white">
    <div className="container-shell flex h-[76px] items-center justify-between md:h-[88px]">
      <Link href="/" aria-label="Differential Aluminum home" className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center border border-[#a98248] text-[11px] font-extrabold tracking-tight text-[#d0b17c]">D/A</span>
        <span className="leading-tight"><span className="block text-[13px] font-extrabold tracking-[.12em]">DIFFERENTIAL</span><span className="technical block text-[8px] text-white/55">ALUMINUM & STEEL CO. LTD</span></span>
      </Link>
      <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
        {links.map(link=><Link key={link.href} href={link.href} className="text-xs font-semibold text-white/75 transition hover:text-white">{link.label}</Link>)}
        <Link href="/contact" className="flex h-11 items-center gap-3 bg-[#a98248] px-5 text-xs font-bold text-white transition hover:bg-[#8f6b39]">Request a quote <ArrowUpRight size={15}/></Link>
      </nav>
      <button type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(v=>!v)} className="flex h-11 w-11 items-center justify-center border border-white/25 md:hidden">{open?<X/>:<Menu/>}</button>
    </div>
    {open && <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-white/10 bg-[#17191b] px-5 py-5 md:hidden">
      {links.map(link=><Link key={link.href} href={link.href} onClick={()=>setOpen(false)} className="block border-b border-white/10 py-4 text-sm font-semibold">{link.label}</Link>)}
      <Link href="/contact" onClick={()=>setOpen(false)} className="button-primary mt-5 w-full">Request a quote <ArrowUpRight size={16}/></Link>
    </nav>}
  </header>;
}
