'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AnimatedQuote() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Loop: hide, then show, every X seconds
    const animationDuration = 3500; // time in ms, adjust as needed
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => setIsVisible(true), 500); // brief hide between loops
    }, animationDuration);
    return () => clearInterval(intervalId);
  }, []);

  const quoteText = "Computers are good at following instructions, but not at reading your mind.";
  const author = "Donald Knuth";

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center space-y-6"
      >
        <motion.p
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-secondary">"</span>
          {quoteText.split(' ').map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.05 * index + 0.3, duration: 0.5 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
          <span className="text-secondary">"</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-4"
        >
          <p className="text-lg md:text-xl text-secondary font-semibold">— {author}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
