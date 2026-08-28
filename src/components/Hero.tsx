"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Cursor from "@/components/Cursor";

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)" as const;
const EASE_BEZIER = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: EASE_BEZIER },
  },
};

function TargetIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="2" />
      <circle cx="10" cy="10" r="2.5" fill="currentColor" />
      <path d="M10 1V3M10 17V19M1 10H3M17 10H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BrushIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <path
        d="M3.5 16.5C3.5 17.5 4.5 18.5 5.5 18.5C8.5 18.5 12.5 14.5 15.5 10.5C16.5 9 17 7.5 17 7.5C17 7.5 15.5 7 14 8C12.5 9 11 10.5 10 11.5M10 11.5L11.5 13M10 11.5C8.5 13 6.5 15 5.5 16.5C4.5 17.5 3.5 17.5 3.5 16.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
      <path
        d="M3 9.5C3 6.5 5.5 4 9 4H11C14.5 4 17 6.5 17 9.5C17 12.5 14.5 15 11 15H9C8.5 15 8 14.9 7.5 14.7L4 16V11.8C3.3 10.9 3 10.2 3 9.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AnimatedText({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <span className="relative block h-5 overflow-hidden">
      <span
        className={`block h-5 leading-5 text-sm font-medium transition-all duration-1000 group-hover:-translate-y-full group-hover:scale-110 group-hover:opacity-0 ${
          dark ? "text-[#202342] dark:text-white" : "text-white"
        }`}
        style={{ transitionTimingFunction: EASE }}
      >
        {children}
      </span>
      <span
        className={`absolute left-0 top-full block h-5 origin-bottom scale-90 leading-5 text-sm font-medium transition-all duration-1000 group-hover:-translate-y-full group-hover:scale-100 ${
          dark ? "text-[#202342] dark:text-white" : "text-white"
        }`}
        style={{ transitionTimingFunction: EASE }}
      >
        {children}
      </span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#dde4ff] via-[#ece4ff] to-[#f5f6fa] pt-24 pb-16 dark:bg-gradient-to-b dark:from-[#1a1c35] dark:via-[#15172e] dark:to-[#0f1020] sm:pt-40 sm:pb-28 lg:pt-[230px] lg:pb-[120px]">
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
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-[420px] px-5 text-center sm:max-w-none sm:px-6"
      >
        <motion.h2
          variants={item}
          className="mb-4 text-[20px] leading-[120%] tracking-[-0.5px] text-[#202342] dark:text-white sm:mb-[30px] sm:text-[48px] sm:tracking-[-3.4px] lg:text-[64px]"
        >
          We Build Brands<br /> That Drive Growth
        </motion.h2>
        <motion.p
          variants={item}
          className="mx-auto max-w-[400px] text-sm leading-[150%] text-[#4e516a] dark:text-[#a8acc4] sm:max-w-[580px] sm:text-lg sm:leading-[130%]"
        >
          A creative partner for ambitious businesses. We blend strategy, design,
          and technology to craft digital experiences that deliver real results.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-6"
        >
          <Link
            href="/contact"
            className="group relative inline-flex h-11 items-center justify-center gap-2.5 overflow-hidden rounded-[22px] bg-[#202342] dark:bg-white py-[7px] pl-4 pr-2 sm:h-auto sm:min-h-[54px] sm:gap-3 sm:rounded-[27px] sm:pl-[18px] sm:pr-[7px]"
          >
            <span
              className="absolute inset-0 origin-left scale-x-0 rounded-[22px] bg-[#4555fd] transition-transform duration-1000 group-hover:scale-x-100 sm:rounded-[27px]"
              style={{ transitionTimingFunction: EASE }}
            />
            <span className="relative z-10 h-5 overflow-hidden">
              <span
                className="block h-5 leading-5 text-sm font-medium text-white dark:text-[#202342] transition-all duration-1000 group-hover:-translate-y-full group-hover:scale-110 group-hover:opacity-0"
                style={{ transitionTimingFunction: EASE }}
              >
                Start Project
              </span>
              <span
                className="absolute left-0 top-full block h-5 origin-bottom scale-90 leading-5 text-sm font-medium text-white dark:text-[#202342] transition-all duration-1000 group-hover:-translate-y-full group-hover:scale-100"
                style={{ transitionTimingFunction: EASE }}
              >
                Start Project
              </span>
            </span>
            <span className="relative z-10 hidden h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white dark:bg-[#202342] lg:flex">
              <span
                className="absolute inset-0 flex items-center justify-center transition-all duration-1000 group-hover:translate-x-full"
                style={{ transitionTimingFunction: EASE }}
              >
                <Image
                  src="/images/arrow-up-right-white.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4 invert dark:invert"
                />
              </span>
              <span
                className="absolute inset-0 flex -translate-x-full items-center justify-center transition-all duration-1000 group-hover:translate-x-0"
                style={{ transitionTimingFunction: EASE }}
              >
                <Image
                  src="/images/arrow-up-right-white.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="h-4 w-4 invert dark:invert"
                />
              </span>
            </span>
          </Link>

          <Link
            href="/work"
            className="group inline-flex h-11 items-center justify-center rounded-[22px] bg-[#efeff1] dark:bg-white/10 px-5 sm:h-auto sm:min-h-[54px] sm:rounded-[27px] sm:px-6"
          >
            <AnimatedText dark>Explore</AnimatedText>
          </Link>
        </motion.div>

        <motion.div
          variants={item}
          className="mx-auto mt-8 flex max-w-[420px] flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:mt-[50px] sm:max-w-none sm:flex-nowrap sm:gap-4"
        >
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#edf2ff] text-[#4555fd] dark:bg-white/10 dark:text-[#6b78ff] sm:h-9 sm:w-9">
              <TargetIcon />
            </div>
            <span className="text-xs font-medium text-[#202342] dark:text-white sm:text-sm">Built to Convert</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f3f0ff] text-[#7c3aed] dark:bg-white/10 dark:text-[#a78bfa] sm:h-9 sm:w-9">
              <BrushIcon />
            </div>
            <span className="text-xs font-medium text-[#202342] dark:text-white sm:text-sm">Tailored for You</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#fff0f5] text-[#db2777] dark:bg-white/10 dark:text-[#f472b6] sm:h-9 sm:w-9">
              <ChatIcon />
            </div>
            <span className="text-xs font-medium text-[#202342] dark:text-white sm:text-sm">Always Supported</span>
          </div>
        </motion.div>
      </motion.div>

      <Cursor containerId="hero" />
    </section>
  );
}
