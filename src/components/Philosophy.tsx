"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

// The manifesto text — words are revealed one-by-one as you scroll
const manifesto =
  "Anyone can write code. Writing code that matters is harder. AI changes how things get made. Human judgment decides what should. We build with both — the speed of machines, the taste of people who have shipped at scale. No boilerplate-for-hire. No black boxes. Just senior engineers, senior designers, and a fixed scope that doesn't move.";

const words = manifesto.split(" ");

const principles = [
  { word: "AI-native", label: "AI does the grunt work" },
  { word: "judgment", label: "Humans make the calls" },
  { word: "fixed", label: "Scope never moves" },
  { word: "senior", label: "No junior outsourcing" },
];

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#202342] py-24 dark:bg-black sm:py-32 lg:py-40"
    >
      {/* Glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 left-1/3 h-[300px] w-[400px] rounded-full bg-[#4555fd]/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 right-1/3 h-[300px] w-[400px] rounded-full bg-[#7c3aed]/15 blur-[120px]"
      />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.span
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="inline-block text-xs font-medium uppercase tracking-[0.25em] text-white/40"
        >
          What we believe
        </motion.span>

        {/* Manifesto — word-by-word scroll reveal */}
        <p className="mt-8 text-2xl font-medium leading-[1.4] tracking-tight sm:text-3xl lg:text-[2.5rem] lg:leading-[1.35]">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 0.65 / words.length;
            return (
              <Word
                key={i}
                progress={scrollYProgress}
                range={[start, end]}
              >
                {word}
              </Word>
            );
          })}
        </p>

        {/* Principle chips */}
        <div className="mt-12 flex flex-wrap gap-3">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.1 }}
              className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm"
            >
              <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[#4555fd] to-[#7c3aed]" />
              <span className="text-sm font-medium text-white">{p.word}</span>
              <span className="text-xs text-white/40">{p.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(
    progress,
    range,
    ["rgba(255,255,255,0.15)", "rgba(255,255,255,1)"]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="mr-[0.25em] inline-block"
    >
      {children}
    </motion.span>
  );
}
