"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PixelButton from "@/components/PixelButton";
import { motion, AnimatePresence } from "framer-motion";
import Counters from "@/components/Counters";
import ClientLogos from "@/components/ClientLogos";
import CaseStudySpotlight from "@/components/CaseStudySpotlight";
import ProjectTimeline from "@/components/ProjectTimeline";
import Footer from "@/components/Footer";

const EASE = [0.16, 1, 0.3, 1] as const;

const allProjects = [
  { src: "/images/projects/image-1.webp", title: "Nurture leads with personalized email marketing automation", tag: "Email Marketing", category: "Marketing", desc: "A drip campaign system that boosted open rates by 3x and converted 40% more leads for a B2B SaaS client." },
  { src: "/images/projects/image-2.webp", title: "Generate demand through targeted LinkedIn ad campaigns", tag: "LinkedIn Ads", category: "Marketing", desc: "LinkedIn ad strategy that generated 500+ qualified leads in 30 days at $12 CPL for a fintech startup." },
  { src: "/images/projects/image-3.webp", title: "Capture leads using gated whitepapers and reports", tag: "Gated Content", category: "Content", desc: "A content gating system with lead scoring that increased MQL conversion by 65% for a consulting firm." },
  { src: "/images/projects/image-4.webp", title: "Boost conversions via free trials and demos", tag: "SaaS Funnel", category: "Web App", desc: "A self-serve trial funnel with in-app onboarding that lifted trial-to-paid conversion from 8% to 22%." },
  { src: "/images/projects/image-5.webp", title: "Expand reach through strategic industry partner programs", tag: "Partner Outreach", category: "Strategy", desc: "A partner portal and co-marketing framework that added 12 channel partners and $1.2M in pipeline." },
  { src: "/images/projects/image-1.webp", title: "Brand identity for a Series A fintech startup", tag: "Branding", category: "Design", desc: "Complete brand system — logo, color palette, typography, and guidelines — for a fintech startup's Series A launch." },
  { src: "/images/projects/image-2.webp", title: "E-commerce platform with real-time inventory", tag: "Full Stack", category: "Web App", desc: "A Next.js + PostgreSQL e-commerce platform handling 10K concurrent users with real-time stock updates." },
  { src: "/images/projects/image-3.webp", title: "Interactive product demo with 3D configurator", tag: "3D / WebGL", category: "Design", desc: "A Three.js-powered product configurator letting users customize and preview products in real-time before purchase." },
];

const categories = ["All", "Marketing", "Web App", "Design", "Content", "Strategy"];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

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
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-[32px] font-medium leading-[1.05] tracking-tight text-[#202342] dark:text-white sm:text-[48px] sm:tracking-[-1.5px]"
          >
            Our Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="mx-auto mt-4 max-w-md text-sm text-[#4e516a] dark:text-white/60 sm:text-base"
          >
            A selection of projects we&apos;ve crafted for clients across
            industries. From marketing campaigns to full-stack platforms.
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <PixelButton href="/contact">Start a project</PixelButton>
            <PixelButton href="/services" variant="secondary" showArrow={false}>View services</PixelButton>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#f5f6fa] pt-16 transition-colors duration-500 dark:bg-[#0f1020] sm:pt-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <Counters flush />
        </div>
      </section>

      {/* Featured case study spotlight */}
      <CaseStudySpotlight />

      {/* Client logos marquee */}
      <ClientLogos />

      {/* Filter tabs + project grid */}
      <section className="bg-[#f5f6fa] py-16 transition-colors duration-500 dark:bg-[#0f1020] sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#202342] text-white dark:bg-white dark:text-black"
                    : "border border-[#202342]/15 text-[#4e516a] hover:bg-[#202342]/5 dark:border-white/15 dark:text-white/60 dark:hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Project grid */}
          <motion.div
            layout
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p, i) => (
                <motion.article
                  key={`${p.title}-${i}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-lg dark:bg-white/5"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={p.src}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-t from-black/80 via-black/50 to-black/30 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <p className="text-center text-sm leading-relaxed text-white/90">
                        {p.desc}
                      </p>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#202342] transition-transform duration-300 group-hover:scale-105">
                        View project
                        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                          <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-6">
                    <span className="text-xs font-medium uppercase tracking-wide text-[#4555fd] dark:text-[#6b78ff]">
                      {p.tag}
                    </span>
                    <h3 className="mt-2 text-base font-medium leading-snug text-[#202342] dark:text-white">
                      {p.title}
                    </h3>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project process timeline */}
      <ProjectTimeline />

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
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[#4e516a] dark:text-white/60 sm:text-base">
            Let&apos;s talk about how we can bring it to life — fast, clean,
            and ready for the big meeting.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <PixelButton href="/contact">Start a project</PixelButton>
            <PixelButton href="/services" variant="secondary" showArrow={false}>Explore services</PixelButton>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
