import GlobalCleaningEffect from "@components/GlobalCleaningEffect";
import Header from "@components/Header";
import Hero from "@components/Hero";
import ProductsSection from "@components/ProductsSection";
import ServicesSection from "@components/ServicesSection";
import { AnimatePresence, motion } from "framer-motion";
const Index = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <GlobalCleaningEffect />
        <Hero />
        <ServicesSection />
        <ProductsSection />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
