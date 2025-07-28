"use client"
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SpinningText } from "./magicui/spinning-text";

export const PageLoader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        >
          <SpinningText
            reverse className="text-4xl" duration={4} radius={6}
          >
            learn more • earn more • grow more •
          </SpinningText>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
