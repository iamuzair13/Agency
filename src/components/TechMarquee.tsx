"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const techStack = [
  { name: "More Customers", category: "Growth" },
  { name: "Higher Conversion", category: "Results" },
  { name: "Faster Launch", category: "Speed" },
  { name: "Mobile-First", category: "Experience" },
  { name: "SEO-Ready", category: "Visibility" },
  { name: "Brand Growth", category: "Identity" },
  { name: "Easy to Manage", category: "Simple" },
  { name: "Built to Scale", category: "Future" },
  { name: "Customer Trust", category: "Credibility" },
  { name: "Online Booking", category: "Revenue" },
  { name: "Payment Ready", category: "Sales" },
  { name: "Analytics Built-In", category: "Insights" },
  { name: "24/7 Support", category: "Ongoing" },
  { name: "Full Ownership", category: "Yours" },
  { name: "Fixed Pricing", category: "Transparent" },
  { name: "Premium Design", category: "Quality" },
];

const loop = [...techStack, ...techStack];

export default function TechMarquee() {
  const sectionRef = useRef<HTMLElement>(null);

  // Pause both CSS marquee animations when off-screen.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const tracks = el.querySelectorAll<HTMLElement>(".tech-marquee-left, .tech-marquee-right");
    if (tracks.length === 0) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const state = entry.isIntersecting ? "running" : "paused";
        tracks.forEach((t) => (t.style.animationPlayState = state));
      },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#202342] py-12 dark:bg-black sm:py-16">
      {/* Glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/4 h-[200px] w-[300px] rounded-full bg-[#4555fd]/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 right-1/4 h-[200px] w-[300px] rounded-full bg-[#7c3aed]/20 blur-[100px]"
      />

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative mb-8 text-center"
      >
        <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/40">
          What you get when you work with us
        </span>
      </motion.div>

      {/* Marquee row 1 scrolls left */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="tech-marquee-left flex w-max items-center gap-3 pl-3 sm:gap-4 sm:pl-4">
          {loop.map((tech, i) => (
            <div
              key={i}
              className="group flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-[#4555fd]/40 hover:bg-white/10"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#4555fd] to-[#7c3aed] transition-transform duration-300 group-hover:scale-150" />
              <span className="text-sm font-medium text-white/80 transition-colors duration-300 group-hover:text-white">
                {tech.name}
              </span>
              <span className="hidden text-[10px] font-medium uppercase tracking-wide text-white/30 sm:inline">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee row 2 scrolls right (reverse) */}
      <div className="relative mt-4 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="tech-marquee-right flex w-max items-center gap-3 pr-3 sm:gap-4 sm:pr-4">
          {[...loop].reverse().map((tech, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-2 rounded-full border border-white/5 bg-white/[0.03] px-4 py-2 transition-colors duration-300 hover:border-white/20"
            >
              <span className="text-xs font-medium text-white/50 transition-colors duration-300 hover:text-white/80">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tech-marquee-left {
          animation: tech-scroll-left 40s linear infinite;
          will-change: transform;
        }
        .tech-marquee-right {
          animation: tech-scroll-right 50s linear infinite;
          will-change: transform;
        }
        @keyframes tech-scroll-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes tech-scroll-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
