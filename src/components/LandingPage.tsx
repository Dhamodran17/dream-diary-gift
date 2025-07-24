import React from 'react';
import { motion } from 'framer-motion';
import FloatingElements from './FloatingElements';
import diaryCover from '@/assets/diary-cover.png';

interface LandingPageProps {
  onOpenDiary: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onOpenDiary }) => {
  return (
    <div className="min-h-screen bg-romantic flex items-center justify-center relative overflow-hidden">
      <FloatingElements />
      
      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Welcome message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-handwriting text-primary mb-4">
            <span role="img" aria-label="Cherry blossom">🌸</span> Welcome to Your Birthday Diary <span role="img" aria-label="Cherry blossom">🌸</span>
          </h1>
          <p className="text-xl md:text-2xl font-cute text-secondary-foreground">
            Tap to Open the Book of Memories <span role="img" aria-label="Pink heart">💖</span>
          </p>
        </motion.div>

        {/* Diary cover with enhanced opening animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
          className="mb-8 perspective-1000"
          whileHover={{ 
            scale: 1.05, 
            rotateY: 5,
            transition: { duration: 0.3 }
          }}
          whileTap={{ 
            scale: 0.98,
            rotateX: 2,
            transition: { duration: 0.1 }
          }}
        >
          <img
            src={diaryCover}
            alt="Beautiful birthday diary with soft pastel colors and romantic design, ready to open"
            className="w-48 h-64 md:w-64 md:h-80 mx-auto rounded-2xl shadow-2xl cursor-pointer"
            onClick={onOpenDiary}
            style={{
              filter: 'drop-shadow(0 15px 35px rgba(320, 80%, 65%, 0.3))',
              transformStyle: 'preserve-3d'
            }}
          />
        </motion.div>

        {/* Open button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          onClick={onOpenDiary}
          className="group relative"
        >
          <div className="bg-heart-pink hover:bg-primary text-white px-8 py-4 rounded-full text-xl font-diary font-semibold shadow-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl">
            <span role="img" aria-label="Love letter">💌</span> Open Your Gift
          </div>
          <div className="absolute -inset-1 bg-gradient-to-r from-heart-pink to-primary rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
        </motion.button>

        {/* Instruction text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-6 text-muted-foreground font-cute text-lg"
        >
          Double-tap the page edges to turn pages like a real diary <span role="img" aria-label="Open book">📖</span>
          <br />
          <span className="text-sm opacity-80">
            <span role="img" aria-label="Milk glass">🥛</span> 
            <span role="img" aria-label="Brown heart">🤎</span> 
            <span role="img" aria-label="Bubble tea">🧋</span> 
            Ready for a magical journey? 
            <span role="img" aria-label="Sparkles">✨</span>
          </span>
        </motion.p>
      </div>
    </div>
  );
};

export default LandingPage;