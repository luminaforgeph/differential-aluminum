"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle, TriangleAlert } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";
const initial = { name:"", email:"", phone:"", projectType:"Aluminum systems", message:"" };

export function QuoteForm() {
  const [values,setValues] = useState(initial);
  const [state,setState] = useState<FormState>("idle");
  const [error,setError] = useState("");
  const update = (key: keyof typeof initial, value: string) => setValues(current=>({...current,[key]:value}));
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting"); setError("");
    try {
      const response = await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(values)});
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We could not send your request. Please try again.");
      setState("success"); setValues(initial);
    } catch (err) {
      setState("error"); setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }
  const field = "w-full border-0 border-b border-[#c9cbc5] bg-transparent px-0 py-4 text-sm text-[#17191b] outline-none transition placeholder:text-[#929895] focus:border-[#a98248] focus:ring-0";
  return <div>
    {state==="success" && <div role="status" className="mb-7 flex gap-3 border border-emerald-700/20 bg-emerald-50 p-4 text-sm text-emerald-900"><CheckCircle2 size={19} className="shrink-0"/><span>Your enquiry has been sent. Thank you — our team will be in touch.</span></div>}
    {state==="error" && <div role="alert" className="mb-7 flex gap-3 border border-red-700/20 bg-red-50 p-4 text-sm text-red-900"><TriangleAlert size={19} className="shrink-0"/><span>{error}</span></div>}
    <form onSubmit={submit} className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block text-xs font-bold text-[#51595d]">Full name <span className="text-[#a98248]">*</span><input className={field} name="name" autoComplete="name" required minLength={2} maxLength={100} value={values.name} onChange={e=>update("name",e.target.value)} placeholder="Your name"/></label>
        <label className="block text-xs font-bold text-[#51595d]">Email address <span className="text-[#a98248]">*</span><input className={field} name="email" type="email" autoComplete="email" required maxLength={254} value={values.email} onChange={e=>update("email",e.target.value)} placeholder="you@example.com"/></label>
        <label className="block text-xs font-bold text-[#51595d]">Phone number <span className="text-[#a98248]">*</span><input className={field} name="phone" type="tel" autoComplete="tel" required minLength={7} maxLength={30} value={values.phone} onChange={e=>update("phone",e.target.value)} placeholder="+234 ..."/></label>
        <label className="block text-xs font-bold text-[#51595d]">Project type <span className="text-[#a98248]">*</span><select className={field} name="projectType" required value={values.projectType} onChange={e=>update("projectType",e.target.value)}><option>Aluminum systems</option><option>Structural steel</option><option>Custom fabrication</option><option>Multiple services</option><option>Other</option></select></label>
      </div>
      <label className="block text-xs font-bold text-[#51595d]">Tell us about your project <span className="text-[#a98248]">*</span><textarea className={`${field} min-h-32 resize-y`} name="message" required minLength={10} maxLength={3000} value={values.message} onChange={e=>update("message",e.target.value)} placeholder="Project scope, location, timeline and any details that will help us understand your brief..."/></label>
      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-xs text-[10px] leading-5 text-[#858b8e]">Your details will only be used to respond to this enquiry.</p><button type="submit" disabled={state==="submitting"} className="button-primary min-w-52 disabled:cursor-not-allowed disabled:opacity-60">{state==="submitting"?<>Sending request <LoaderCircle size={16} className="animate-spin"/></>:<>Send quote request <ArrowUpRight size={16}/></>}</button></div>
    </form>
  </div>;
}
