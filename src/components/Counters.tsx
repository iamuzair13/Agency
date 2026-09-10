"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const counters = [
  { value: 6, suffix: " wks", label: "Average Launch Time" },
  { value: 100, suffix: "%", label: "You Own Everything" },
  { value: 40, suffix: "%", label: "Faster Delivery" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

function Counter({
  value,
  suffix,
  label,
  start,
}: {
  value: number;
  suffix: string;
  label: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf: number;
    const duration = 1800;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setCount(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, value]);

  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-[22px] font-semibold leading-none tracking-[-0.8px] text-[#202342] dark:text-white sm:text-[28px] lg:text-[34px]">
        {count}
        <span>{suffix}</span>
      </span>
      <span className="mt-1 text-[11px] font-medium text-[#4e516a] dark:text-[#a8acc4] sm:mt-1.5 sm:text-xs lg:text-sm">
        {label}
      </span>
    </div>
  );
}

export default function Counters({ flush = false }: { flush?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className={`relative z-10 px-3 sm:px-4 ${flush ? "" : "-mt-12 sm:-mt-12"}`}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
        transition={{ duration: 0.8, ease: EASE }}
        className="mx-auto max-w-[1300px] rounded-[20px] border border-white/40 bg-white/30 p-4 shadow-[0_8px_40px_rgba(32,35,66,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-[0_8px_40px_rgba(0,0,0,0.3)] sm:rounded-[28px] sm:p-5 sm:px-8 sm:py-6"
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-4">
          {counters.map((c, i) => (
            <div key={i} className="relative py-2">
              <Counter {...c} start={inView} />
              {/* horizontal divider on mobile between rows */}
              {i % 2 === 1 && i < counters.length - 1 && (
                <div className="absolute left-0 right-0 top-full h-px bg-gradient-to-r from-transparent via-[#202342]/10 to-transparent dark:via-white/10 sm:hidden" />
              )}
              {/* vertical divider on desktop */}
              {i < counters.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#202342]/15 to-transparent dark:via-white/15 sm:block" />
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
