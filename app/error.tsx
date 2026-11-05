"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error("Application route error:", error); }, [error]);
  return <main className="flex min-h-screen flex-col items-center justify-center bg-[#17191b] px-6 text-center text-white"><span className="technical text-xs text-[#c4a36c]">UNEXPECTED ERROR</span><h1 className="display mt-5 text-4xl font-extrabold sm:text-5xl">Something interrupted the process.</h1><p className="mt-5 max-w-md text-sm leading-7 text-white/60">The page could not be loaded. You can try again or return to the homepage.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><button type="button" onClick={reset} className="button-primary">Try again</button><Link href="/" className="button-outline">Return home</Link></div></main>;
}
