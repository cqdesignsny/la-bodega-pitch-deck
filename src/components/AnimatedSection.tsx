"use client";

import { motion, useInView, useMotionValue, useSpring, type Variants } from "framer-motion";
import { type ReactNode, useEffect, useRef } from "react";

/* ─── Variants ─── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeScale: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Basic fade-in on scroll ─── */
export function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger container ─── */
export function StaggerGrid({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger child with hover lift ─── */
export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeScale}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Animated counter for stat numbers ─── */
export function AnimatedCounter({
  value,
  suffix = "",
  className = "",
}: {
  value: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 2000, bounce: 0 });
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, motionVal, value]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest) + suffix;
      }
    });
    return unsubscribe;
  }, [spring, suffix]);

  return <span ref={ref} className={className}>0{suffix}</span>;
}

/* ─── Animated bar that fills on scroll ─── */
export function AnimatedBar({
  width,
  className = "",
}: {
  width: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="h-2 rounded bg-black/[0.06] overflow-hidden">
      <motion.div
        className={`h-full rounded bg-gradient-to-r from-red-dark to-red ${className}`}
        initial={{ width: 0 }}
        animate={inView ? { width: `${width}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
      />
    </div>
  );
}

/* ─── Timeline dot with pulse ─── */
export function TimelineDot() {
  return (
    <div className="absolute -left-7 top-1 w-[18px] h-[18px] rounded-full bg-red border-[3px] border-offwhite">
      <motion.div
        className="absolute inset-0 rounded-full bg-red"
        initial={{ scale: 1, opacity: 0.4 }}
        whileInView={{
          scale: [1, 1.8, 1],
          opacity: [0.4, 0, 0.4],
        }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  );
}

/* ─── Scroll progress bar ─── */
export function ScrollProgress() {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-red origin-left z-50"
      style={{ scaleX: 0 }}
      initial={{ scaleX: 0 }}
      // We'll use CSS for this since it's simpler
    />
  );
}
