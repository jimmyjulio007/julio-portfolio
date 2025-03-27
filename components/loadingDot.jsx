// components/LoadingDots.js
import { motion } from 'framer-motion';
import React from 'react';

// Variants for the parent container to stagger child animations
const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 0.3,
      repeat: Infinity,
      repeatDelay: 0.5,
    },
  },
};

// Variants for each dot: fading in and out in a loop
const dotVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: [0, 1, 0],
    transition: { duration: 1, ease: 'easeInOut', repeat: Infinity },
  },
};

const LoadingDots = () => {
  // Split the "..." string into an array of individual dots
  const dots = '...'.split('');

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      style={{ display: 'flex' }}
    >
      {dots.map((dot, index) => (
        <motion.span
          key={index}
          variants={dotVariants}
          style={{ margin: '0 4px', fontSize: '2rem' }}
        >
          {dot}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LoadingDots;
