import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

type AnimationDirection = "up" | "down" | "left" | "right" | "scale" | "fade";

interface UseScrollAnimationProps {
  direction?: AnimationDirection;
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

export const useScrollAnimation = ({
  direction = "up",
  duration = 0.8,
  delay = 0,
  threshold = 0.2,
  once = true,
}: UseScrollAnimationProps = {}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const [hasAnimated, setHasAnimated] = useState(false);

  const getAnimationProps = () => {
    let initial = {};

    switch (direction) {
      case "up":
        initial = { opacity: 0, y: 50 };
        break;
      case "down":
        initial = { opacity: 0, y: -50 };
        break;
      case "left":
        initial = { opacity: 0, x: 50 };
        break;
      case "right":
        initial = { opacity: 0, x: -50 };
        break;
      case "scale":
        initial = { opacity: 0, scale: 0.9 };
        break;
      case "fade":
      default:
        initial = { opacity: 0 };
        break;
    }

    return {
      initial,
      animate: isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : initial,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    };
  };

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return { ref, animationProps: getAnimationProps(), isInView, hasAnimated };
};
