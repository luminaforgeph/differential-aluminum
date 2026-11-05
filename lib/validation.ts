import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.email("Enter a valid email address.").max(254),
  phone: z.string().trim().min(7, "Enter a valid phone number.").max(30),
  projectType: z.enum(["Aluminum systems", "Structural steel", "Custom fabrication", "Multiple services", "Other"]),
  message: z.string().trim().min(10, "Please tell us a little more about your project.").max(3000),
});
export type QuoteInput = z.infer<typeof quoteSchema>;
