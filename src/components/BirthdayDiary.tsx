import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { motion } from 'framer-motion';
import DiaryPage from './DiaryPage';
import FloatingElements from './FloatingElements';

const BirthdayDiary: React.FC = () => {
  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);

  // Handle double click for page turning
  const handleDoubleClick = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    if (clickX < width * 0.15) {
      // Double click on left edge = go to previous page
      if (bookRef.current && currentPage > 0) {
        bookRef.current.pageFlip().flipPrev();
      }
    } else if (clickX > width * 0.85) {
      // Double click on right edge = go to next page
      if (bookRef.current) {
        bookRef.current.pageFlip().flipNext();
      }
    }
  };

  // Handle page flip events
  const onFlip = (event: any) => {
    setCurrentPage(event.data);
  };

  // Sample memory data - you can replace these with real photos and messages
  const memoryPages = [
    {
      title: "🌟 Our First Date",
      content: "This day with you is still my favorite memory 💫",
      imageSrc: "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=400&h=300&fit=crop"
    },
    {
      title: "💕 Adventure Together",
      content: "Every adventure is better with you by my side 🌈",
      imageSrc: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
    },
    {
      title: "🎉 Special Moments",
      content: "Creating beautiful memories, one smile at a time ✨",
      imageSrc: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-dreamy flex items-center justify-center relative overflow-hidden">
      <FloatingElements />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
        onDoubleClick={handleDoubleClick}
      >
        <HTMLFlipBook
          ref={bookRef}
          width={350}
          height={500}
          size="stretch"
          minWidth={300}
          minHeight={400}
          maxWidth={450}
          maxHeight={600}
          maxShadowOpacity={0.3}
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
          autoSize={true}
          showPageCorners={true}
          disableFlipByClick={true}
          className="diary-book"
          style={{
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
          }}
        >
          {/* Greeting Page */}
          <DiaryPage 
            pageNumber={1} 
            type="greeting"
          />

          {/* Memory Pages */}
          {memoryPages.map((memory, index) => (
            <DiaryPage
              key={index + 2}
              pageNumber={index + 2}
              type="memory"
              title={memory.title}
              content={memory.content}
              imageSrc={memory.imageSrc}
            />
          ))}

          {/* Ending Page */}
          <DiaryPage 
            pageNumber={5} 
            type="ending"
          />
        </HTMLFlipBook>

        {/* Subtle page indicator */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[0, 1, 2, 3, 4].map((page) => (
            <div
              key={page}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentPage === page ? 'bg-primary shadow-lg' : 'bg-muted'
              }`}
            />
          ))}
        </div>

        {/* Instruction hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center"
        >
          <p className="text-sm font-cute text-muted-foreground">
            💡 Double-tap page edges to turn • Left edge ← → Right edge
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BirthdayDiary;