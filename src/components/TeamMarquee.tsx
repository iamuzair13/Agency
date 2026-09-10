"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const team = [
  { name: "Sarah Chen", role: "Strategy Lead", initials: "SC", color: "from-[#4555fd] to-[#7c3aed]" },
  { name: "Marcus Webb", role: "Design Director", initials: "MW", color: "from-[#7c3aed] to-[#db2777]" },
  { name: "Sophia Reeves", role: "Brand Strategist", initials: "SR", color: "from-[#db2777] to-[#f59e0b]" },
  { name: "Liam Foster", role: "Project Lead", initials: "LF", color: "from-[#4555fd] to-[#0ea5e9]" },
  { name: "Hannah Choi", role: "Growth Specialist", initials: "HC", color: "from-[#0ea5e9] to-[#10b981]" },
  { name: "David Sequeira", role: "Delivery Manager", initials: "DS", color: "from-[#10b981] to-[#4555fd]" },
  { name: "Emma Robertson", role: "Client Partner", initials: "ER", color: "from-[#f59e0b] to-[#db2777]" },
  { name: "Noah Bennett", role: "Experience Lead", initials: "NB", color: "from-[#7c3aed] to-[#4555fd]" },
];

const loop = [...team, ...team];

export default function TeamMarquee() {
  const sectionRef = useRef<HTMLElement>(null);

  // Pause the CSS marquee animation when the section is off-screen
  // to save CPU/battery. Zero visual change resumes where it left off.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const track = el.querySelector<HTMLElement>(".team-marquee");
    if (!track) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        track.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
      },
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-b from-[#f5f6fa] to-white py-12 transition-colors duration-500 dark:from-[#0f1020] dark:to-[#0f1020] sm:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[200px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4555fd]/8 blur-[100px] sm:h-[400px] sm:w-[700px] sm:blur-[150px]"
      />

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]"
      >
        <div className="team-marquee flex w-max items-stretch gap-3 pl-3 sm:gap-4 sm:pl-4 lg:gap-5 lg:pl-5">
          {loop.map((member, i) => (
            <div
              key={i}
              className="group flex w-[160px] shrink-0 items-center gap-3 rounded-2xl border border-[#202342]/10 bg-white p-3 transition-all duration-300 hover:scale-[1.03] hover:border-[#4555fd]/30 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:hover:border-[#6b78ff]/30 sm:w-[200px] sm:p-4 lg:w-[220px]"
            >
              {/* Avatar */}
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${member.color} text-sm font-bold text-white sm:h-12 sm:w-12 sm:text-base`}
              >
                {member.initials}
              </div>
              {/* Name + role */}
              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-[#202342] dark:text-white sm:text-sm">
                  {member.name}
                </p>
                <p className="truncate text-[10px] text-[#4e516a] dark:text-white/50 sm:text-xs">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .team-marquee {
          animation: team-marquee 35s linear infinite;
          will-change: transform;
        }
        @keyframes team-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
