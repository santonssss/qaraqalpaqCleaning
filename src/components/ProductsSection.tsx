import { useState } from "react";
import { Filter, ChevronDown } from "lucide-react";
import { cn } from "@lib/utils";
import ProductCard from "./ProductCard";
import AnimatedElement from "./AnimatedElement";
import { motion } from "framer-motion";
import { categories, products } from "@data/data";

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts =
    selectedCategory === "Все"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    }),
  };

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0  z-0"></div>

      <motion.div
        className="absolute top-1/3 right-5 w-64 h-64 bg-blue-clean-light dark:bg-blue-clean/20 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.2,
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-5 w-96 h-96 bg-mint-clean-light dark:bg-blue-clean/10 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      <div className="section-container relative z-10">
        <AnimatedElement
          variant="slideUp"
          duration={0.7}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-clean/10 text-blue-clean dark:bg-blue-clean/20 dark:text-blue-clean-light rounded-full mb-4">
            Наши продукты
          </span>
          <h2 className="section-title dark:text-white">
            Чистящие средства премиум-класса
          </h2>
          <p className="text-lg text-muted-foreground dark:text-slate-300">
            Откройте для себя наш ассортимент профессиональные чистящие
            средства, предназначенные чтобы сделать ваше пространство безупречно
            с минимальными усилиями.
          </p>
        </AnimatedElement>

        <div className="mb-12">
          <div className="relative md:hidden">
            <motion.button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm"
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                {selectedCategory}
              </span>
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform",
                  isFilterOpen && "rotate-180"
                )}
              />
            </motion.button>

            {isFilterOpen && (
              <motion.div
                className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-slate-800 rounded-lg shadow-lg z-10 overflow-hidden"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-3 transition-colors",
                      selectedCategory === category
                        ? "bg-blue-clean/10 text-blue-clean dark:bg-blue-clean/20"
                        : "hover:bg-muted"
                    )}
                    whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>

          <div className="hidden md:flex justify-center space-x-2 mb-8">
            {categories.map((category, i) => (
              <motion.button
                key={category}
                custom={i}
                variants={categoryVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-300",
                  selectedCategory === category
                    ? "bg-blue-clean text-white shadow-clean-glow dark:bg-blue-clean/90"
                    : "bg-white/70 hover:bg-white dark:bg-slate-800 dark:hover:bg-slate-700"
                )}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <AnimatedElement
              key={product.id}
              variant={
                index % 3 === 0
                  ? "slideUp"
                  : index % 3 === 1
                  ? "scale"
                  : "fadeIn"
              }
              delay={index * 0.1}
              duration={0.7}
            >
              <ProductCard
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
                category={product.category}
              />
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
