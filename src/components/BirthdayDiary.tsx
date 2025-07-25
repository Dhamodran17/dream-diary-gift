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
    if (!bookRef.current) return;
    
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    if (clickX < width * 0.5) {
      // Double click on left half = go to previous page
      try {
        bookRef.current.pageFlip().flipPrev();
      } catch (error) {
        console.log('Cannot go to previous page');
      }
    } else {
      // Double click on right half = go to next page  
      try {
        bookRef.current.pageFlip().flipNext();
      } catch (error) {
        console.log('Cannot go to next page');
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
    <div className="min-h-screen bg-dreamy flex items-center justify-center relative overflow-hidden p-4">
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
          width={600}
          height={800}
          size="stretch"
          minWidth={380}
          minHeight={540}
          maxWidth={800}
          maxHeight={1000}
          maxShadowOpacity={0.8}
          showCover={true}
          mobileScrollSupport={true}
          flippingTime={1200}
          useMouseEvents={true}
          swipeDistance={30}
          clickEventForward={true}
          onFlip={onFlip}
          startPage={0}
          drawShadow={true}
          usePortrait={false}
          startZIndex={0}
          autoSize={true}
          showPageCorners={true}
          disableFlipByClick={false}
          className="diary-book"
          style={{
            borderRadius: '25px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.1)',
            filter: 'drop-shadow(0 8px 25px rgba(320, 60%, 65%, 0.3))',
            background: 'linear-gradient(145deg, #f8f6f3, #ede8e0)',
            border: '3px solid #d4af37',
            position: 'relative'
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

          {/* Final Value Page */}
          <DiaryPage 
            pageNumber={8} 
            type="value"
            girlfriendName={girlfriendName}
          />
        </HTMLFlipBook>

        {/* Hanging Mocha/Milk Emojis with Ring Binding Effect */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 flex space-x-12 z-20">
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
            className="text-4xl filter drop-shadow-lg"
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
            className="text-4xl filter drop-shadow-lg"
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
            className="text-4xl filter drop-shadow-lg"
            role="img"
            aria-label="Bubble tea emoji"
          >
            🧋
          </motion.div>
        </div>

        {/* Ring Binding Effect */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex space-x-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-4 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full shadow-lg"
                animate={{
                  scaleY: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                style={{
                  background: 'linear-gradient(145deg, #c0c0c0, #808080)',
                  border: '1px solid #666'
                }}
              />
            ))}
          </div>
        </div>

        {/* Decorative Stationery Items */}
        <motion.div
          className="absolute -right-16 top-20 text-2xl"
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ✏️
        </motion.div>
        <motion.div
          className="absolute -left-16 bottom-32 text-2xl"
          animate={{ rotate: [0, -3, 0, 3, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          📎
        </motion.div>
        <motion.div
          className="absolute -right-12 bottom-16 text-xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        >
          ⭐
        </motion.div>

        {/* Subtle page indicator */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((page) => (
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