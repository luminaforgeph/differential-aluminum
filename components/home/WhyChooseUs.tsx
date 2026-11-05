import { Compass, Gem, Ruler } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {icon:Ruler,title:"Precision in the detail",text:"A considered approach to measurement, material selection and fabrication quality at every stage."},
  {icon:Gem,title:"Materials with purpose",text:"Solutions selected around durability, function, finish and the demands of the project environment."},
  {icon:Compass,title:"Rooted in Port Harcourt",text:"A local operating base serving developers, builders and property owners across the region."},
];
export function WhyChooseUs() {
  return <section className="section-pad overflow-hidden bg-[#17191b] text-white"><div className="container-shell grid gap-14 lg:grid-cols-[.9fr_1.1fr]"><Reveal><SectionHeading light eyebrow="The Differential standard" title={<>Good work is<br/>built into the<br/><span className="text-[#c4a36c]">process.</span></>} description="A dependable fabrication partner understands that the quality of the finished installation begins long before the first component is fitted."/></Reveal><div className="divide-y divide-white/15">{reasons.map((item,i)=><Reveal key={item.title} delay={i*.08}><article className="grid gap-5 py-7 sm:grid-cols-[50px_1fr]"><item.icon size={25} strokeWidth={1.2} className="text-[#c4a36c]"/><div><p className="technical text-[9px] text-white/40">0{i+1} / PRINCIPLE</p><h3 className="display mt-3 text-2xl font-bold">{item.title}</h3><p className="mt-3 max-w-lg text-sm leading-7 text-white/55">{item.text}</p></div></article></Reveal>)}</div></div></section>;
}
