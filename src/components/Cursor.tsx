"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor({ containerId }: { containerId: string }) {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Slow spring for the trailing blur
  const blurX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 });
  const blurY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    const move = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (inside) {
        x.set(e.clientX);
        y.set(e.clientY);
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    const checkHover = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (!inside) return;
      const el = e.target as HTMLElement;
      setHovering(
        !!el.closest("a, button, [role='button'], input, textarea, .group")
      );
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", checkHover);
    container.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", checkHover);
      container.removeEventListener("mouseleave", leave);
    };
  }, [x, y, containerId]);

  return (
    <>
      {/* trailing blur */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
        style={{ x: blurX, y: blurY }}
      >
        <motion.div
          animate={{
            width: hovering ? 180 : 120,
            height: hovering ? 180 : 120,
            opacity: visible ? (hovering ? 0.5 : 0.3) : 0,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4555fd] blur-[60px]"
        />
      </motion.div>
    </>
  );
}
