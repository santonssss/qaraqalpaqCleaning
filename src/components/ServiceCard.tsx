import { useState } from "react";
import { cn } from "@lib/utils";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc?: string;
  delay?: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  imageSrc,
  delay = 0,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="glass-card  glass-card-hover p-6 md:p-8 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delay * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{
        y: -5,
        boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
        transition: { duration: 0.3 },
      }}
    >
      <motion.div
        className={cn(
          "w-16 h-16 flex items-center justify-center rounded-2xl mb-6",
          "bg-blue-clean-light text-blue-clean",
          "transition-all duration-500",
          isHovered && "bg-blue-clean text-white"
        )}
        animate={
          isHovered ? { rotate: 6, scale: 1.1 } : { rotate: 0, scale: 1 }
        }
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {icon}
      </motion.div>

      <h3 className="text-xl font-semibold mb-3 dark:text-white">{title}</h3>

      <p className="text-muted-foreground mb-6 flex-grow dark:text-white/70">
        {description}
      </p>

      {imageSrc && (
        <motion.div
          className="mt-4 w-full h-40 rounded-xl overflow-hidden"
          animate={{
            opacity: isHovered ? 1 : 0.8,
            scale: isHovered ? 1.02 : 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.7 }}
          />
        </motion.div>
      )}

      <div className="mt-6">
        <motion.a
          href="#contact"
          className={cn(
            "inline-flex items-center text-blue-clean font-medium",
            "transition-all duration-300",
            "after:content-[''] after:ml-2 after:inline-block after:w-4 after:h-[2px] after:bg-blue-clean"
          )}
          animate={{
            x: isHovered ? 5 : 0,
          }}
          whileHover={{ x: 5 }}
        >
          <span>Заказать услугу</span>
          <motion.span
            animate={{ width: isHovered ? 24 : 16 }}
            className="ml-2 inline-block h-[2px] bg-blue-clean"
          />
        </motion.a>
      </div>
    </motion.div>
  );
}
