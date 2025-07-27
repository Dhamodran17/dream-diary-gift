import React from 'react';
import { motion } from 'framer-motion';

interface PinkStickersProps {
  variant?: 'butterflies' | 'hearts' | 'flowers' | 'quotes' | 'mixed';
  count?: number;
}

const PinkStickers: React.FC<PinkStickersProps> = ({ variant = 'mixed', count = 8 }) => {
  const butterflies = ['🦋', '🌸', '🧚‍♀️'];
  const hearts = ['💕', '💖', '💗', '💝', '💞'];
  const flowers = ['🌸', '🌺', '🌼', '🏵️', '🌷'];
  const quotes = ['✨', '⭐', '💫', '🌟'];
  
  const getStickers = () => {
    switch (variant) {
      case 'butterflies': return butterflies;
      case 'hearts': return hearts;
      case 'flowers': return flowers;  
      case 'quotes': return quotes;
      default: return [...butterflies, ...hearts, ...flowers, ...quotes];
    }
  };

  const stickers = getStickers();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(count)].map((_, i) => {
        const sticker = stickers[Math.floor(Math.random() * stickers.length)];
        const randomX = Math.random() * 80 + 10; // 10-90%
        const randomY = Math.random() * 80 + 10; // 10-90%
        const randomRotation = Math.random() * 30 - 15; // -15 to 15 degrees
        const randomScale = 0.8 + Math.random() * 0.4; // 0.8 to 1.2

        return (
          <motion.div
            key={i}
            className="absolute text-lg opacity-70"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
              transform: `rotate(${randomRotation}deg) scale(${randomScale})`,
            }}
            animate={{
              scale: [randomScale, randomScale * 1.1, randomScale],
              rotate: [randomRotation, randomRotation + 5, randomRotation],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            {sticker}
          </motion.div>
        );
      })}
    </div>
  );
};

export default PinkStickers;