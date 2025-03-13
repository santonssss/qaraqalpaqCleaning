import { motion } from "framer-motion";
import { JSX, ReactNode, forwardRef } from "react";
import { useScrollAnimation } from "@hooks/useScrollAnimation";
import { cn } from "@lib/utils";

type AnimationVariant =
  | "fadeIn"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scale"
  | "rotate";

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

const variantMap = {
  fadeIn: "fade",
  slideUp: "up",
  slideDown: "down",
  slideLeft: "left",
  slideRight: "right",
  scale: "scale",
  rotate: "scale",
} as const;

const AnimatedElement = forwardRef<HTMLDivElement, AnimatedElementProps>(
  (
    {
      children,
      className,
      variant = "fadeIn",
      delay = 0,
      duration = 0.8,
      threshold = 0.2,
      once = true,
      as = "div",
    },
    forwardedRef
  ) => {
    const { ref, animationProps, isInView } = useScrollAnimation({
      direction: variantMap[variant],
      delay,
      duration,
      threshold,
      once,
    });

    const rotateProps =
      variant === "rotate"
        ? {
            initial: { opacity: 0, rotate: -5, scale: 0.95 },
            animate: isInView
              ? { opacity: 1, rotate: 0, scale: 1 }
              : { opacity: 0, rotate: -5, scale: 0.95 },
            transition: {
              duration,
              delay,
              ease: [0.25, 0.1, 0.25, 1],
            },
          }
        : {};

    const Component = motion[as as keyof typeof motion] as any;

    const combinedRef = (node: HTMLDivElement) => {
      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
      if (ref.current !== node) {
        ref.current = node;
      }
    };

    return (
      <Component
        ref={combinedRef}
        className={cn(className)}
        {...(variant === "rotate" ? rotateProps : animationProps)}
      >
        {children}
      </Component>
    );
  }
);

AnimatedElement.displayName = "AnimatedElement";

export default AnimatedElement;
