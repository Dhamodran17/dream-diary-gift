import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingTooltipProps {
  show: boolean;
  onFirstInteraction: () => void;
}

const FloatingTooltip: React.FC<FloatingTooltipProps> = ({ show, onFirstInteraction }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="bg-gradient-to-r from-heart-pink to-primary text-white px-4 py-2 rounded-full text-sm font-diary font-medium shadow-lg relative">
            <span role="img" aria-label="Left arrow">←</span> Double-tap page edges to turn <span role="img" aria-label="Right arrow">→</span>
            
            {/* Tooltip arrow  */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary"></div>
            
            {/* Gentle sparkle animation */}
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-sparkle-peach rounded-full animate-sparkle"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingTooltip;