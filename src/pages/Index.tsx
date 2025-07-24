import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from '@/components/LandingPage';
import BirthdayDiary from '@/components/BirthdayDiary';

const Index = () => {
  const [showDiary, setShowDiary] = useState(false);

  const handleOpenDiary = () => {
    setShowDiary(true);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {!showDiary ? (
          <motion.div
            key="landing"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 0.9,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
          >
            <LandingPage onOpenDiary={handleOpenDiary} />
          </motion.div>
        ) : (
          <motion.div
            key="diary"
            initial={{ 
              opacity: 0,
              scale: 1.1,
            }}
            animate={{ 
              opacity: 1,
              scale: 1,
              transition: { duration: 1, ease: "easeInOut" }
            }}
          >
            <BirthdayDiary />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
