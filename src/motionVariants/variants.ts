export const particleVariants = {
  visible: {
    y: [0, -15, 0],
    x: [0, Math.random() * 10 - 5, 0],
    transition: {
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      delay: Math.random() * 2,
      ease: "easeInOut",
    },
  },
};
export const paperParticleVariants = {
  initial: (item: any) => ({
    x: item.x + "vw",
    y: item.y + "vh",
    rotate: item.rotation,
    scale: item.scale,
    opacity: item.opacity,
  }),
  animate: {
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    opacity: 1,
  },
};

export const contentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
