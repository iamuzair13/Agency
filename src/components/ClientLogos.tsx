"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const clients = [
  "Boltshift",
  "Clandestine",
  "Codecraft_",
  "ennLabs",
  "GlobalBank",
  "45 Degrees°",
  "AlphaWave",
  "Biosynthesis",
];

const loop = [...clients, ...clients];

export default function ClientLogos() {
  return (
    <section className="relative overflow-hidden bg-white py-12 transition-colors duration-500 dark:bg-[#0f1020] sm:py-16">
      <div className="mx-auto mb-8 max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-center text-xs font-medium uppercase tracking-[0.2em] text-[#4e516a] dark:text-white/40"
        >
          Trusted by teams worldwide
        </motion.p>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.8, ease: EASE }}
        className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      >
        <div className="logo-marquee flex w-max items-center gap-12 pl-12 sm:gap-16 sm:pl-16 lg:gap-20 lg:pl-20">
          {loop.map((name, i) => (
            <span
              key={i}
              className="shrink-0 text-xl font-semibold tracking-tight text-[#202342]/40 transition-colors duration-300 hover:text-[#202342] dark:text-white/30 dark:hover:text-white sm:text-2xl lg:text-3xl"
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .logo-marquee {
          animation: logo-marquee 25s linear infinite;
          will-change: transform;
        }
        @keyframes logo-marquee {
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
