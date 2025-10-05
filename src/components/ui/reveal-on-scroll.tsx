"use client";

import { motion, type Variants } from "framer-motion";
import { PropsWithChildren } from "react";

export type RevealOnScrollProps = PropsWithChildren<{
  delay?: number;
  y?: number; // initial translateY
  once?: boolean;
  duration?: number;
}>;

const variants: Variants = {
  hidden: (custom: { y: number }) => ({ opacity: 0, y: custom.y }),
  visible: { opacity: 1, y: 0 },
};

export const RevealOnScroll = ({
  children,
  delay = 0,
  y = 64,
  once = true,
  duration = 0.8,
}: RevealOnScrollProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-20% 0px -10% 0px", amount: 0.2 }}
      variants={variants}
      custom={{ y }}
      transition={{ duration, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;