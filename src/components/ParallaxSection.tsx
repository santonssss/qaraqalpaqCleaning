import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedElement from "./AnimatedElement";
import { benefits } from "@data/data";

export default function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rightY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };
  const renderBenefits = benefits.map((benefit, index) => (
    <motion.div
      key={index}
      className="flex items-start gap-3"
      variants={itemVariants}
    >
      <CheckCircle className="w-5 h-5 text-blue-clean mt-0.5 flex-shrink-0" />
      <span className="dark:text-white/90">{benefit}</span>
    </motion.div>
  ));

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0  from-white to-blue-clean/5 dark:from-slate-900 dark:to-blue-clean/5 z-0"
        style={{ opacity }}
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            ref={leftContentRef}
            className="lg:pr-8"
            style={{
              y: leftY,
              scale,
            }}
          >
            <AnimatedElement variant="slideRight" duration={0.7}>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-clean/10 text-blue-clean rounded-full mb-4">
                Почему Вы выбрали именно Нас
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-6 dark:text-white">
                Ощутите разницу благодаря нашему премиальному подходу к уборке
              </h2>
              <p className="text-lg text-muted-foreground mb-8 dark:text-white/70">
                В Qaraqalpaq Cleaning мы верим, что чистая окружающая среда
                ведет к к ясному уму и здоровой жизни. Наша команда
                профессионалов стремится обеспечить исключительную уборку
                услуги, которые преобразят ваше пространство.
              </p>
            </AnimatedElement>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {renderBenefits}
            </motion.div>

            <AnimatedElement
              variant="fadeIn"
              delay={0.6}
              duration={0.7}
              className="mt-10"
            >
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Запланируйте уборку
              </motion.a>
            </AnimatedElement>
          </motion.div>

          <motion.div
            ref={rightContentRef}
            className="relative"
            style={{ y: rightY }}
          >
            <motion.div
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-clean-card"
              whileInView={{
                opacity: [0, 1],
                scale: [0.9, 1],
                rotate: [-2, 0],
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional cleaning"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              className="glass-card absolute -bottom-6 -right-6 p-6 max-w-xs"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-clean rounded-full flex items-center justify-center text-white">
                  <span className="text-lg font-bold">10+</span>
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white">
                    Многолетний опыт работы
                  </h4>
                  <p className="text-sm text-muted-foreground dark:text-white/60">
                    Профессиональная уборка
                  </p>
                </div>
              </div>
              <div className="h-1 w-full bg-muted rounded-full mb-3 dark:bg-slate-700">
                <motion.div
                  className="h-1 bg-blue-clean  rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "95%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                />
              </div>
              <p className="text-sm dark:text-white/80">
                Уровень удовлетворенности клиентов: 95%
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
