import ServiceCard from "./ServiceCard";
import AnimatedElement from "./AnimatedElement";
import { motion } from "framer-motion";
import { services } from "@data/data";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0  z-0"></div>

      <div className="section-container relative z-10">
        <AnimatedElement
          variant="fadeIn"
          duration={0.8}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-clean/10 text-blue-clean rounded-full mb-4">
            Наши услуги
          </span>
          <h2 className="section-title">Комплексные решения для очистки</h2>
          <p className="text-lg text-muted-foreground">
            Мы предлагаем широкий спектр профессиональных услуг по уборке,
            направленных на удовлетворение ваших конкретных потребностей и
            превосходящих ваши ожидания.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <AnimatedElement
                key={index}
                variant={index % 2 === 0 ? "slideLeft" : "slideRight"}
                delay={index * 0.1}
                duration={0.8}
              >
                <ServiceCard
                  icon={<Icon className="w-8 h-8" />}
                  title={service.title}
                  description={service.description}
                  imageSrc={service.imageSrc}
                />
              </AnimatedElement>
            );
          })}
        </div>
      </div>
    </section>
  );
}
