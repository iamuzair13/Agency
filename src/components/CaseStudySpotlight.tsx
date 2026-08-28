"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PixelButton from "@/components/PixelButton";
import { motion, AnimatePresence } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const caseStudies = [
  {
    client: "LeadFlow",
    category: "SaaS Platform",
    title: "From idea to seed round in 5 weeks.",
    desc: "We built a B2B lead-scoring MVP that helped LeadFlow close their $2M seed round. Full-stack Next.js app with real-time enrichment, AI scoring, and a Stripe-billed dashboard — shipped clean enough to pass investor diligence.",
    image: "/images/projects/image-1.webp",
    metrics: [
      { value: "5 wks", label: "Idea to launch" },
      { value: "$2M", label: "Seed raised" },
      { value: "3x", label: "Open rate lift" },
      { value: "95", label: "Lighthouse score" },
    ],
    tags: ["Next.js", "PostgreSQL", "Stripe", "OpenAI"],
    accent: "#4555fd",
  },
  {
    client: "DataPulse",
    category: "Web App",
    title: "Lighthouse 40 → 95 in one rebuild.",
    desc: "A performance-focused rebuild of DataPulse's analytics dashboard. We cut bundle size by 70%, moved to server components, and hit 95+ Lighthouse across the board — lifting trial-to-paid conversion from 8% to 22%.",
    image: "/images/projects/image-4.webp",
    metrics: [
      { value: "95+", label: "Lighthouse" },
      { value: "70%", label: "Bundle cut" },
      { value: "22%", label: "Trial → paid" },
      { value: "10K", label: "Concurrent users" },
    ],
    tags: ["Next.js", "RSC", "TypeScript", "AWS"],
    accent: "#7c3aed",
  },
  {
    client: "Nimbus",
    category: "Branding + Web",
    title: "A brand system that scaled to 12 markets.",
    desc: "Complete brand identity and marketing site for Nimbus's Series A launch — logo, color system, typography, and a headless Next.js site with a 3D product configurator. Rolled out across 12 regional markets in 3 weeks.",
    image: "/images/projects/image-3.webp",
    metrics: [
      { value: "12", label: "Markets" },
      { value: "3 wks", label: "Rollout" },
      { value: "3D", label: "Configurator" },
      { value: "100%", label: "Brand coverage" },
    ],
    tags: ["Figma", "Three.js", "Next.js", "Sanity"],
    accent: "#db2777",
  },
];

export default function CaseStudySpotlight() {
  const [active, setActive] = useState(0);
  const cs = caseStudies[active];

  return (
    <section className="relative overflow-hidden bg-white py-16 transition-colors duration-500 dark:bg-[#0a0b16] sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-12 max-w-2xl sm:mb-16"
        >
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#4e516a] dark:text-white/50">
            Featured work
          </span>
          <h2 className="mt-4 text-[28px] font-medium leading-[1.05] tracking-tight text-[#202342] dark:text-white sm:text-[40px] sm:tracking-[-1.5px] lg:text-[48px]">
            Case studies with numbers.
          </h2>
          <p className="mt-4 text-sm text-[#4e516a] dark:text-white/60 sm:text-base">
            Not just pretty screenshots — real products, real metrics, real
            outcomes. Switch between stories to see the impact.
          </p>
        </motion.div>

        {/* Case study selector tabs */}
        <div className="mb-8 flex flex-wrap gap-2 sm:gap-3">
          {caseStudies.map((c, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "text-white"
                  : "border border-[#202342]/15 text-[#4e516a] hover:bg-[#202342]/5 dark:border-white/15 dark:text-white/60 dark:hover:bg-white/5"
              }`}
              style={active === i ? { backgroundColor: c.accent } : undefined}
            >
              {c.client}
            </button>
          ))}
        </div>

        {/* Case study content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={cs.image}
                alt={cs.client}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: `linear-gradient(135deg, ${cs.accent}, transparent 60%)`,
                }}
              />
              {/* Client badge */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 backdrop-blur-sm dark:bg-black/60">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: cs.accent }}
                />
                <span className="text-xs font-bold text-[#202342] dark:text-white">
                  {cs.client}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <span
                className="text-xs font-medium uppercase tracking-wide"
                style={{ color: cs.accent }}
              >
                {cs.category}
              </span>
              <h3 className="mt-3 text-2xl font-medium leading-tight tracking-tight text-[#202342] dark:text-white sm:text-3xl lg:text-[2.25rem]">
                {cs.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#4e516a] dark:text-white/60 sm:text-base">
                {cs.desc}
              </p>

              {/* Metrics grid */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {cs.metrics.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: EASE, delay: i * 0.08 }}
                    className="rounded-2xl border border-[#202342]/10 p-4 dark:border-white/10"
                  >
                    <span
                      className="block text-2xl font-semibold tracking-tight sm:text-3xl"
                      style={{ color: cs.accent }}
                    >
                      {m.value}
                    </span>
                    <span className="mt-1 block text-[11px] font-medium uppercase tracking-wide text-[#4e516a] dark:text-white/40">
                      {m.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {cs.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#202342]/10 bg-[#f5f6fa] px-3 py-1.5 text-xs font-medium text-[#4e516a] dark:border-white/10 dark:bg-white/5 dark:text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 w-fit">
                <PixelButton href="/contact">Start a project like this</PixelButton>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
