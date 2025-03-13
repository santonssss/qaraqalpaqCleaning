import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { cn } from "@lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedElement from "./AnimatedElement";
import {
  contentVariants,
  paperParticleVariants,
  particleVariants,
} from "@motionVariants/variants";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cleaningElementRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [isReassembled, setIsReassembled] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const generateParticles = (count: number) => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
      rotation: Math.random() * 360,
      scale: 0.1 + Math.random() * 0.9,
      opacity: 0.1 + Math.random() * 0.9,
      width: 5 + Math.random() * 15,
      height: 5 + Math.random() * 15,
      delay: 0.3 + Math.random() * 0.7,
    }));
  };

  const headingParticles = generateParticles(150);
  const subheadingParticles = generateParticles(75);
  const buttonParticles = generateParticles(50);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsReassembled(true);
    }, 500);

    const timer2 = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    const handleScroll = () => {
      if (!heroRef.current || !cleaningElementRef.current) return;

      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const scrollPercentage = Math.min(scrollY / (heroHeight * 0.6), 1);

      cleaningElementRef.current.style.opacity = (
        1 - scrollPercentage
      ).toString();

      const translateY = scrollY * 0.5;
      heroRef.current.style.transform = `translateY(${translateY}px)`;

      if (headingRef.current) {
        const rotateX = scrollY * 0.02;
        headingRef.current.style.transform = `perspective(1000px) rotateX(${Math.min(
          rotateX,
          5
        )}deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const createCleanElements = () => {
    const elements = [];
    for (let i = 0; i < 10; i++) {
      elements.push(
        <div
          key={i}
          className={cn(
            "absolute w-16 h-16 bg-blue-clean-light dark:bg-blue-clean/30 rounded-full opacity-0",
            "animate-clean-sweep"
          )}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
            animationIterationCount: "infinite",
          }}
        />
      );
    }
    return elements;
  };

  return (
    <div
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      id="home"
    >
      <div className="absolute inset-0  dark:bg-slate-900 dark:bg-opacity-95 opacity-10 z-0"></div>

      <div
        ref={cleaningElementRef}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        {createCleanElements()}
      </div>

      <motion.div
        className="absolute -bottom-32  -left-32 w-96 h-96   dark:from-blue-clean/10 dark:to-mint-clean/10 rounded-full filter blur-3xl"
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96  from-mint-clean/20 to-blue-clean/20 dark:from-mint-clean/10 dark:to-blue-clean/10 rounded-full filter blur-3xl"
        animate={{
          rotate: -360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      />

      <div
        ref={heroRef}
        className="relative z-10 w-full section-container flex flex-col items-center justify-center text-center"
      >
        <AnimatePresence>
          {!showContent ? (
            <div className="relative">
              <div className="relative  h-20 md:h-28 w-full mb-6">
                {headingParticles.map((particle) => (
                  <motion.div
                    key={particle.id}
                    custom={particle}
                    className="absolute bg-blue-clean/80 dark:bg-blue-clean/60 rounded-md"
                    style={{
                      width: particle.width + "px",
                      height: particle.height + "px",
                      top: "50%",
                      left: "50%",
                      originX: 0.5,
                      originY: 0.5,
                    }}
                    variants={paperParticleVariants}
                    initial="initial"
                    animate={isReassembled ? "animate" : "initial"}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      mass: 1,
                      delay: particle.delay,
                    }}
                  />
                ))}
              </div>

              <div className="relative h-14 w-full max-w-3xl mx-auto mb-12">
                {subheadingParticles.map((particle) => (
                  <motion.div
                    key={particle.id}
                    custom={particle}
                    className="absolute bg-foreground/40 dark:bg-white/40 rounded-md"
                    style={{
                      width: particle.width / 1.2 + "px",
                      height: particle.height / 1.5 + "px",
                      top: "50%",
                      left: "50%",
                      originX: 0.5,
                      originY: 0.5,
                    }}
                    variants={paperParticleVariants}
                    initial="initial"
                    animate={isReassembled ? "animate" : "initial"}
                    transition={{
                      type: "spring",
                      stiffness: 90,
                      damping: 15,
                      mass: 1,
                      delay: particle.delay + 0.2,
                    }}
                  />
                ))}
              </div>

              <div className="relative h-14 w-full max-w-md mx-auto">
                {buttonParticles.map((particle) => (
                  <motion.div
                    key={particle.id}
                    custom={particle}
                    className="absolute bg-primary/50 dark:bg-primary/40 rounded-md"
                    style={{
                      width: particle.width * 1.5 + "px",
                      height: particle.height + "px",
                      top: "50%",
                      left: "50%",
                      originX: 0.5,
                      originY: 0.5,
                    }}
                    variants={paperParticleVariants}
                    initial="initial"
                    animate={isReassembled ? "animate" : "initial"}
                    transition={{
                      type: "spring",
                      stiffness: 80,
                      damping: 15,
                      mass: 1,
                      delay: particle.delay + 0.4,
                    }}
                  />
                ))}
              </div>
            </div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="w-full"
            >
              <AnimatedElement variant="slideUp" duration={0.7}>
                <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-clean/10 text-blue-clean dark:bg-blue-clean/20 dark:text-blue-clean-light rounded-full transform-gpu hover:scale-110 transition-transform duration-300">
                  Профессиональные услуги по уборке
                </span>
              </AnimatedElement>

              <AnimatedElement variant="scale" delay={0.1} duration={0.8}>
                <h1
                  ref={headingRef}
                  className="text-4xl md:text-6xl lg:text-display font-bold tracking-tight text-foreground dark:text-white transition-transform duration-300 mt-4"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  Преобразите свое пространство с помощью <br />
                  <span className="text-blue-clean relative inline-block">
                    Высококачественной уборкой
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-clean/30 dark:bg-blue-clean/50 rounded-full transform scale-x-100 origin-left"></span>
                  </span>
                </h1>
              </AnimatedElement>

              <AnimatedElement variant="fadeIn" delay={0.3} duration={0.7}>
                <p className="mt-6 text-xl text-foreground/70 dark:text-white/70 max-w-3xl mx-auto text-pretty">
                  Почувствуйте разницу благодаря нашей тщательной уборке услуги.
                  Мы привносим в ваше пространство искру, сияние и глоток
                  свежего воздуха
                </p>
              </AnimatedElement>

              <div className="mt-10 flex flex-col sm:flex-row gap-5">
                <AnimatedElement variant="slideUp" delay={0.5} duration={0.7}>
                  <a
                    href="#services"
                    className="btn-primary group relative overflow-hidden"
                  >
                    <span className="absolute inset-0 w-full h-full bg-white/20 dark:bg-white/10 transform -skew-x-12 -translate-x-full transition-transform ease-out duration-700 group-hover:translate-x-0"></span>
                    <span className="relative z-10 flex items-center">
                      Ознакомьтесь с нашими Услугами
                      <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform ease-elastic duration-500">
                        →
                      </span>
                    </span>
                  </a>
                </AnimatedElement>

                <AnimatedElement variant="slideUp" delay={0.6} duration={0.7}>
                  <a href="#contact" className="btn-outline group">
                    <span className="relative z-10 flex items-center">
                      Получите бесплатное предложение
                      <span className="ml-2 inline-block opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all ease-elastic duration-500">
                        →
                      </span>
                    </span>
                  </a>
                </AnimatedElement>
              </div>

              <AnimatedElement
                variant="fadeIn"
                delay={0.8}
                duration={0.7}
                className="absolute bottom-10 left-0 right-0 flex justify-center"
              >
                <a
                  href="#services"
                  className="text-foreground/50 hover:text-foreground dark:text-white/50 dark:hover:text-white transition-colors flex flex-col items-center gap-2"
                >
                  <span className="text-sm font-medium">
                    Прокрутите страницу, чтобы узнать
                  </span>
                  <motion.div
                    animate={{
                      y: [0, 8, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowDown className="w-5 h-5" />
                  </motion.div>
                </a>
              </AnimatedElement>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={particleVariants}
              initial="hidden"
              animate="visible"
              className="absolute rounded-full bg-blue-clean/20 dark:bg-blue-clean/10"
              style={{
                width: `${3 + Math.random() * 6}px`,
                height: `${3 + Math.random() * 6}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
