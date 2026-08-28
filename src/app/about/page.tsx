"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PixelButton from "@/components/PixelButton";
import Counters from "@/components/Counters";
import Philosophy from "@/components/Philosophy";
import MilestonesTimeline from "@/components/MilestonesTimeline";
import TeamShowcase from "@/components/TeamShowcase";
import Footer from "@/components/Footer";

const EASE = [0.16, 1, 0.3, 1] as const;

const values = [
  {
    title: "Speed",
    desc: "We ship fast without cutting corners. AI-augmented workflows mean 40% faster delivery.",
    icon: (
      <>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </>
    ),
    color: "#4555fd",
  },
  {
    title: "Quality",
    desc: "Type-safe code, 80%+ test coverage, Lighthouse 90+ scores. We hold ourselves to a high bar.",
    icon: (
      <>
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7l3-7z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </>
    ),
    color: "#7c3aed",
  },
  {
    title: "Transparency",
    desc: "Fixed scope, clear milestones, no surprise invoices. You always know what's shipping and when.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    color: "#059669",
  },
  {
    title: "Partnership",
    desc: "You own 100% of the code. No lock-in, no black boxes. We win when you raise.",
    icon: (
      <>
        <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 21c0-3.31 2.69-6 6-6s6 2.69 6 6M14 21c0-2.5 1.5-4.5 4-5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
    color: "#db2777",
  },
];

export default function AboutPage() {
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
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-[32px] font-medium leading-[1.05] tracking-tight text-[#202342] dark:text-white sm:text-[48px] sm:tracking-[-1.5px]"
          >
            We build digital experiences that matter
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="mx-auto mt-4 max-w-md text-sm text-[#4e516a] dark:text-white/60 sm:text-base"
          >
            A creative partner for ambitious businesses. We blend strategy,
            design, and technology to craft products that deliver real results.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-[#f5f6fa] py-16 transition-colors duration-500 dark:bg-[#0f1020] sm:py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="space-y-6 text-[15px] leading-relaxed text-[#4e516a] dark:text-white/70 sm:text-base"
          >
            <p>
              We started as a two-person team with a simple belief: great
              software shouldn&apos;t take 16 weeks and a quarter-million
              dollars to build. AI changed the math. By handing the boring
              stuff — boilerplate, testing, code review — to AI tooling, our
              senior engineers focus on what actually matters: auth, payments,
              data, and the flows investors click through.
            </p>
            <p>
              Today we&apos;re a full-service digital agency covering frontend,
              backend, design, and motion. We&apos;ve shipped 150+ projects for
              clients ranging from pre-seed founders to established brands. Our
              approach is simple: fixed scope, milestone-based payments, and
              100% code ownership from day one. No lock-in, no surprises.
            </p>
            <p>
              We win when you raise. That&apos;s not a tagline — it&apos;s how
              we structure our pricing, our milestones, and our relationship.
              Your success is our success, and the math is set up for you, not
              against you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy / manifesto */}
      <Philosophy />

      {/* Stats */}
      <section className="bg-white py-16 transition-colors duration-500 dark:bg-[#0f1020] sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-12 text-center text-[28px] font-medium tracking-tight text-[#202342] dark:text-white sm:text-[36px]"
          >
            By the numbers
          </motion.h2>
          <Counters flush />
        </div>
      </section>

      {/* Milestones timeline */}
      <MilestonesTimeline />

      {/* Values */}
      <section className="bg-[#f5f6fa] py-16 transition-colors duration-500 dark:bg-[#0f1020] sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-12 text-center text-[28px] font-medium tracking-tight text-[#202342] dark:text-white sm:text-[36px]"
          >
            What we stand for
          </motion.h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                className="rounded-3xl border border-[#202342]/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5 sm:p-8"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${v.color}20`, color: v.color }}
                >
                  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                    {v.icon}
                  </svg>
                </span>
                <h3 className="mt-5 text-lg font-medium text-[#202342] dark:text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4e516a] dark:text-white/60">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team showcase */}
      <TeamShowcase />

      {/* CTA */}
      <section className="bg-white py-16 transition-colors duration-500 dark:bg-[#0f1020] sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto max-w-2xl px-5 text-center sm:px-6"
        >
          <h2 className="text-[28px] font-medium tracking-tight text-[#202342] dark:text-white sm:text-[36px]">
            Ready to work together?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[#4e516a] dark:text-white/60 sm:text-base">
            Let&apos;s talk about your project. We&apos;ll get back to you
            within 24 hours.
          </p>
          <div className="mt-8 flex justify-center">
            <PixelButton href="/contact">Start a project</PixelButton>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
