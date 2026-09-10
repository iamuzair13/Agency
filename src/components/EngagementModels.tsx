"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PixelButton from "@/components/PixelButton";

const EASE = [0.16, 1, 0.3, 1] as const;

const models = [
  {
    num: "(01)",
    category: "Speed & Validation",
    title: "MVP Development",
    tagline: "Launch Fast. Validate Smarter.",
    desc: "Build a production-ready MVP quickly to test your idea, attract users, and gain real feedback without wasting time or budget.",
    features: [
      "Rapid development cycles",
      "Lean, scalable architecture",
      "Focus on core features only",
      "Ready for investor demos & early users",
    ],
    mockup: "mvp",
  },
  {
    num: "(02)",
    category: "Flexibility & Scale",
    title: "Staff Augmentation",
    tagline: "Extend Your Team, Instantly.",
    desc: "Add skilled developers, designers, or specialists to your existing team without the hassle of hiring.",
    features: [
      "Pre-vetted, experienced talent",
      "Flexible scaling (up/down anytime)",
      "Seamless integration with your workflow",
      "Full control over your team",
    ],
    mockup: "staff",
  },
  {
    num: "(03)",
    category: "Trust & Discretion",
    title: "White Label Partnership",
    tagline: "Deliver More, Under Your Brand.",
    desc: "Work with us as your behind-the-scenes team. We build and deliver projects for your clients completely under your agency's identity.",
    features: [
      "100% white-labeled delivery",
      "Confidential & secure collaboration",
      "Scalable execution for multiple clients",
      "Maintain client ownership & relationships",
    ],
    mockup: "whitelabel",
  },
  {
    num: "(04)",
    category: "Quality & Reliability",
    title: "Dedicated Team",
    tagline: "Your Long-Term Product Partner.",
    desc: "A fully dedicated team aligned with your goals, working as an extension of your company for continuous growth.",
    features: [
      "Full-time, focused team",
      "Long-term product development",
      "Deep understanding of your business",
      "Faster iterations & consistent output",
    ],
    mockup: "dedicated",
  },
];

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 shrink-0">
      <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Mockup cards ── */
function MvpMockup() {
  return (
    <div className="rounded-2xl border border-[#202342]/10 bg-white p-4 dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center justify-between text-[10px] font-medium text-[#4e516a] dark:text-white/40">
        <span>9:41</span>
        <span className="flex items-center gap-1 rounded-full bg-green-500/15 px-2 py-0.5 text-green-600 dark:text-green-400">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" /> LIVE
        </span>
      </div>
      <div className="mt-3 space-y-3">
        <div>
          <p className="text-xs font-medium text-[#202342] dark:text-white">Welcome back</p>
          <p className="text-[10px] text-[#4e516a] dark:text-white/40">Day 14 · v1.0 shipped</p>
        </div>
        <div className="rounded-xl bg-[#f5f6fa] p-3 dark:bg-white/5">
          <p className="text-[10px] text-[#4e516a] dark:text-white/40">Today</p>
          <p className="text-lg font-semibold text-[#202342] dark:text-white">$4,284</p>
          <p className="text-[10px] text-green-600 dark:text-green-400">↑ 18% vs yesterday</p>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 rounded-xl bg-[#4555fd]/8 p-2.5 dark:bg-[#6b78ff]/10">
            <p className="text-[9px] text-[#4e516a] dark:text-white/40">Signups · 7d</p>
            <p className="text-sm font-semibold text-[#4555fd] dark:text-[#6b78ff]">+312%</p>
          </div>
          <div className="flex-1 rounded-xl bg-[#7c3aed]/8 p-2.5 dark:bg-[#a78bfa]/10">
            <p className="text-[9px] text-[#4e516a] dark:text-white/40">Build</p>
            <p className="text-sm font-semibold text-[#7c3aed] dark:text-[#a78bfa]">#142</p>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-[#202342]/8 pt-3 dark:border-white/8">
        <span className="rounded-full bg-green-500/15 px-2.5 py-1 text-[10px] font-bold text-green-600 dark:text-green-400">Shipped</span>
        <span className="text-[10px] text-[#4e516a] dark:text-white/40">Day 14 · v1.0</span>
      </div>
    </div>
  );
}

function StaffMockup() {
  return (
    <div className="rounded-2xl border border-[#202342]/10 bg-white p-4 dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-[#4555fd]/12 px-2.5 py-1 text-[10px] font-medium text-[#4555fd] dark:bg-[#6b78ff]/15 dark:text-[#6b78ff]">Pre-vetted</span>
        <span className="text-[10px] text-[#4e516a] dark:text-white/40">48 ready · 24h</span>
      </div>
      <p className="mt-3 text-xs font-medium text-[#202342] dark:text-white">Your squad</p>
      <div className="mt-2 space-y-2">
        {["Full Stack", "Backend", "Designer"].map((role, i) => (
          <div key={i} className="flex items-center justify-between rounded-xl bg-[#f5f6fa] px-3 py-2 dark:bg-white/5">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-[#4555fd] to-[#7c3aed]" />
              <span className="text-xs text-[#202342] dark:text-white">{role}</span>
            </div>
            <span className="rounded-full bg-green-500/15 px-2 py-0.5 text-[9px] font-bold text-green-600 dark:text-green-400">Hired</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WhiteLabelMockup() {
  return (
    <div className="rounded-2xl border border-[#202342]/10 bg-white p-4 dark:border-white/10 dark:bg-white/5">
      <p className="text-[10px] font-medium uppercase tracking-wide text-[#4e516a] dark:text-white/40">Visible to clients</p>
      <div className="mt-2 rounded-xl border border-[#202342]/10 bg-[#f5f6fa] p-3 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#202342] text-sm font-bold text-white dark:bg-white dark:text-black">A</div>
          <div>
            <p className="text-xs font-medium text-[#202342] dark:text-white">Acme Studio</p>
            <p className="text-[9px] text-[#4e516a] dark:text-white/40">Made by Acme · est. 2018</p>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#202342]/5 px-3 py-2 dark:bg-white/5">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-[#4e516a] dark:text-white/40">
          <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M8 11V8a4 4 0 018 0v3" stroke="currentColor" strokeWidth="2" />
        </svg>
        <span className="text-[10px] font-medium text-[#4e516a] dark:text-white/50">NDA · sealed</span>
      </div>
      <div className="mt-3 border-t border-dashed border-[#202342]/15 pt-3 dark:border-white/10">
        <p className="text-[9px] text-[#4e516a] dark:text-white/30">Only you see this</p>
        <div className="mt-1.5 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#4555fd] text-[10px] font-bold text-white dark:bg-[#6b78ff]">IK</div>
          <div>
            <p className="text-[10px] font-medium text-[#4555fd] dark:text-[#6b78ff]">Built by us</p>
            <p className="text-[8px] text-[#4e516a] dark:text-white/30">Never disclosed · 100% confidential</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DedicatedMockup() {
  return (
    <div className="rounded-2xl border border-[#202342]/10 bg-white p-4 dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-[#4555fd]/12 px-2.5 py-1 text-[10px] font-medium text-[#4555fd] dark:bg-[#6b78ff]/15 dark:text-[#6b78ff]">Long-term</span>
        <span className="text-[10px] text-[#4e516a] dark:text-white/40">Ongoing</span>
      </div>
      <p className="mt-3 text-xs font-medium text-[#202342] dark:text-white">Same dedicated squad</p>
      <div className="mt-2 flex items-end gap-1.5">
        <span className="text-2xl font-bold text-[#202342] dark:text-white">21</span>
        <span className="mb-1 text-[10px] text-[#4e516a] dark:text-white/40">months</span>
      </div>
      {/* Timeline bars */}
      <div className="mt-3 flex gap-2">
        <div className="flex-1">
          <div className="h-2 rounded-full bg-[#4555fd] dark:bg-[#6b78ff]" />
          <p className="mt-1 text-[9px] text-[#4e516a] dark:text-white/40">Y1</p>
        </div>
        <div className="flex-1">
          <div className="h-2 rounded-full bg-[#7c3aed] dark:bg-[#a78bfa]" />
          <p className="mt-1 text-[9px] text-[#4e516a] dark:text-white/40">Y2</p>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-[#202342]/8 pt-3 dark:border-white/8">
        <span className="text-[10px] text-[#4e516a] dark:text-white/40">Scaled to 10k users</span>
        <span className="rounded-full bg-green-500/15 px-2 py-0.5 text-[9px] font-bold text-green-600 dark:text-green-400">Zero churn</span>
      </div>
    </div>
  );
}

function Mockup({ type }: { type: string }) {
  switch (type) {
    case "mvp":
      return <MvpMockup />;
    case "staff":
      return <StaffMockup />;
    case "whitelabel":
      return <WhiteLabelMockup />;
    case "dedicated":
      return <DedicatedMockup />;
    default:
      return null;
  }
}

export default function EngagementModels() {
  return (
    <section className="relative overflow-hidden bg-[#f5f6fa] py-16 transition-colors duration-500 dark:bg-[#0f1020] sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12 max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#4e516a] dark:text-white/50"
          >
            Engagement models
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="mt-4 text-[28px] font-medium leading-[1.1] tracking-tight text-[#202342] dark:text-white sm:text-[40px] sm:tracking-[-1.2px]"
          >
            Pick the engine that fits.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 }}
            className="mt-4 text-sm text-[#4e516a] dark:text-white/60 sm:text-base"
          >
            MVP sprint, embedded squad, white-label delivery, or a dedicated
            long-term team four ways to get production code shipping under your
            name, not ours.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {models.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: EASE, delay: (i % 2) * 0.1 }}
              className="grid grid-cols-1 gap-6 rounded-3xl border border-[#202342]/10 bg-white p-6 transition-colors duration-300 hover:border-[#4555fd]/30 dark:border-white/10 dark:bg-white/5 dark:hover:border-[#6b78ff]/30 sm:p-8 md:grid-cols-[1fr_220px] md:gap-8"
            >
              {/* Text content */}
              <div className="flex flex-col">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-xs font-medium text-[#4e516a] dark:text-white/40">{m.num}</span>
                  <span className="text-xs font-medium uppercase tracking-wide text-[#4555fd] dark:text-[#6b78ff]">
                    {m.category}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-[#202342] dark:text-white sm:text-2xl">
                  {m.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#4555fd] dark:text-[#6b78ff]">
                  {m.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#4e516a] dark:text-white/60">
                  {m.desc}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {m.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#4555fd]/12 text-[#4555fd] dark:bg-[#6b78ff]/15 dark:text-[#6b78ff]">
                        <CheckIcon />
                      </span>
                      <span className="text-sm text-[#202342] dark:text-white/80">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 w-fit">
                  <PixelButton href="/contact" showArrow={false}>
                    Start a project
                  </PixelButton>
                </div>
              </div>
              {/* Mockup */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-[220px]">
                  <Mockup type={m.mockup} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
