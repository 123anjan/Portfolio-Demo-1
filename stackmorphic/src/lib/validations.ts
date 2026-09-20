import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required."),
  businessName: z.string().min(2, "Business name is required."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  projectType: z.enum([
    "Business Website",
    "Landing Page",
    "E-Commerce",
    "Web Application",
    "Website Redesign",
    "Maintenance",
    "Other",
  ]),
  budget: z.enum([
    "Under ₹10,000",
    "₹10,000 – ₹25,000",
    "₹25,000 – ₹50,000",
    "₹50,000+",
    "Not Sure",
  ]),
  projectDescription: z
    .string()
    .min(20, "Please tell us a bit more about your project."),
  honeypot: z
    .string()
    .max(0, "Invalid submission")
    .optional()
    .or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
