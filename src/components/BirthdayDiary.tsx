import React, { useRef, useState, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { motion } from 'framer-motion';
import DiaryPage from './DiaryPage';
import FloatingElements from './FloatingElements';
import FloatingTooltip from './FloatingTooltip';
import RelationshipBondsPage from './RelationshipBondsPage';

const BirthdayDiary: React.FC = () => {
  const bookRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [showTooltip, setShowTooltip] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showRelationshipPage, setShowRelationshipPage] = useState(false);

  // Background music setup
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
      
      const playAudio = async () => {
        try {
          await audioRef.current?.play();
        } catch (error) {
          console.log('Audio autoplay prevented by browser');
        }
      };
      
      playAudio();
    }
  }, []);

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
    
    // Show relationship page after last diary page
    if (event.data >= 13) {
      setTimeout(() => {
        setShowRelationshipPage(true);
      }, 1500);
    }
  };

  // Sample image URLs - replace with your 48 actual images
  const sampleImages = [
    "/lovable-uploads/6d961388-49e2-429b-833c-9118016eee73.png", // Your uploaded collage reference
    "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=400&h=300&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=400&h=300&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&h=300&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1522748877644-67dc4b03cbce?w=400&h=300&fit=crop&auto=format&q=80",
    // Add your 48 actual images here...
  ];

  // Function to get images for each collage page
  const getImagesForPage = (pageIndex: number, imagesPerPage: number) => {
    const startIndex = pageIndex * imagesPerPage;
    return sampleImages.slice(startIndex, startIndex + imagesPerPage);
  };

  // Collage pages data with different layouts
  const collagePages = [
    {
      title: "💖 Our Beautiful Moments",
      content: "Every picture tells our love story 📸",
      layout: "grid-4" as const,
      imagesPerPage: 4
    },
    {
      title: "🌈 Adventures Together",
      content: "Creating memories everywhere we go ✨",
      layout: "grid-6" as const,
      imagesPerPage: 6
    },
    {
      title: "🎀 Sweet Memories",
      content: "Like scattered photos from our diary 💕",
      layout: "masonry" as const,
      imagesPerPage: 6
    },
    {
      title: "💝 Random Love Moments",
      content: "Spontaneous captures of our happiness 🥰",
      layout: "scattered" as const,
      imagesPerPage: 5
    },
    {
      title: "📷 Polaroid Collection",
      content: "Vintage style memories of us 🤍",
      layout: "polaroid" as const,
      imagesPerPage: 4
    },
    {
      title: "💞 Heart Full of You",
      content: "You are the center of my world 🌍",
      layout: "heart-shape" as const,
      imagesPerPage: 7
    },
    {
      title: "🎉 Special Celebrations",
      content: "Every day with you is a celebration 🎊",
      layout: "grid-4" as const,
      imagesPerPage: 4
    },
    {
      title: "🌸 Garden of Memories",
      content: "Our love grows like beautiful flowers 🌺",
      layout: "masonry" as const,
      imagesPerPage: 6
    }
  ];

  // Girlfriend's name - you can customize this
  const girlfriendName = "My Beautiful Love";

  if (showRelationshipPage) {
    return <RelationshipBondsPage onBack={() => setShowRelationshipPage(false)} />;
  }

  return (
    <div className="min-h-screen bg-dreamy flex items-center justify-center relative overflow-hidden p-4">
      {/* Background Music */}
      <audio
        ref={audioRef}
        src="https://www.soundjay.com/misc/sounds/magic-chime-02.wav"
        preload="auto"
        className="hidden"
      />
      
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
          width={700}
          height={900}
          size="stretch"
          minWidth={400}
          minHeight={600}
          maxWidth={900}
          maxHeight={1200}
          maxShadowOpacity={0.9}
          showCover={true}
          mobileScrollSupport={true}
          flippingTime={1500}
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

          {/* Collage Pages with 48 images */}
          {collagePages.map((collage, index) => (
            <DiaryPage
              key={index + 4}
              pageNumber={index + 4}
              type="collage"
              title={collage.title}
              content={collage.content}
              images={getImagesForPage(index, collage.imagesPerPage)}
              collageLayout={collage.layout}
            />
          ))}

          {/* Ending Page */}
          <DiaryPage 
            pageNumber={12} 
            type="ending"
          />

          {/* Final Value Page */}
          <DiaryPage 
            pageNumber={13} 
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
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-1 overflow-x-auto max-w-xs">
          {Array.from({ length: 14 }, (_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                currentPage === i ? 'bg-primary shadow-lg scale-125' : 'bg-muted'
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