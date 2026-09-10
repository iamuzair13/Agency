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

    // Cache the container's bounding rect so we don't force a synchronous
    // layout reflow (getBoundingClientRect) on every single mousemove.
    // Refresh the cache on scroll / resize when the rect could have changed.
    let rect = container.getBoundingClientRect();

    const refreshRect = () => {
      rect = container.getBoundingClientRect();
    };

    window.addEventListener("scroll", refreshRect, { passive: true });
    window.addEventListener("resize", refreshRect);

    const onMove = (e: MouseEvent) => {
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      if (inside) {
        x.set(e.clientX);
        y.set(e.clientY);
        setVisible(true);
        // Check hover state in the same handler no second listener needed.
        const el = e.target as HTMLElement;
        setHovering(
          !!el.closest("a, button, [role='button'], input, textarea, .group")
        );
      } else {
        setVisible(false);
      }
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    container.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("scroll", refreshRect);
      window.removeEventListener("resize", refreshRect);
      window.removeEventListener("mousemove", onMove);
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
