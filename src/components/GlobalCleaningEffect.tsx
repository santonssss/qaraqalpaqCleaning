import { useEffect, useRef } from "react";
import { cn } from "@lib/utils";

export default function GlobalCleaningEffect() {
  const cleaningElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!cleaningElementRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollPercentage = Math.min(scrollY / (windowHeight * 2), 0.7);
      cleaningElementRef.current.style.opacity = Math.max(
        0.3,
        1 - scrollPercentage
      ).toString();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const createCleanElements = () => {
    const elements = [];
    const numElements = window.innerWidth < 768 ? 10 : 20;
    for (let i = 0; i < numElements; i++) {
      elements.push(
        <div
          key={i}
          className={cn(
            "absolute rounded-full opacity-0",
            "animate-clean-sweep"
          )}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${12 + Math.random() * 35}px`,
            height: `${12 + Math.random() * 35}px`,
            background: `radial-gradient(circle, rgba(79, 173, 202, ${
              0.4 + Math.random() * 0.5
            }) 0%, rgba(117, 201, 183, ${0.3 + Math.random() * 0.6}) 100%)`,
            boxShadow: `0 0 20px 5px rgba(79, 173, 202, ${
              0.2 + Math.random() * 0.3
            })`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + Math.random() * 5}s`,
            animationIterationCount: "infinite",
            filter: `blur(${Math.random() * 2}px)`,
          }}
        />
      );
    }
    return elements;
  };

  return (
    <div
      ref={cleaningElementRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {createCleanElements()}
    </div>
  );
}
