import { type ReactNode } from "react";

type SlideVariant = "dark" | "light";

export function Slide({
  children,
  variant = "dark",
  number,
  className = "",
  center = false,
}: {
  children: ReactNode;
  variant?: SlideVariant;
  number: number;
  className?: string;
  center?: boolean;
}) {
  const bg = variant === "dark" ? "bg-dark text-white" : "bg-offwhite text-dark";
  const alignment = center ? "items-center text-center" : "";

  return (
    <section
      className={`relative min-h-screen w-full max-w-[100vw] overflow-hidden flex flex-col justify-center px-5 py-16 sm:px-[clamp(20px,6vw,100px)] 2xl:px-36 3xl:px-52 ${bg} ${alignment} ${className}`}
    >
      {children}
      <div className="absolute bottom-5 right-5 sm:right-[clamp(20px,4vw,60px)] font-mono text-[11px] text-red opacity-50 tracking-[2px]">
        {String(number).padStart(2, "0")} / 17
      </div>
    </section>
  );
}

export function SlideTag({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-[11px] tracking-[4px] uppercase text-red mb-5 font-medium">
      {children}
    </div>
  );
}

export function SectionTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-display font-extrabold leading-[1.1] text-[clamp(28px,4vw,48px)] mb-3 ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionSub({
  children,
  variant = "dark",
}: {
  children: ReactNode;
  variant?: SlideVariant;
}) {
  const color = variant === "dark" ? "text-gray-lighter" : "text-gray";
  return (
    <p
      className={`text-[clamp(16px,1.8vw,20px)] font-normal mb-9 max-w-[750px] leading-relaxed ${color}`}
    >
      {children}
    </p>
  );
}
