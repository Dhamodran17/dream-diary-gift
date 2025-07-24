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
            🌸 Welcome to Your Birthday Diary 🌸
          </h1>
          <p className="text-xl md:text-2xl font-cute text-secondary-foreground">
            Tap to Open the Book of Memories 💖
          </p>
        </motion.div>

        {/* Diary cover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-8"
        >
          <img
            src={diaryCover}
            alt="Birthday Diary"
            className="w-48 h-64 md:w-64 md:h-80 mx-auto rounded-2xl shadow-2xl cursor-pointer transition-transform hover:scale-105"
            onClick={onOpenDiary}
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
            💌 Open Your Gift
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
          Double-tap the page edges to turn pages like a real diary 📖
        </motion.p>
      </div>
    </div>
  );
};

export default LandingPage;