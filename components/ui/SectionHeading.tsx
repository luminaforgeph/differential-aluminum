import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, description, light = false, children }: { eyebrow: string; title: ReactNode; description?: string; light?: boolean; children?: ReactNode }) {
  return <div className={`max-w-3xl ${light ? "text-white" : "text-[#17191b]"}`}>
    <span className="eyebrow">{eyebrow}</span>
    <h2 className="display mt-5 text-4xl font-extrabold leading-[1.04] sm:text-5xl md:text-6xl">{title}</h2>
    {description && <p className={`mt-6 max-w-xl text-sm leading-7 md:text-base ${light ? "text-white/65" : "text-[#6c7479]"}`}>{description}</p>}
    {children}
  </div>;
}
