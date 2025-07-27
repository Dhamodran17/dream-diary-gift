import React from 'react';
import { motion } from 'framer-motion';

interface CollageLayoutProps {
  images: string[];
  layout: 'grid-4' | 'grid-6' | 'masonry' | 'scattered' | 'polaroid' | 'heart-shape';
  className?: string;
}

const CollageLayouts: React.FC<CollageLayoutProps> = ({ images, layout, className = '' }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const renderGrid4 = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-2 gap-3 p-4"
    >
      {images.slice(0, 4).map((img, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotate: 1 }}
          className="relative group"
        >
          <img
            src={img}
            alt={`Memory ${index + 1}`}
            className="w-full h-24 object-cover rounded-lg shadow-md border-2 border-white"
          />
          <div className="absolute -top-1 -right-1 w-4 h-3 bg-gradient-to-br from-yellow-200 to-yellow-300 opacity-80 transform rotate-45 rounded-sm"></div>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderGrid6 = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-3 gap-2 p-4"
    >
      {images.slice(0, 6).map((img, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.08, rotate: 2 }}
          className="relative"
        >
          <img
            src={img}
            alt={`Memory ${index + 1}`}
            className="w-full h-20 object-cover rounded-md shadow-sm border border-white"
          />
          <div className="absolute -top-0.5 -right-0.5 w-3 h-2 bg-gradient-to-br from-pink-200 to-pink-300 opacity-70 transform rotate-45 rounded-sm"></div>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderMasonry = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="columns-2 gap-3 p-4"
    >
      {images.slice(0, 6).map((img, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.03, rotate: 1 }}
          className={`relative mb-3 break-inside-avoid ${
            index % 3 === 0 ? 'h-32' : index % 3 === 1 ? 'h-24' : 'h-28'
          }`}
        >
          <img
            src={img}
            alt={`Memory ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-md border-2 border-white"
          />
          <div className="absolute -top-1 -right-1 w-4 h-3 bg-gradient-to-br from-blue-200 to-blue-300 opacity-80 transform rotate-45 rounded-sm"></div>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderScattered = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative h-80 p-4"
    >
      {images.slice(0, 5).map((img, index) => {
        const positions = [
          { top: '10%', left: '10%', rotate: '-5deg', size: 'w-16 h-16' },
          { top: '20%', right: '15%', rotate: '8deg', size: 'w-20 h-16' },
          { top: '50%', left: '20%', rotate: '-3deg', size: 'w-18 h-20' },
          { bottom: '25%', right: '20%', rotate: '6deg', size: 'w-16 h-18' },
          { bottom: '15%', left: '40%', rotate: '-8deg', size: 'w-20 h-16' }
        ];
        const pos = positions[index];
        
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
            className={`absolute ${pos.size} ${Object.entries(pos).filter(([key]) => ['top', 'bottom', 'left', 'right'].includes(key)).map(([key, value]) => `${key}-[${value}]`).join(' ')}`}
            style={{ transform: pos.rotate }}
          >
            <img
              src={img}
              alt={`Memory ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-white"
            />
            <div className="absolute -top-1 -right-1 w-3 h-2 bg-gradient-to-br from-green-200 to-green-300 opacity-80 transform rotate-45 rounded-sm"></div>
          </motion.div>
        );
      })}
    </motion.div>
  );

  const renderPolaroid = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap justify-center gap-4 p-4"
    >
      {images.slice(0, 4).map((img, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotate: 0 }}
          className="relative bg-white p-2 pb-6 shadow-lg transform"
          style={{ rotate: `${(index % 2 === 0 ? 1 : -1) * (index + 1) * 3}deg` }}
        >
          <img
            src={img}
            alt={`Memory ${index + 1}`}
            className="w-20 h-20 object-cover"
          />
          <div className="absolute bottom-1 left-2 right-2 text-xs font-cute text-center text-gray-600">
            💖 Memory {index + 1}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );

  const renderHeartShape = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative h-80 p-4"
    >
      {images.slice(0, 7).map((img, index) => {
        const heartPositions = [
          { top: '15%', left: '25%', size: 'w-12 h-12' }, // top left curve
          { top: '15%', right: '25%', size: 'w-12 h-12' }, // top right curve
          { top: '35%', left: '35%', size: 'w-14 h-14' }, // left side
          { top: '35%', right: '35%', size: 'w-14 h-14' }, // right side
          { top: '55%', left: '42%', size: 'w-16 h-16' }, // center
          { bottom: '35%', left: '38%', size: 'w-12 h-12' }, // bottom left
          { bottom: '15%', left: '45%', size: 'w-10 h-10' } // bottom point
        ];
        const pos = heartPositions[index];
        
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.15, zIndex: 10 }}
            className={`absolute ${pos.size}`}
            style={{ 
              top: pos.top, 
              bottom: pos.bottom, 
              left: pos.left, 
              right: pos.right 
            }}
          >
            <img
              src={img}
              alt={`Memory ${index + 1}`}
              className="w-full h-full object-cover rounded-full shadow-md border-2 border-pink-200"
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-pink-300 to-red-300 rounded-full opacity-80"></div>
          </motion.div>
        );
      })}
    </motion.div>
  );

  const layouts = {
    'grid-4': renderGrid4,
    'grid-6': renderGrid6,
    'masonry': renderMasonry,
    'scattered': renderScattered,
    'polaroid': renderPolaroid,
    'heart-shape': renderHeartShape
  };

  return (
    <div className={`w-full ${className}`}>
      {layouts[layout]()}
    </div>
  );
};

export default CollageLayouts;