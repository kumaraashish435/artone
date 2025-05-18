// components/AnimatedText.tsx
import React from 'react';
import { motion } from 'framer-motion';

type AnimatedTextProps = {
  lines: string[];
  className?: string;
};

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ lines, className = '' }) => {
  return (
    <motion.div
      className={`text-black font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      {lines.map((line, index) => (
        <motion.div key={index} variants={lineVariants}>
          {line}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
