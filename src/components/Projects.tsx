"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const projects = [
  { src: "/images/projects/image-1.webp", title: "Nurture leads with personalized email marketing automation", tag: "Email Marketing" },
  { src: "/images/projects/image-2.webp", title: "Generate demand through targeted LinkedIn ad campaigns", tag: "LinkedIn Ads" },
  { src: "/images/projects/image-3.webp", title: "Capture leads using gated whitepapers and reports", tag: "Gated Content" },
  { src: "/images/projects/image-4.webp", title: "Boost conversions via free trials and demos", tag: "SaaS Funnel" },
  { src: "/images/projects/image-5.webp", title: "Expand reach through strategic industry partner programs", tag: "Partner Outreach" },
];

// Duplicate the list so the marquee loops seamlessly.
const loop = [...projects, ...projects];

export default function Projects() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#f5f6fa] to-white dark:bg-gradient-to-b dark:from-[#0f1020] dark:via-[#12132a] dark:to-[#0f1020] pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28"
      aria-label="Project highlights"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 left-1/4 h-[200px] w-[200px] rounded-full bg-[#4555fd]/12 blur-[80px] sm:-top-20 sm:h-[400px] sm:w-[400px] sm:blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-1/4 h-[200px] w-[200px] rounded-full bg-[#7c3aed]/12 blur-[80px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]"
      />

      {/* heading */}
      <div className="relative mx-auto mb-8 max-w-[900px] px-5 text-center sm:mb-14 sm:px-6">
        <motion.h3
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="text-[22px] leading-[115%] tracking-[-0.6px] text-[#202342] dark:text-white sm:text-[36px] sm:tracking-[-1.2px] lg:text-[56px] lg:tracking-[-1.76px]"
        >
          We have build
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="mx-auto mt-2 max-w-[320px] text-sm leading-[150%] text-[#4e516a] dark:text-[#a8acc4] sm:mt-4 sm:max-w-[560px] sm:text-base lg:text-lg"
        >
          We go beyond traditional marketing. We deliver value with cutting-edge,
          data-driven strategies.
        </motion.p>
      </div>

      {/* marquee track */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
        className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] lg:[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
      >
        <div className="marquee-track flex w-max items-stretch pl-3 sm:pl-6">
          {loop.map((project, i) => (
            <article
              key={i}
              className="group relative mr-3 w-[240px] shrink-0 sm:mr-5 sm:w-[380px] lg:mr-6 lg:w-[480px]"
            >
              {/* image card */}
              <div className="relative h-[300px] overflow-hidden rounded-xl ring-1 ring-black/10 dark:ring-white/10 sm:h-[460px] sm:rounded-2xl lg:h-[560px] lg:rounded-3xl">
                <Image
                  src={project.src}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 240px, (max-width: 1024px) 380px, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
                {/* arrow icon appears on hover */}
                <div className="absolute right-3 top-3 flex h-8 w-8 translate-y-[-10px] items-center justify-center rounded-full bg-white/15 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:right-4 sm:top-4 sm:h-9 sm:w-9 lg:right-5 lg:top-5 lg:h-10 lg:w-10">
                  <svg viewBox="0 0 20 20" fill="none" className="h-3 w-3 text-white sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4">
                    <path d="M6 14L14 6M14 6H7M14 6V13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              {/* title + tag below image */}
              <div className="mt-2.5 flex flex-col gap-1.5 sm:mt-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <h4 className="text-[11px] font-medium leading-[140%] text-[#202342] dark:text-white transition-colors duration-300 group-hover:text-[#4555fd] dark:group-hover:text-[#6b78ff] sm:text-base lg:max-w-[340px] lg:text-lg">
                  {project.title}
                </h4>
                <span className="shrink-0 self-start rounded-full bg-[#202342]/8 dark:bg-white/10 px-2 py-0.5 text-[8px] font-medium uppercase tracking-wider text-[#4e516a] dark:text-[#a8acc4] sm:mt-1 sm:px-3 sm:py-1 sm:text-[10px] lg:text-xs">
                  {project.tag}
                </span>
              </div>
            </article>
          ))}
        </div>
      </motion.div>

      <style jsx>{`
        .marquee-track {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
        @keyframes marquee {
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
