import { useState } from "react";
import { ShoppingCart, Check } from "lucide-react";
import { cn } from "@lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  delay?: number;
}

export default function ProductCard({
  name,
  description,
  price,
  image,
  category,
  delay = 0,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
    // Add actual cart functionality here
  };

  return (
    <motion.div
      className={cn(
        "relative glass-card overflow-hidden transition-all duration-700 h-full flex flex-col transform-gpu",
        "dark:bg-slate-800/70 dark:backdrop-blur-lg dark:border-slate-700/50"
      )}
      style={{
        perspective: "1000px",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute top-4 left-4 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-clean/20 text-blue-clean dark:bg-blue-clean/30">
          {category}
        </span>
      </motion.div>

      <motion.div
        className="relative w-full h-64 overflow-hidden"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={{
          rotateY: isHovered ? 5 : 0,
          transition: { duration: 0.5 },
        }}
      >
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      <div className="flex flex-col flex-grow p-6">
        <motion.h3
          className="text-xl font-semibold mb-2 dark:text-white"
          animate={{ y: isHovered ? -4 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {name}
        </motion.h3>

        <p className="text-muted-foreground mb-4 flex-grow text-sm dark:text-slate-300">
          {description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <motion.span
            className="text-xl font-bold dark:text-white"
            animate={{
              color: isHovered ? "rgb(59, 130, 246)" : "currentColor",
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            ${price.toFixed(2)}
          </motion.span>

          <motion.button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={cn(
              "group p-3 rounded-full relative overflow-hidden",
              isAdded ? "bg-mint-clean text-white" : "bg-blue-clean text-white",
              "dark:bg-blue-clean/80 dark:hover:bg-blue-clean"
            )}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.span
              className="absolute inset-0 bg-white/20 dark:bg-white/10 origin-left"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            />

            <span className="relative z-10">
              <AnimatePresence mode="wait">
                {isAdded ? (
                  <motion.div
                    key="check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="cart"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-x-0 bottom-0 p-6"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.button
              onClick={handleAddToCart}
              disabled={isAdded}
              className={cn(
                "w-full py-3 rounded-full font-medium",
                "bg-blue-clean text-white hover:shadow-clean-glow",
                "dark:bg-blue-clean/90 dark:hover:bg-blue-clean",
                "flex items-center justify-center gap-2"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  Добавлена в корзину
                </>
              ) : (
                <>
                  <ShoppingCart className="w-4 h-4" />
                  Добавить в корзину
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-blue-clean/30"
                initial={{
                  opacity: 0,
                  scale: 0,
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                  width: `${5 + Math.random() * 8}px`,
                  height: `${5 + Math.random() * 8}px`,
                }}
                animate={{
                  opacity: [0, 0.7, 0],
                  scale: [0, 1, 0],
                  y: [0, -20 - Math.random() * 30],
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  duration: 2 + Math.random() * 1,
                  delay: i * 0.2,
                  ease: "easeOut",
                  repeat: Infinity,
                  repeatDelay: Math.random() * 2,
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
