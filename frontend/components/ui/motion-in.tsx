"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type MotionInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function MotionIn({ children, delay = 0, className }: MotionInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
