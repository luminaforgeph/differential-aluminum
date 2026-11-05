"use client";

import Image from "next/image";
import { useState } from "react";

export function ProjectImage({ src, alt, priority = false }: { src: string; alt: string; priority?: boolean }) {
  const [failed,setFailed] = useState(false);
  if (failed) return <div role="img" aria-label={alt} className="image-fallback absolute inset-0 flex items-center justify-center"><span className="technical text-[9px] text-white/50">PROJECT IMAGE</span></div>;
  return <Image src={src} alt={alt} fill priority={priority} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" onError={()=>setFailed(true)}/>;
}
