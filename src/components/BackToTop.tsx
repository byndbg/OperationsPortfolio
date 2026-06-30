import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      // Show when scrolled past 400px (roughly past hero section)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="back-to-top"
          id="back-to-top-button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-24 z-50 p-3.5 
                     bg-[#FFFFFF] dark:bg-[#1A1A1A] 
                     text-[#1A1A1A] dark:text-[#F3F2F0] 
                     border border-[#1A1A1A]/10 dark:border-white/10 
                     rounded-full shadow-lg hover:shadow-xl
                     cursor-pointer flex items-center justify-center 
                     transition-shadow duration-300 group focus:outline-hidden"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ArrowUp 
            size={18} 
            className="transition-transform duration-300 group-hover:-translate-y-0.5" 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
