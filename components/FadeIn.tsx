import React, { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "none";
  /** Si true, déclenche l'apparition plus tôt (utile pour gros blocs) */
  triggerEarly?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  className = "",
  direction = "up",
  triggerEarly = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      {
        threshold: triggerEarly ? 0.05 : 0.12,
        rootMargin: triggerEarly ? "0px 0px -35% 0px" : "0px 0px -15% 0px",
      }
    );

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [triggerEarly]);

  const baseOffset = direction === "up" ? "translate-y-6" : "";
  const stateClasses = isVisible
    ? "opacity-100 translate-y-0 blur-0"
    : `opacity-0 ${baseOffset} blur-[1px]`;

  return (
    <div
      ref={domRef}
      className={[
        "transition-all",
        "duration-[1100ms]",
        "ease-[cubic-bezier(.22,.61,.36,1)]",
        "will-change-[opacity,transform]",
        stateClasses,
        className,
      ].join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
