import Header from "@components/Header";
import { AnimatePresence, motion } from "framer-motion";
const Index = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen overflow-x-hidden dark:bg-slate-900 dark:text-white"
      >
        <Header />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
