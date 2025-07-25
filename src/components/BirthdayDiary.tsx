import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { motion } from 'framer-motion';
import DiaryPage from './DiaryPage';
import FloatingElements from './FloatingElements';
import FloatingTooltip from './FloatingTooltip';

const BirthdayDiary: React.FC = () => {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [showTooltip, setShowTooltip] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Handle double click for page turning - both sides enabled
  const handleDoubleClick = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    if (clickX < width * 0.5) {
      // Double click on left half = go to previous page
      if (bookRef.current && currentPage > 0) {
        bookRef.current.pageFlip().flipPrev();
      }
    } else {
      // Double click on right half = go to next page  
      if (bookRef.current) {
        bookRef.current.pageFlip().flipNext();
      }
    }
  };

  // Handle page flip events
  const onFlip = (event: any) => {
    setCurrentPage(event.data);
  };

  // Enhanced memory data with better accessibility and more Milk & Mocha emojis
  const memoryPages = [
    {
      title: "🌟 Our First Date 🥛",
      content: "This day with you is still my favorite memory 💫 Like milk and chocolate, we were meant to be together!",
      imageSrc: "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=400&h=300&fit=crop&auto=format&q=80"
    },
    {
      title: "💕 Adventure Together 🧋", 
      content: "Every adventure is better with you by my side 🌈 Just like our favorite bubble tea dates!",
      imageSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop&auto=format&q=80"
    },
    {
      title: "🎉 Special Moments 🍫",
      content: "Creating beautiful memories, one smile at a time ✨ Sweet like chocolate, warm like cocoa!",
      imageSrc: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=400&h=300&fit=crop&auto=format&q=80"
    }
  ];

  // Girlfriend's name - you can customize this
  const girlfriendName = "My Beautiful Love";

  return (
    <div className="min-h-screen bg-dreamy flex items-center justify-center relative overflow-hidden">
      <FloatingElements />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10"
        onDoubleClick={handleDoubleClick}
      >
        <HTMLFlipBook
          ref={bookRef}
          width={450}
          height={650}
          size="stretch"
          minWidth={400}
          minHeight={550}
          maxWidth={550}
          maxHeight={750}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={false}
          flippingTime={1800}
          useMouseEvents={false}
          swipeDistance={0}
          clickEventForward={false}
          onFlip={onFlip}
          startPage={0}
          drawShadow={true}
          usePortrait={true}
          startZIndex={0}
          autoSize={false}
          showPageCorners={true}
          disableFlipByClick={true}
          className="diary-book"
          style={{
            borderRadius: '20px',
            boxShadow: '0 15px 50px rgba(0,0,0,0.2)',
            filter: 'drop-shadow(0 5px 15px rgba(320, 60%, 65%, 0.2))'
          }}
        >
          {/* Intro Left Page - Decorative */}
          <DiaryPage 
            pageNumber={1} 
            type="intro-left"
          />

          {/* Intro Right Page - "This Diary Belongs To" */}
          <DiaryPage 
            pageNumber={2} 
            type="intro-right"
            girlfriendName={girlfriendName}
          />

          {/* Greeting Page - Happy Birthday */}
          <DiaryPage 
            pageNumber={3} 
            type="greeting"
          />

          {/* Memory Pages */}
          {memoryPages.map((memory, index) => (
            <DiaryPage
              key={index + 4}
              pageNumber={index + 4}
              type="memory"
              title={memory.title}
              content={memory.content}
              imageSrc={memory.imageSrc}
            />
          ))}

          {/* Ending Page */}
          <DiaryPage 
            pageNumber={7} 
            type="ending"
          />
        </HTMLFlipBook>

        {/* Hanging Mocha/Milk Emojis */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 flex space-x-8 z-20">
          <motion.div
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-3xl"
            role="img"
            aria-label="Milk emoji"
          >
            🥛
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -6, 0],
              rotate: [0, -3, 0, 3, 0]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="text-3xl"
            role="img"
            aria-label="Mocha emoji"
          >
            🤎
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 4, 0, -4, 0]
            }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="text-3xl"
            role="img"
            aria-label="Bubble tea emoji"
          >
            🧋
          </motion.div>
        </div>

        {/* Subtle page indicator */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[0, 1, 2, 3, 4, 5, 6].map((page) => (
            <div
              key={page}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === page ? 'bg-primary shadow-lg' : 'bg-muted'
              }`}
            />
          ))}
        </div>

        {/* Gentle hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center"
        >
          <p className="text-xs font-cute text-muted-foreground/70">
            🥛🤎 Milk & Mocha are waiting to guide you through our memories! 🧋✨
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BirthdayDiary;