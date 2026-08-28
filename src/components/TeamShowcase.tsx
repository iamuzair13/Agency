"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PixelButton from "@/components/PixelButton";

const EASE = [0.16, 1, 0.3, 1] as const;

const team = [
  {
    name: "Sarah Chen",
    role: "Full Stack Engineer",
    initials: "SC",
    color: "from-[#4555fd] to-[#7c3aed]",
    bio: "Ships production code at the speed of thought. 8 years across fintech and SaaS.",
    skills: ["React", "Node.js", "PostgreSQL"],
    location: "Dubai",
  },
  {
    name: "Marcus Webb",
    role: "Backend Architect",
    initials: "MW",
    color: "from-[#7c3aed] to-[#db2777]",
    bio: "Designs systems that survive scale. Ex-Stripe, obsessed with clean APIs.",
    skills: ["Go", "GraphQL", "AWS"],
    location: "Remote",
  },
  {
    name: "Sophia Reeves",
    role: "Product Designer",
    initials: "SR",
    color: "from-[#db2777] to-[#f59e0b]",
    bio: "Turns complex flows into interfaces people actually enjoy using.",
    skills: ["Figma", "Design Systems", "Research"],
    location: "London",
  },
  {
    name: "Liam Foster",
    role: "Frontend Lead",
    initials: "LF",
    color: "from-[#4555fd] to-[#0ea5e9]",
    bio: "Pixel-perfect UIs with Lighthouse scores that make engineers jealous.",
    skills: ["Next.js", "Tailwind", "Motion"],
    location: "Dubai",
  },
  {
    name: "Hannah Choi",
    role: "AI/ML Engineer",
    initials: "HC",
    color: "from-[#0ea5e9] to-[#10b981]",
    bio: "Builds the AI pipelines that make our 40% speed claim real, not marketing.",
    skills: ["Python", "LangChain", "RAG"],
    location: "Seoul",
  },
  {
    name: "David Sequeira",
    role: "DevOps Engineer",
    initials: "DS",
    color: "from-[#10b981] to-[#4555fd]",
    bio: "Keeps the infra humming. Zero-downtime deploys and 99.9% uptime.",
    skills: ["Docker", "K8s", "CI/CD"],
    location: "Remote",
  },
  {
    name: "Emma Robertson",
    role: "Product Manager",
    initials: "ER",
    color: "from-[#f59e0b] to-[#db2777]",
    bio: "Translates founder chaos into clear milestones. You'll love her, investors do.",
    skills: ["Strategy", "Roadmaps", "Analytics"],
    location: "New York",
  },
  {
    name: "Noah Bennett",
    role: "Mobile Lead",
    initials: "NB",
    color: "from-[#7c3aed] to-[#4555fd]",
    bio: "React Native and Swift. Ships apps that feel native, not webviews in a trench coat.",
    skills: ["React Native", "Swift", "Expo"],
    location: "Berlin",
  },
];

export default function TeamShowcase() {
  const [hovered, setHovered] = useState<number | null>(null);

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
            The people
          </span>
          <h2 className="mt-4 text-[28px] font-medium leading-[1.05] tracking-tight text-[#202342] dark:text-white sm:text-[40px] sm:tracking-[-1.5px] lg:text-[48px]">
            Senior hands on every commit.
          </h2>
          <p className="mt-4 text-sm text-[#4e516a] dark:text-white/60 sm:text-base">
            No junior outsourcing, no offshore hand-offs. The people who scope
            your project are the same ones who write the code. Hover a face to
            meet them.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: EASE, delay: (i % 4) * 0.08 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-2xl border border-[#202342]/10 bg-[#f5f6fa] dark:border-white/10 dark:bg-white/5"
            >
              {/* Gradient avatar background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${member.color} transition-opacity duration-500 ${
                  hovered === i ? "opacity-100" : "opacity-15 dark:opacity-25"
                }`}
              />

              {/* Grid pattern overlay */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              {/* Initials (large, centered) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  animate={{
                    scale: hovered === i ? 0.7 : 1,
                    y: hovered === i ? -60 : 0,
                  }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className={`text-5xl font-bold tracking-tight transition-colors duration-300 sm:text-6xl ${
                    hovered === i
                      ? "text-white"
                      : "text-[#202342] dark:text-white"
                  }`}
                >
                  {member.initials}
                </motion.span>
              </div>

              {/* Bottom info — always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <motion.div
                  animate={{ y: hovered === i ? -80 : 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <h3
                    className={`text-sm font-medium transition-colors duration-300 sm:text-base ${
                      hovered === i
                        ? "text-white"
                        : "text-[#202342] dark:text-white"
                    }`}
                  >
                    {member.name}
                  </h3>
                  <p
                    className={`text-[11px] transition-colors duration-300 sm:text-xs ${
                      hovered === i
                        ? "text-white/80"
                        : "text-[#4e516a] dark:text-white/50"
                    }`}
                  >
                    {member.role}
                  </p>
                </motion.div>
              </div>

              {/* Hover reveal — bio + skills */}
              <motion.div
                initial={false}
                animate={{
                  opacity: hovered === i ? 1 : 0,
                  y: hovered === i ? 0 : 20,
                }}
                transition={{ duration: 0.4, ease: EASE }}
                className="absolute bottom-0 left-0 right-0 p-4 sm:p-5"
              >
                <p className="text-xs leading-relaxed text-white/90">
                  {member.bio}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-1.5 text-[10px] font-medium text-white/70">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-3 w-3"
                  >
                    <path
                      d="M12 21s-7-6.5-7-12a7 7 0 1114 0c0 5.5-7 12-7 12z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  {member.location}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Join the team banner */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[#202342]/10 bg-[#f5f6fa] p-6 dark:border-white/10 dark:bg-white/5 sm:flex-row sm:p-8"
        >
          <div>
            <h3 className="text-lg font-medium text-[#202342] dark:text-white">
              We&apos;re always looking for senior talent.
            </h3>
            <p className="mt-1 text-sm text-[#4e516a] dark:text-white/60">
              Remote-first, async-friendly, and we ship real things.
            </p>
          </div>
          <PixelButton
            href="mailto:hello@youragency.com?subject=Joining the team"
            className="shrink-0"
          >
            Open positions
          </PixelButton>
        </motion.div>
      </div>
    </section>
  );
}
