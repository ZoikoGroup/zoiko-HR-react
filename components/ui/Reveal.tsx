"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  /**
   * How much of the element must be in view before it animates in. Lower this
   * for tall blocks (wide tables that stack on mobile, long lists) — at the
   * 0.25 default a 1500px element stays invisible until 375px of it is on
   * screen, which reads as a blank gap.
   */
  amount?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
  amount = 0.25,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
