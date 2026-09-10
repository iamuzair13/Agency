"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import PixelButton from "@/components/PixelButton";
import { Lottie } from "lottie-react";
import { ServiceCard, services } from "@/components/ServiceCard";

// Below-the-fold sections are dynamically imported to reduce initial JS.
const Footer = dynamic(() => import("@/components/Footer"));
const ServiceAccordion = dynamic(() => import("@/components/ServiceAccordion"));
const TechMarquee = dynamic(() => import("@/components/TechMarquee"));
import techLoop from "@/assets/lottie/tech-loop.json";
import abstractLoop from "@/assets/lottie/abstract-loop.json";
import gradientLoop from "@/assets/lottie/gradient-loop.json";

const EASE = [0.16, 1, 0.3, 1] as const;

// ─── Floating service icons data ──────────────────────────────
// Positions follow a golden-ratio-inspired spiral: larger/primary icons
// near focal points, smaller secondary icons scattered in negative space.
// Sizes scale down per Fibonacci steps (1, 1, 2, 3, 5, 8 → mapped to scale).
// Each icon has desktop (lg) and mobile (sm) positions for responsiveness.
const floatingIcons = [
  // ── Primary tier (largest, near top focal points) ──
  {
    label: "Websites",
    icon: (
      <>
        <path d="M3 3h18v14H3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M3 7h18M7 21h10M10 17v4M14 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    color: "#4555fd",
    bg: "rgba(69,85,253,0.12)",
    posLg: { top: "8%", left: "4%" },
    posSm: { top: "5%", left: "2%" },
    delay: 0,
    duration: 5,
    scaleLg: 1.15,
    scaleSm: 0.55,
  },
  {
    label: "Platforms",
    icon: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.12)",
    posLg: { top: "6%", right: "5%" },
    posSm: { top: "7%", right: "2%" },
    delay: 0.4,
    duration: 6,
    scaleLg: 1.1,
    scaleSm: 0.5,
  },
  // ── Secondary tier (medium, mid-section) ──
  {
    label: "Experience",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 9h18M9 9v12" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="6" cy="6" r="0.8" fill="currentColor" />
      </>
    ),
    color: "#059669",
    bg: "rgba(5,150,105,0.12)",
    posLg: { top: "38%", left: "2%" },
    posSm: { top: "20%", left: "1%" },
    delay: 0.8,
    duration: 5.5,
    scaleLg: 0.95,
    scaleSm: 0.45,
  },
  {
    label: "Video",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </>
    ),
    color: "#ea580c",
    bg: "rgba(234,88,12,0.12)",
    posLg: { top: "42%", right: "3%" },
    posSm: { top: "24%", right: "1%" },
    delay: 1.2,
    duration: 6.5,
    scaleLg: 1.0,
    scaleSm: 0.48,
  },
  // ── Tertiary tier (smaller, lower section) ──
  {
    label: "Branding",
    icon: (
      <>
        <path d="M12 3a9 9 0 100 18 9 9 0 000-18z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 3a9 9 0 010 18M3 12h18" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
    color: "#db2777",
    bg: "rgba(219,39,119,0.12)",
    posLg: { bottom: "12%", left: "7%" },
    posSm: { top: "38%", left: "2%" },
    delay: 1.6,
    duration: 7,
    scaleLg: 0.85,
    scaleSm: 0.42,
  },
  {
    label: "Products",
    icon: (
      <>
        <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
    color: "#4f46e5",
    bg: "rgba(79,70,229,0.12)",
    posLg: { bottom: "10%", right: "8%" },
    posSm: { top: "42%", right: "2%" },
    delay: 2,
    duration: 5.5,
    scaleLg: 0.9,
    scaleSm: 0.45,
  },
  // ── Accent tier (smallest, filling negative space) ──
  {
    label: "Growth",
    icon: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="8" cy="6" r="1.5" fill="currentColor" />
        <circle cx="16" cy="12" r="1.5" fill="currentColor" />
        <circle cx="10" cy="18" r="1.5" fill="currentColor" />
      </>
    ),
    color: "#0891b2",
    bg: "rgba(8,145,178,0.12)",
    posLg: { top: "22%", left: "14%" },
    posSm: { bottom: "30%", left: "1%" },
    delay: 2.4,
    duration: 4.5,
    scaleLg: 0.7,
    scaleSm: 0.35,
  },
  {
    label: "Cloud",
    icon: (
      <>
        <path d="M7 18a5 5 0 010-10 6 6 0 0111.5 2A4.5 4.5 0 0117 18H7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </>
    ),
    color: "#6366f1",
    bg: "rgba(99,102,241,0.12)",
    posLg: { top: "26%", right: "12%" },
    posSm: { bottom: "26%", right: "1%" },
    delay: 2.8,
    duration: 5,
    scaleLg: 0.75,
    scaleSm: 0.38,
  },
  {
    label: "SEO",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
        <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.12)",
    posLg: { bottom: "28%", left: "15%" },
    posSm: { bottom: "18%", left: "2%" },
    delay: 3.2,
    duration: 6,
    scaleLg: 0.65,
    scaleSm: 0.32,
  },
  {
    label: "Insights",
    icon: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    color: "#10b981",
    bg: "rgba(16,185,129,0.12)",
    posLg: { bottom: "25%", right: "14%" },
    posSm: { bottom: "14%", right: "2%" },
    delay: 3.6,
    duration: 5.5,
    scaleLg: 0.7,
    scaleSm: 0.35,
  },
];

const process = [
  { step: "01", title: "Discover", desc: "We learn your business, your customers, and your goals to define exactly what success looks like." },
  { step: "02", title: "Design", desc: "We craft the customer experience how it looks, how it feels, and how it guides visitors to buy." },
  { step: "03", title: "Build", desc: "We bring it to life with clean, fast, and reliable technology with weekly progress you can see." },
  { step: "04", title: "Launch", desc: "We go live, track results, and keep improving we stick around to make sure it works." },
];

// ─── Floating service icon card ───────────────────────────────
function FloatingIcon({ icon, label, color, bg, posLg, posSm, delay, duration, scaleLg, scaleSm, active }: {
  icon: React.ReactNode;
  label: string;
  color: string;
  bg: string;
  posLg: React.CSSProperties;
  posSm: React.CSSProperties;
  delay: number;
  duration: number;
  scaleLg: number;
  scaleSm: number;
  active: boolean;
}) {
  return (
    <>
      {/* Mobile / tablet version */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE, delay }}
        className="pointer-events-none absolute z-10 lg:hidden"
        style={{ ...posSm, transform: `scale(${scaleSm})` }}
      >
        <motion.div
          animate={active ? { y: [0, -12, 0], rotate: [0, 2, 0] } : {}}
          transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
          className="flex items-center gap-2 rounded-xl border border-white/40 bg-white/60 px-2.5 py-2 shadow-md backdrop-blur-md dark:border-white/10 dark:bg-white/5"
        >
          <span
            className="flex h-6 w-6 items-center justify-center rounded-md"
            style={{ backgroundColor: bg, color }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              {icon}
            </svg>
          </span>
          <span className="text-[10px] font-semibold text-[#202342] dark:text-white">
            {label}
          </span>
        </motion.div>
      </motion.div>

      {/* Desktop version */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: EASE, delay }}
        className="pointer-events-none absolute z-10 hidden lg:block"
        style={{ ...posLg, transform: `scale(${scaleLg})` }}
      >
        <motion.div
          animate={active ? { y: [0, -18, 0], rotate: [0, 3, 0] } : {}}
          transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
          className="flex items-center gap-2.5 rounded-2xl border border-white/40 bg-white/60 px-3.5 py-2.5 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-white/5"
        >
          <span
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ backgroundColor: bg, color }}
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              {icon}
            </svg>
          </span>
          <span className="text-xs font-semibold text-[#202342] dark:text-white">
            {label}
          </span>
        </motion.div>
      </motion.div>
    </>
  );
}

// ─── Lottie wrapper ───────────────────────────────────────────
function LottieBg({ src, className }: {
  src: string | object;
  className?: string;
}) {
  return (
    <div className={className}>
      <Lottie
        src={src}
        loop
        autoplay
        renderer="svg"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}

export default function ServicesPage() {
  const heroRef = useRef<HTMLElement>(null);
  // Only run the infinite floating animations when the hero is in view.
  const heroInView = useInView(heroRef, { margin: "100px" });

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden bg-gradient-to-b from-[#dde4ff] via-[#ece4ff] to-[#f5f6fa] pt-24 pb-16 transition-colors duration-500 dark:bg-gradient-to-b dark:from-[#1a1c35] dark:via-[#15172e] dark:to-[#0f1020] sm:pt-40 sm:pb-28 lg:pt-[200px] lg:pb-[100px]">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-16 h-[220px] w-[220px] rounded-full bg-[#4555fd]/30 blur-[70px] sm:-left-32 sm:h-[520px] sm:w-[520px] sm:blur-[100px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 right-[-30px] h-[200px] w-[200px] rounded-full bg-[#7c3aed]/30 blur-[70px] sm:-top-32 sm:right-[-80px] sm:h-[480px] sm:w-[480px] sm:blur-[100px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-60px] left-1/2 h-[180px] w-[320px] -translate-x-1/2 rounded-full bg-[#db2777]/15 blur-[70px] sm:h-[360px] sm:w-[700px] sm:blur-[100px]"
        />

        {/* Lottie background animations */}
        <LottieBg
          src={techLoop}
          className="pointer-events-none absolute left-[-8%] top-[8%] h-[180px] w-[180px] opacity-[0.10] dark:opacity-[0.06] sm:left-[-5%] sm:top-[10%] sm:h-[240px] sm:w-[240px] sm:opacity-[0.12] lg:h-[300px] lg:w-[300px] lg:dark:opacity-[0.08]"
        />
        <LottieBg
          src={abstractLoop}
          className="pointer-events-none absolute right-[-10%] top-[3%] h-[160px] w-[160px] opacity-[0.08] dark:opacity-[0.05] sm:right-[-8%] sm:top-[5%] sm:h-[220px] sm:w-[220px] sm:opacity-[0.10] lg:h-[280px] lg:w-[280px] lg:dark:opacity-[0.06]"
        />
        <LottieBg
          src={gradientLoop}
          className="pointer-events-none absolute bottom-[-5%] left-1/2 h-[140px] w-[220px] -translate-x-1/2 opacity-[0.06] dark:opacity-[0.04] sm:bottom-[-10%] sm:h-[200px] sm:w-[340px] sm:opacity-[0.08] lg:hidden xl:block xl:h-[260px] xl:w-[400px] xl:opacity-[0.08] xl:dark:opacity-[0.05]"
        />

        {/* Floating service icon cards */}
        {floatingIcons.map((fi, i) => (
          <FloatingIcon
            key={i}
            icon={fi.icon}
            label={fi.label}
            color={fi.color}
            bg={fi.bg}
            posLg={fi.posLg}
            posSm={fi.posSm}
            delay={fi.delay}
            duration={fi.duration}
            scaleLg={fi.scaleLg}
            scaleSm={fi.scaleSm}
            active={heroInView}
          />
        ))}

        {/* Floating decorative orbs */}
        <motion.div
          aria-hidden
          animate={heroInView ? { y: [0, -20, 0] } : {}}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-[8%] top-[30%] hidden h-16 w-16 rounded-2xl bg-gradient-to-br from-[#4555fd] to-[#7c3aed] opacity-20 blur-sm lg:block"
        />
        <motion.div
          aria-hidden
          animate={heroInView ? { y: [0, 15, 0] } : {}}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="pointer-events-none absolute right-[10%] top-[45%] hidden h-12 w-12 rounded-full bg-gradient-to-br from-[#db2777] to-[#ea580c] opacity-20 blur-sm lg:block"
        />
        <motion.div
          aria-hidden
          animate={heroInView ? { y: [0, -12, 0] } : {}}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="pointer-events-none absolute left-[15%] bottom-[15%] hidden h-10 w-10 rounded-lg bg-gradient-to-br from-[#059669] to-[#4555fd] opacity-20 blur-sm lg:block"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Top: badge + heading + subtitle */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="mx-auto max-w-[420px] text-center sm:max-w-none"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.8, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full border border-[#202342]/15 px-4 py-1.5 text-[11px] font-medium tracking-wide text-[#4e516a] transition-colors duration-500 dark:border-white/15 dark:text-white/60 sm:text-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4555fd] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4555fd]" />
              </span>
              What We Do
            </motion.span>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                show: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              className="mx-auto mt-4 max-w-[400px] text-sm leading-[150%] text-[#4e516a] dark:text-[#a8acc4] sm:mt-5 sm:max-w-[560px] sm:text-lg sm:leading-[130%]"
            >
              From websites that convert visitors into customers to platforms
              that scale your business we cover everything you need to grow
              online.
            </motion.p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
            className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:mt-12 sm:gap-x-12"
          >
            {[
              { num: "7+", label: "Solutions" },
              { num: "6 wks", label: "Average Launch" },
              { num: "100%", label: "You Own It" },
              { num: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-2xl font-semibold tracking-tight text-[#202342] dark:text-white sm:text-3xl">
                  {stat.num}
                </span>
                <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.15em] text-[#4e516a] dark:text-white/50 sm:text-xs">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Benefits marquee */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
            className="mx-auto mt-10 max-w-2xl sm:mt-12"
          >
            <p className="text-center text-[10px] font-medium uppercase tracking-[0.2em] text-[#4e516a]/60 dark:text-white/40">
              What You Get
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {["More Customers", "Higher Conversion", "Faster Launch", "Mobile-First", "SEO-Ready", "Brand Growth", "Easy to Manage", "Built to Scale"].map((benefit, i) => (
                <motion.span
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: EASE, delay: 0.6 + i * 0.05 }}
                  className="rounded-full border border-[#202342]/10 bg-white/50 px-3 py-1.5 text-xs font-medium text-[#202342] backdrop-blur-sm transition-colors duration-500 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
                >
                  {benefit}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.6 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <PixelButton href="/contact">Book a call</PixelButton>
            <PixelButton href="#services-grid" variant="secondary" showArrow={false}>Explore services</PixelButton>
          </motion.div>
        </div>
      </section>

      {/* Services grid flip cards */}
      <section id="services-grid" className="relative bg-[#f5f6fa] py-16 transition-colors duration-500 dark:bg-[#0f1020] sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {services.map((s, i) => (
              <ServiceCard key={i} s={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive accordion capabilities list */}
      <ServiceAccordion />

      {/* Tech stack marquee band */}
      <TechMarquee />

      {/* Process */}
      <section className="relative bg-white py-16 transition-colors duration-500 dark:bg-[#0a0b16] sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-12 text-center sm:mb-16"
          >
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#4e516a] transition-colors duration-500 dark:text-white/50">
              How We Work
            </span>
            <h2 className="mx-auto mt-4 max-w-2xl text-[28px] font-medium leading-[1.05] tracking-tight text-[#202342] dark:text-white sm:text-[40px] sm:tracking-[-1.5px] lg:text-[48px]">
              A simple, proven process
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
                className="relative rounded-2xl border border-[#202342]/10 p-6 transition-colors duration-500 dark:border-white/10 sm:p-8"
              >
                <span className="text-3xl font-medium text-[#4555fd] dark:text-[#6b78ff] sm:text-4xl">
                  {p.step}
                </span>
                <h3 className="mt-4 text-lg font-medium text-[#202342] dark:text-white sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4e516a] dark:text-white/60">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#202342] py-16 dark:bg-[#0a0b16] sm:py-24 lg:py-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/4 h-[300px] w-[300px] rounded-full bg-[#4555fd]/20 blur-[100px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 right-1/4 h-[300px] w-[300px] rounded-full bg-[#7c3aed]/15 blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative mx-auto max-w-3xl px-5 text-center sm:px-6"
        >
          <h2 className="text-[28px] font-medium leading-[1.05] tracking-tight text-white sm:text-[40px] sm:tracking-[-1.5px] lg:text-[48px]">
            Ready to grow your business?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-white/60 sm:text-base">
            Let&apos;s talk about how we can bring it to life fast, clean, and
            increase your revenue � fast, clear, and built to last.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <PixelButton
              href="/contact"
              bgClassName="bg-white"
              textClassName="text-[#202342]"
              arrowBgClassName="bg-[#202342]"
              arrowColorClassName="text-white"
            >
              Book a call
            </PixelButton>
            <PixelButton
              href="/work"
              variant="secondary"
              showArrow={false}
              bgClassName="border border-white/15"
              textClassName="text-white"
            >
              View our work
            </PixelButton>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
