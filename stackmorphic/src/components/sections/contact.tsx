"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  MapPin,
  MessageSquareText,
  Phone,
} from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/validations";
import { siteConfig } from "@/lib/constants";

const defaultValues: ContactFormValues = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  projectType: "Business Website",
  budget: "Not Sure",
  projectDescription: "",
  honeypot: "",
};

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
  });

  const onSubmit = async (values: ContactFormValues) => {
    const message = encodeURIComponent(
      [
        `Name: ${values.fullName}`,
        `Business: ${values.businessName}`,
        `Email: ${values.email}`,
        `Phone / WhatsApp: ${values.phone}`,
        `Project type: ${values.projectType}`,
        `Budget: ${values.budget}`,
        "",
        values.projectDescription,
      ].join("\n"),
    );

    const whatsappNumber = siteConfig.whatsappHref.split("?")[0];
    window.open(`${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
    reset();
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-200">
            CONTACT
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let&apos;s Build Something That Works for Your Business.
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-300">
            Have a website idea, an existing website that needs improvement, or
            a completely new digital project in mind? Tell us what you&apos;re
            looking to build.
          </p>

          <div className="mt-8 space-y-5 text-sm text-slate-300">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-3 text-slate-200 hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-200">
                <Phone className="h-4 w-4" />
              </span>
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-200 hover:text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-200">
                <MessageSquareText className="h-4 w-4" />
              </span>
              WhatsApp
            </a>
            <div className="flex items-start gap-3">
              <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-slate-200">
                <MapPin className="h-4 w-4" />
              </span>
              <span>{siteConfig.address}</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-violet-500/5"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm text-slate-300">
                Full Name
              </label>
              <input
                id="fullName"
                {...register("fullName")}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-white outline-none ring-0 transition focus:border-violet-400"
                aria-invalid={Boolean(errors.fullName)}
              />
              {errors.fullName ? (
                <p className="text-xs text-red-300">
                  {errors.fullName.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label htmlFor="businessName" className="text-sm text-slate-300">
                Business Name
              </label>
              <input
                id="businessName"
                {...register("businessName")}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-white outline-none ring-0 transition focus:border-violet-400"
                aria-invalid={Boolean(errors.businessName)}
              />
              {errors.businessName ? (
                <p className="text-xs text-red-300">
                  {errors.businessName.message}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm text-slate-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-white outline-none ring-0 transition focus:border-violet-400"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email ? (
                <p className="text-xs text-red-300">{errors.email.message}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm text-slate-300">
                Phone / WhatsApp
              </label>
              <input
                id="phone"
                {...register("phone")}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-white outline-none ring-0 transition focus:border-violet-400"
                aria-invalid={Boolean(errors.phone)}
              />
              {errors.phone ? (
                <p className="text-xs text-red-300">{errors.phone.message}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label htmlFor="projectType" className="text-sm text-slate-300">
                Project Type
              </label>
              <select
                id="projectType"
                defaultValue="Business Website"
                {...register("projectType")}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-white outline-none transition focus:border-violet-400"
              >
                <option>Business Website</option>
                <option>Landing Page</option>
                <option>E-Commerce</option>
                <option>Web Application</option>
                <option>Website Redesign</option>
                <option>Maintenance</option>
                <option>Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="budget" className="text-sm text-slate-300">
                Estimated Budget
              </label>
              <select
                id="budget"
                defaultValue="Not Sure"
                {...register("budget")}
                className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-white outline-none transition focus:border-violet-400"
              >
                <option>Under ₹10,000</option>
                <option>₹10,000 – ₹25,000</option>
                <option>₹25,000 – ₹50,000</option>
                <option>₹50,000+</option>
                <option>Not Sure</option>
              </select>
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <label
              htmlFor="projectDescription"
              className="text-sm text-slate-300"
            >
              Project Description
            </label>
            <textarea
              id="projectDescription"
              {...register("projectDescription")}
              rows={6}
              className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2.5 text-white outline-none transition focus:border-violet-400"
              aria-invalid={Boolean(errors.projectDescription)}
            />
            {errors.projectDescription ? (
              <p className="text-xs text-red-300">
                {errors.projectDescription.message}
              </p>
            ) : null}
          </div>

          <input
            type="text"
            {...register("honeypot")}
            aria-hidden="true"
            className="hidden"
            autoComplete="off"
            tabIndex={-1}
          />

          {isSubmitSuccessful ? (
            <div className="mt-6 flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-3 text-sm text-emerald-100">
              <CheckCircle2 className="h-4 w-4" /> Your project inquiry has been
              submitted.
            </div>
          ) : null}

          {!isSubmitSuccessful && errors.projectDescription ? (
            <div className="mt-6 flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-3 text-sm text-red-100">
              <AlertCircle className="h-4 w-4" /> Please correct the highlighted
              fields and try again.
            </div>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Sending...
              </>
            ) : (
              "Send Project Inquiry"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
