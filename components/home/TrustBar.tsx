const items = ["Architectural aluminum", "Structural steelwork", "Bespoke fabrication", "Port Harcourt based"];
export function TrustBar() {
  return <div className="bg-[#a98248] text-white"><div className="container-shell grid grid-cols-2 divide-x divide-white/20 md:grid-cols-4">{items.map((item,i)=><div key={item} className="flex min-h-[84px] items-center gap-3 px-3 py-5 md:px-6"><span className="technical text-[9px] text-white/65">0{i+1}</span><span className="text-[10px] font-bold uppercase leading-5 tracking-[.08em] md:text-[11px]">{item}</span></div>)}</div></div>;
}
