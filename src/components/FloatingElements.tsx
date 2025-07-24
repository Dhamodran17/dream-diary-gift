import React from 'react';
import { motion } from 'framer-motion';
import milkBear from '@/assets/milk-bear.png';
import mochaBear from '@/assets/mocha-bear.png';

const FloatingElements = () => {
  const hearts = ['💕', '💖', '💗', '💝', '💘', '🌸', '✨', '🌟', '🥛', '🤎', '🧋', '☕', '🍫'];
  const milkMochaEmojis = ['🥛', '🤎', '🧋', '☕', '🍫', '🍰', '🧸'];
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating Milk & Mocha bears */}
      <motion.img
        src={milkBear}
        alt="Milk Bear"
        className="absolute w-16 h-16 top-10 left-10"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.img
        src={mochaBear}
        alt="Mocha Bear"
        className="absolute w-16 h-16 top-20 right-16"
        animate={{
          y: [0, -15, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Floating hearts, sparkles, and milk/mocha elements */}
      {hearts.map((emoji, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Additional floating Milk & Mocha themed elements */}
      {milkMochaEmojis.map((emoji, index) => (
        <motion.div
          key={`mocha-${index}`}
          className="absolute text-xl opacity-70"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, 10, -10, 0],
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        >
          {emoji}
        </motion.div>
      ))}

      {/* Sparkle overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-sparkle-pink/10 via-transparent to-sparkle-lavender/10 animate-sparkle" />
    </div>
  );
};

export default FloatingElements;