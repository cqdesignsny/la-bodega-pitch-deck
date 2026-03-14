"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-dark via-red to-red-light origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
