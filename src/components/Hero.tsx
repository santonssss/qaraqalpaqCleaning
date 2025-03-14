import { ArrowDown } from "lucide-react";
import { cn } from "@lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedElement from "./AnimatedElement";
import { contentVariants, particleVariants } from "@motionVariants/variants";

export default function Hero() {
  const createCleanElements = () => {
    const elements = [];
    for (let i = 0; i < 30; i++) {
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
      className=" md:py-24 relative min-h-screen  flex items-center pt-16"
      id="home"
    >
      <div className="absolute inset-0  dark:bg-slate-900 dark:bg-opacity-95 opacity-10 z-0"></div>

      <div className="absolute inset-0 z-0">{createCleanElements()}</div>

      <div className="relative z-10 w-full section-container flex flex-col items-center justify-center text-center">
        <AnimatePresence>
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
                Мы привносим в ваше пространство искру, сияние и глоток свежего
                воздуха
              </p>
            </AnimatedElement>

            <div className="mt-10 flex flex-col justify-center sm:flex-row gap-5">
              <AnimatedElement variant="slideUp" delay={0.5} duration={0.7}>
                <a
                  href="#services"
                  className="btn-primary  group relative overflow-hidden"
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
              className="absolute bottom-0 left-0 right-0 flex justify-center"
            >
              <a
                href="#services"
                className="text-foreground/50 hover:text-foreground dark:text-white/50 dark:hover:text-white transition-colors flex flex-col items-center "
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
