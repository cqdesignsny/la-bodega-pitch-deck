"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logoLight } from "@/lib/images";

const sections = [
  { id: "cover", label: "Cover", num: "01" },
  { id: "vision", label: "Vision", num: "02" },
  { id: "problem", label: "Problem", num: "03" },
  { id: "foundation", label: "Foundation", num: "04" },
  { id: "clients", label: "Clients", num: "05" },
  { id: "solution", label: "Solution", num: "06" },
  { id: "music", label: "Music", num: "07" },
  { id: "dance", label: "Dance + AI", num: "08" },
  { id: "summer", label: "Summer", num: "09" },
  { id: "timeline", label: "Timeline", num: "10" },
  { id: "community", label: "Community", num: "11" },
  { id: "events", label: "Events", num: "12" },
  { id: "boroughs", label: "Boroughs", num: "13" },
  { id: "revenue", label: "Revenue", num: "14" },
  { id: "investment", label: "Investment", num: "15" },
  { id: "team", label: "Team", num: "16" },
  { id: "contact", label: "Contact", num: "17" },
];

export function StickyNav() {
  const [active, setActive] = useState("cover");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  // Track scroll for background opacity
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  }, []);

  const currentSection = sections.find((s) => s.id === active);

  return (
    <>
      {/* ─── Desktop / Tablet nav bar ─── */}
      <nav
        className={`fixed top-[3px] left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-dark/90 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-4 flex items-center h-12 gap-1">
          {/* Logo */}
          <button
            onClick={() => scrollTo("cover")}
            className="shrink-0 mr-2 opacity-80 hover:opacity-100 transition-opacity"
          >
            <img src={logoLight} alt="Home" className="h-6" />
          </button>

          {/* Desktop pills - hidden on small screens */}
          <div className="hidden md:flex items-center gap-0.5 overflow-x-auto scrollbar-hide flex-1">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`relative px-2.5 py-1.5 rounded-full font-mono text-[9px] tracking-[1px] uppercase whitespace-nowrap transition-all duration-200 ${
                  active === s.id
                    ? "text-white"
                    : "text-gray-light hover:text-white"
                }`}
              >
                {active === s.id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-red rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{s.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile: current section + hamburger */}
          <div className="flex md:hidden items-center gap-3 ml-auto">
            <span className="font-mono text-[10px] tracking-[2px] uppercase text-red">
              {currentSection?.num} &middot; {currentSection?.label}
            </span>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
              aria-label="Navigation menu"
            >
              <motion.span
                className="block w-5 h-[2px] bg-red rounded"
                animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-[2px] bg-red rounded"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-[2px] bg-red rounded"
                animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Mobile dropdown menu ─── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-30 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-[51px] left-0 right-0 z-30 md:hidden bg-dark2/95 backdrop-blur-md border-b border-white/5 max-h-[70vh] overflow-y-auto"
            >
              <div className="grid grid-cols-2 gap-1 p-3">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`flex items-center gap-2.5 px-3.5 py-3 rounded-lg text-left transition-all duration-200 ${
                      active === s.id
                        ? "bg-red/15 border border-red/30"
                        : "border border-transparent hover:bg-white/5"
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] tracking-[1px] ${
                        active === s.id ? "text-red" : "text-gray-light"
                      }`}
                    >
                      {s.num}
                    </span>
                    <span
                      className={`text-[13px] font-medium ${
                        active === s.id ? "text-white" : "text-gray-lighter"
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
