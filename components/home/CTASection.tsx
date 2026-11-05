import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function CTASection() {
  return <section className="bg-[#e8e8e3] py-20 md:py-28"><div className="container-shell flex flex-col justify-between gap-9 md:flex-row md:items-end"><div className="max-w-3xl"><span className="eyebrow">Start with a conversation</span><h2 className="display mt-5 text-4xl font-extrabold leading-[1.02] sm:text-5xl md:text-7xl">Have a project<br/>taking shape?</h2><p className="mt-6 max-w-lg text-sm leading-7 text-[#6c7479]">Tell us what you are planning. We will help you identify the right next step for your aluminum, steel or custom fabrication requirements.</p></div><Link href="/contact" className="button-primary shrink-0">Request a project quote <ArrowUpRight size={16}/></Link></div></section>;
}
