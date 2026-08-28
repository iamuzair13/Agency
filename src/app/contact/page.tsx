"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PixelButton from "@/components/PixelButton";
import { siteConfig } from "@/config/site";
import WhatHappensNext from "@/components/WhatHappensNext";
import Footer from "@/components/Footer";

const EASE = [0.16, 1, 0.3, 1] as const;
const EASE_CSS = "cubic-bezier(0.16, 1, 0.3, 1)" as const;

const projectTypes = [
  "Web App",
  "Landing Page",
  "Branding",
  "Full Stack",
  "Other",
];

const budgetRanges = [
  "< $5K",
  "$5K – $15K",
  "$15K – $50K",
  "$50K+",
];

const contactInfo = [
  {
    label: "Office",
    value: "11 Garden, Town Hills\nDubai, UAE 13690",
    icon: (
      <>
        <path d="M12 21s-7-6.5-7-12a7 7 0 1114 0c0 5.5-7 12-7 12z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
  },
  {
    label: "Phone",
    value: "+971 4 123 4567",
    href: "tel:+97141234567",
    icon: (
      <>
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </>
    ),
  },
];

const socials = [
  { href: "https://twitter.com", label: "Twitter", icon: "M22 5.8a8.5 8.5 0 01-2.36.64A4.13 4.13 0 0021.5 4a8.21 8.21 0 01-2.6 1 4.1 4.1 0 00-7 3.74A11.64 11.64 0 013 5.1a4.1 4.1 0 001.27 5.47A4.07 4.07 0 012.4 10v.05a4.1 4.1 0 003.3 4.02 4.1 4.1 0 01-1.86.07 4.1 4.1 0 003.83 2.85A8.23 8.23 0 012 18.4a11.6 11.6 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67v-.53A8.18 8.18 0 0022 5.8z" },
  { href: "https://linkedin.com", label: "LinkedIn", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z" },
  { href: "https://instagram.com", label: "Instagram", icon: "M12 2c2.72 0 3.06.01 4.12.06 1.07.05 1.79.22 2.43.47.66.25 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.36.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.07-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.77c-.55.55-1.11.9-1.77 1.15-.64.25-1.36.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.07-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.25-.64-.42-1.36-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.07.22-1.79.47-2.43.25-.66.6-1.22 1.15-1.77.55-.55 1.11-.9 1.77-1.15.64-.25 1.36-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" },
  { href: "https://dribbble.com", label: "Dribbble", icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm6.6 4.6a8 8 0 011.8 5c-.3-.06-3.3-.67-6.3-.3-.07-.15-.13-.3-.2-.46a18.6 18.6 0 00-.6-1.3c3.3-1.35 4.8-3.3 5.3-2.94zM12 4.2c2 0 3.8.75 5.2 2-.45.6-1.8 2.4-5 3.6a39.9 39.9 0 00-3.6-5.6c1.1-.26 2.2-.4 3.4-.4zM7.5 5.2a47.7 47.7 0 013.6 5.5c-4.5 1.2-8.5 1.2-8.9 1.2a8 8 0 015.3-6.7zM4.2 12v-.3c.4 0 5 .1 9.8-1.3.3.5.5 1 .8 1.5-.1 0-.2.1-.3.1-5 1.6-7.6 6-7.8 6.3a8 8 0 01-2.5-6.3zm7.8 8a8 8 0 01-5-1.7c.2-.4 2-3.9 7.4-5.7l.1-.1c1.4 3.5 1.9 6.5 2 7.3a8 8 0 01-4.5 1.2zm6.3-2.3c-.1-.6-.6-3.4-1.9-6.8 2.8-.4 5.3.3 5.6.4a8 8 0 01-3.7 6.4z" },
];

const testimonials = [
  { quote: "They shipped our MVP in 5 weeks. The code was clean, documented, and ready for due diligence. We closed our seed round 3 weeks later.", author: "Sarah Chen", role: "Founder, LeadFlow" },
  { quote: "Best agency we've worked with. Fixed scope, no surprises, and the quality was senior-level. Our Lighthouse scores went from 40 to 95.", author: "Marcus Webb", role: "CTO, DataPulse" },
];

const faqs = [
  { q: "How long does a typical project take?", a: "Most landing pages ship in 1-2 weeks. Full-stack web apps take 4-8 weeks depending on complexity. We lock the timeline upfront with clear milestones." },
  { q: "Do I own the code?", a: "Yes — 100%. Full repo handover on day one, clean GitHub history, your accounts, your infra. No vendor lock-in, no proprietary frameworks." },
  { q: "What's your pricing model?", a: "Fixed scope, milestone-based payments. No $50K deposits or 12-month retainers. You pay as the product takes shape and can stop at any milestone." },
  { q: "Can you work with my existing team?", a: "Absolutely. We can embed alongside your team, handle a specific module, or take the full build. We use standard tools (GitHub, Slack, Linear) for seamless collaboration." },
  { q: "Do you offer post-launch support?", a: "Yes. We offer 30 days of free bug fixes after launch, plus optional monthly maintenance retainer for ongoing updates and feature work." },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.email.trim()) e.email = "Please enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email";
    if (!form.projectType) e.projectType = "Please select a project type";
    if (!form.budget) e.budget = "Please select a budget range";
    if (!form.message.trim()) e.message = "Please tell us about your project";
    else if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const inputClass = (fieldName: string) =>
    `w-full rounded-2xl border bg-white px-5 py-3.5 text-sm text-[#202342] outline-none transition-colors duration-300 focus:border-[#4555fd] dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40 dark:focus:border-[#6b78ff] placeholder:text-[#4e516a]/50 ${
      errors[fieldName]
        ? "border-red-400 dark:border-red-500/60"
        : "border-[#202342]/15"
    }`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#dde4ff] via-[#ece4ff] to-[#f5f6fa] pt-32 pb-16 transition-colors duration-500 dark:bg-gradient-to-b dark:from-[#1a1c35] dark:via-[#15172e] dark:to-[#0f1020] sm:pt-40 sm:pb-24 lg:pt-[180px] lg:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/4 h-[200px] w-[200px] rounded-full bg-[#4555fd]/20 blur-[80px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-10 right-1/4 h-[180px] w-[180px] rounded-full bg-[#7c3aed]/20 blur-[80px] sm:h-[360px] sm:w-[360px] sm:blur-[120px]"
        />

        <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#4e516a] transition-colors duration-500 dark:text-white/50"
          >
            Get in touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-[32px] font-medium leading-[1.05] tracking-tight text-[#202342] dark:text-white sm:text-[48px] sm:tracking-[-1.5px]"
          >
            Let&apos;s start something great
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="mx-auto mt-4 max-w-md text-sm text-[#4e516a] dark:text-white/60 sm:text-base"
          >
            Tell us about your project and we&apos;ll get back to you within 24
            hours. Or reach us directly using the details below.
          </motion.p>

          {/* Secondary contact methods */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-[#4e516a] dark:text-white/60"
          >
            <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-[#4555fd] dark:hover:text-[#6b78ff]">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
                <path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {siteConfig.email}
            </a>
            <span className="text-[#202342]/20 dark:text-white/20">|</span>
            <a href="tel:+97141234567" className="inline-flex items-center gap-2 transition-colors hover:text-[#4555fd] dark:hover:text-[#6b78ff]">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              </svg>
              +971 4 123 4567
            </a>
          </motion.div>
        </div>
      </section>

      {/* Form + Contact info sidebar */}
      <section className="bg-[#f5f6fa] py-16 transition-colors duration-500 dark:bg-[#0f1020] sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] lg:gap-12">
            {/* Form */}
            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="rounded-3xl border border-[#202342]/10 bg-white p-10 text-center shadow-lg dark:border-white/10 dark:bg-white/5"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/15">
                    <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-green-500">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h2 className="mt-6 text-2xl font-medium text-[#202342] dark:text-white">
                    Thanks for reaching out!
                  </h2>
                  <p className="mt-3 text-sm text-[#4e516a] dark:text-white/60">
                    We&apos;ve received your message and will be in touch within
                    24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", projectType: "", budget: "", message: "" });
                    }}
                    className="mt-8 inline-flex h-11 items-center rounded-full border border-[#202342]/15 px-6 text-sm font-medium text-[#202342] transition-colors hover:bg-[#202342]/5 dark:border-white/15 dark:text-white dark:hover:bg-white/5"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease: EASE }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-3xl border border-[#202342]/10 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-white/5 sm:p-10"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-[#4e516a] dark:text-white/50">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={inputClass("name")}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-[#4e516a] dark:text-white/50">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={inputClass("email")}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-[#4e516a] dark:text-white/50">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className={inputClass("projectType")}
                      >
                        <option value="" disabled>
                          Select a type
                        </option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.projectType}</p>
                      )}
                    </div>
                    <div>
                      <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-[#4e516a] dark:text-white/50">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className={inputClass("budget")}
                      >
                        <option value="" disabled>
                          Select a range
                        </option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                      {errors.budget && (
                        <p className="mt-1.5 text-xs text-red-500">{errors.budget}</p>
                      )}
                    </div>
                  </div>
                  <div className="mt-5">
                    <label className="mb-2 block text-xs font-medium uppercase tracking-wide text-[#4e516a] dark:text-white/50">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className={`${inputClass("message")} resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="group relative mt-6 flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[#202342] py-4 text-sm font-bold tracking-tight text-white dark:bg-white dark:text-[#202342] sm:w-auto sm:px-8"
                  >
                    <span
                      className="absolute inset-0 origin-left scale-x-0 rounded-full bg-[#4555fd] transition-transform duration-1000 group-hover:scale-x-100"
                      style={{ transitionTimingFunction: EASE_CSS }}
                    />
                    <span className="relative z-10 h-5 overflow-hidden">
                      <span
                        className="block h-5 leading-5 text-white dark:text-[#202342] transition-all duration-1000 group-hover:-translate-y-full group-hover:scale-110 group-hover:opacity-0"
                        style={{ transitionTimingFunction: EASE_CSS }}
                      >
                        Send message
                      </span>
                      <span
                        className="absolute left-0 top-full block h-5 origin-bottom scale-90 leading-5 text-white dark:text-[#202342] transition-all duration-1000 group-hover:-translate-y-full group-hover:scale-100"
                        style={{ transitionTimingFunction: EASE_CSS }}
                      >
                        Send message
                      </span>
                    </span>
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white dark:bg-[#202342]">
                      <span
                        className="absolute inset-0 flex items-center justify-center text-[#202342] dark:text-white transition-all duration-1000 group-hover:translate-x-full"
                        style={{ transitionTimingFunction: EASE_CSS }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span
                        className="absolute inset-0 flex -translate-x-full items-center justify-center text-[#202342] dark:text-white transition-all duration-1000 group-hover:translate-x-0"
                        style={{ transitionTimingFunction: EASE_CSS }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </span>
                  </button>
                </motion.form>
              )}
            </div>

            {/* Contact info sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
              className="flex flex-col gap-6"
            >
              {/* Contact details card */}
              <div className="rounded-3xl border border-[#202342]/10 bg-white p-6 shadow-lg dark:border-white/10 dark:bg-white/5 sm:p-8">
                <h3 className="text-lg font-medium text-[#202342] dark:text-white">
                  Contact details
                </h3>
                <div className="mt-6 space-y-5">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4555fd]/10 text-[#4555fd] dark:bg-[#6b78ff]/15 dark:text-[#6b78ff]">
                        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                          {info.icon}
                        </svg>
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-[#4e516a] dark:text-white/40">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="mt-1 block text-sm text-[#202342] transition-colors hover:text-[#4555fd] dark:text-white/70 dark:hover:text-[#6b78ff]"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="mt-1 whitespace-pre-line text-sm text-[#202342] dark:text-white/70">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Socials */}
                <div className="mt-6 border-t border-[#202342]/10 pt-6 dark:border-white/10">
                  <p className="text-xs font-medium uppercase tracking-wide text-[#4e516a] dark:text-white/40">
                    Follow us
                  </p>
                  <div className="mt-3 flex gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#202342]/5 text-[#4e516a] transition-all duration-300 hover:scale-110 hover:bg-[#4555fd] hover:text-white dark:bg-white/5 dark:text-white/60 dark:hover:bg-[#6b78ff]"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                          <path d={s.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map / visual placeholder */}
              <div className="relative overflow-hidden rounded-3xl border border-[#202342]/10 bg-white shadow-lg dark:border-white/10 dark:bg-white/5">
                <div className="relative h-[200px] w-full bg-gradient-to-br from-[#dde4ff] via-[#ece4ff] to-[#f5f6fa] dark:from-[#1a1c35] dark:via-[#15172e] dark:to-[#0f1020]">
                  {/* Stylized map grid */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, rgba(69,85,253,0.12) 1px, transparent 1px), linear-gradient(rgba(69,85,253,0.12) 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  {/* Location pin */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="absolute -inset-4 animate-ping rounded-full bg-[#4555fd]/20" />
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#4555fd] shadow-lg">
                        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-white">
                          <path d="M12 21s-7-6.5-7-12a7 7 0 1114 0c0 5.5-7 12-7 12z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                          <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm font-medium text-[#202342] dark:text-white">
                    Dubai, UAE
                  </p>
                  <p className="mt-1 text-xs text-[#4e516a] dark:text-white/50">
                    11 Garden, Town Hills, Dubai 13690
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What happens next timeline */}
      <WhatHappensNext />

      {/* Social proof / testimonials */}
      <section className="bg-white py-16 transition-colors duration-500 dark:bg-[#0f1020] sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-12 text-center text-[28px] font-medium tracking-tight text-[#202342] dark:text-white sm:text-[36px]"
          >
            What clients say
          </motion.h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                className="rounded-3xl border border-[#202342]/10 bg-[#f5f6fa] p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8"
              >
                {/* Stars */}
                <div className="flex gap-1 text-[#fbbf24]">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-[#202342] dark:text-white/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#4555fd] to-[#7c3aed] text-sm font-bold text-white">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#202342] dark:text-white">
                      {t.author}
                    </p>
                    <p className="text-xs text-[#4e516a] dark:text-white/50">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f6fa] py-16 transition-colors duration-500 dark:bg-[#0f1020] sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-10 text-center text-[28px] font-medium tracking-tight text-[#202342] dark:text-white sm:text-[36px]"
          >
            Frequently asked questions
          </motion.h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl border border-[#202342]/10 bg-white dark:border-white/10 dark:bg-white/5"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <span className="text-sm font-medium text-[#202342] dark:text-white sm:text-base">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#202342]/5 text-[#4e516a] transition-transform duration-300 dark:bg-white/10 dark:text-white/60 ${
                      openFaq === i ? "rotate-45" : ""
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-[#4e516a] dark:text-white/60 sm:px-6 sm:pb-6">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-white py-16 transition-colors duration-500 dark:bg-[#0f1020] sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto max-w-2xl px-5 text-center sm:px-6"
        >
          <h2 className="text-[28px] font-medium tracking-tight text-[#202342] dark:text-white sm:text-[36px]">
            Prefer to explore first?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[#4e516a] dark:text-white/60 sm:text-base">
            Check out our work or browse our services to see what we can do for
            you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <PixelButton href="/work">View our work</PixelButton>
            <PixelButton href="/services" variant="secondary" showArrow={false}>Explore services</PixelButton>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
