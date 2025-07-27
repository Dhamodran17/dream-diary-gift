import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import milkMochaHug from '@/assets/milk-mocha-hug.png';
import newDiaryCover from '@/assets/new-diary-cover.png';
import DiaryDecorations from './DiaryDecorations';
import PinkStickers from './PinkStickers';
import CollageLayouts from './CollageLayouts';

interface DiaryPageProps {
  pageNumber: number;
  type?: 'cover' | 'greeting' | 'intro-left' | 'intro-right' | 'memory' | 'ending' | 'value' | 'collage';
  title?: string;
  content?: string;
  imageSrc?: string;
  className?: string;
  girlfriendName?: string;
  images?: string[];
  collageLayout?: 'grid-4' | 'grid-6' | 'masonry' | 'scattered' | 'polaroid' | 'heart-shape';
}

const DiaryPage = forwardRef<HTMLDivElement, DiaryPageProps>(
  ({ pageNumber, type = 'memory', title, content, imageSrc, className = '', girlfriendName = 'My Love', images = [], collageLayout = 'grid-4' }, ref) => {
    const isIntroLeft = type === 'intro-left';
    const isIntroRight = type === 'intro-right';
    const isFirstPage = type === 'greeting';
    const isLastPage = type === 'ending';
    const isValuePage = type === 'value';
    const isCollagePage = type === 'collage';

  return (
    <div 
      ref={ref}
      className={`w-full h-full relative overflow-hidden ${className} ${pageNumber % 2 === 0 ? 'right-page' : 'left-page'}`}
      style={{
        backgroundImage: `
          linear-gradient(135deg, 
            rgba(340, 80%, 95%, 0.9) 0%, 
            rgba(320, 70%, 96%, 0.9) 25%,
            rgba(350, 85%, 97%, 0.9) 50%, 
            rgba(330, 75%, 95%, 0.9) 75%,
            rgba(340, 80%, 96%, 0.9) 100%
          ),
          url(${newDiaryCover})
        `,
        backgroundSize: 'cover, cover',
        backgroundPosition: 'center, center',
        backgroundBlendMode: 'overlay',
        borderRadius: '18px',
        boxShadow: 'inset 0 0 0 1px rgba(320, 50%, 80%, 0.4), inset 0 0 20px rgba(340, 60%, 90%, 0.3)',
      }}
    >
      {/* Ring binding margin */}
      <div className="absolute left-0 top-0 w-10 h-full bg-gradient-to-r from-gray-200/40 via-gray-100/20 to-transparent opacity-60 pointer-events-none"></div>
        {/* Notebook texture overlay */}
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                transparent,
                transparent 24px,
                rgba(280, 40%, 80%, 0.15) 24px,
                rgba(280, 40%, 80%, 0.15) 26px
              )
            `,
            borderRadius: '18px'
          }}
        />

        {/* Pink sticker decorations matching uploaded image aesthetic */}
        {isIntroLeft && (
          <>
            <DiaryDecorations variant="left" />
            <PinkStickers variant="hearts" count={6} />
          </>
        )}
        {isIntroRight && (
          <>
            <DiaryDecorations variant="right" />
            <PinkStickers variant="butterflies" count={5} />
          </>
        )}
        {isFirstPage && <PinkStickers variant="mixed" count={10} />}
        {type === 'memory' && <PinkStickers variant="flowers" count={7} />}
        {isCollagePage && <PinkStickers variant="butterflies" count={6} />}
        {isLastPage && <PinkStickers variant="hearts" count={8} />}
        {isValuePage && <PinkStickers variant="mixed" count={12} />}

        {/* Main page content container with binding space */}
        <div className="relative z-10 w-full h-full pl-12 pr-6 py-6 flex flex-col justify-between"
        >
          {/* Page header with decorative elements */}
          <div className="text-center">
            <div className="text-xs font-diary text-muted-foreground mb-2">
              {isValuePage ? '💎 PRECIOUS 💎' : isLastPage ? '💖 LOVE YOU 💖' : isIntroLeft ? '🥛 MILK 🥛' : isIntroRight ? '🤎 MOCHA 🤎' : '✨ LUCK! ✨'}
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4"></div>
          </div>

          {/* Intro Left Page - Decorative with scattered icons */}
          {isIntroLeft && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex flex-col justify-center items-center text-center space-y-6"
            >
              <div className="text-3xl font-handwriting text-primary">
                <span role="img" aria-label="Sparkling heart">💖</span>
              </div>
              <h2 className="text-xl font-handwriting text-primary">
                Welcome to Our
              </h2>
              <div className="text-lg font-cute text-foreground">
                Magical Memory Book
              </div>
              <div className="flex space-x-3 text-2xl">
                <span role="img" aria-label="Milk glass">🥛</span>
                <span role="img" aria-label="Brown heart">🤎</span>
                <span role="img" aria-label="Bubble tea">🧋</span>
              </div>
            </motion.div>
          )}

          {/* Intro Right Page - "This Diary Belongs To" */}
          {isIntroRight && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex flex-col justify-center items-center text-center space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-2xl font-handwriting text-primary leading-relaxed">
                  This Diary Belongs To:
                </h2>
                <div className="relative">
                  <div className="text-2xl font-handwriting text-secondary italic bg-gradient-to-r from-heart-pink to-primary bg-clip-text text-transparent">
                    {girlfriendName}
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-heart-pink to-primary"></div>
                </div>
              </div>
              <div className="flex space-x-2 text-lg">
                <span role="img" aria-label="Camera">📷</span>
                <span role="img" aria-label="Rainbow">🌈</span>
                <span role="img" aria-label="Cupcake">🧁</span>
              </div>
            </motion.div>
          )}
          {/* First greeting page */}
          {isFirstPage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex-1 flex flex-col justify-center items-center text-center space-y-4"
            >
              <h2 className="text-2xl md:text-3xl font-handwriting text-primary mb-4">
                <span role="img" aria-label="Birthday cake">🎂</span> Happy Birthday My Love! <span role="img" aria-label="Two hearts">💕</span>
              </h2>
              <div className="w-20 h-20 mx-auto mb-4">
                <img 
                  src={milkMochaHug} 
                  alt="Cute Milk and Mocha bears hugging with hearts, representing our love" 
                  className="w-full h-full object-contain animate-heart-bounce"
                />
              </div>
              <p className="text-lg font-cute text-foreground leading-relaxed max-w-sm mx-auto">
                You are the best part of my life and this is a small world of our memories! 
                Each page holds a piece of my heart <span role="img" aria-label="Gift with heart">💝</span>
              </p>
              <div className="flex space-x-3 text-xl">
                <span role="img" aria-label="Milk glass">🥛</span>
                <span role="img" aria-label="Chocolate">🍫</span>
                <span role="img" aria-label="Bubble tea">🧋</span>
                <span role="img" aria-label="Teddy bear">🧸</span>
              </div>
            </motion.div>
          )}

          {isLastPage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="w-24 h-24 mx-auto mb-4">
                <img 
                  src={milkMochaHug} 
                  alt="Milk & Mocha Forever" 
                  className="w-full h-full object-contain animate-heart-bounce"
                />
              </div>
              <h2 className="text-2xl font-handwriting text-primary">
                💝 Our Forever Story 💝
              </h2>
              <p className="text-lg font-cute text-foreground leading-relaxed max-w-md mx-auto">
                This diary ends, but our story continues forever 💖 
                Every sunrise brings new pages to write together, 
                every moment with you becomes a treasured memory.
                Thank you for being my happiest chapter, my love.
              </p>
              <div className="flex justify-center space-x-4 text-2xl animate-sparkle" role="img" aria-label="Milk tea, chocolate, hearts, cherry blossoms and sparkles">
                <span role="img" aria-label="Milk tea">🧋</span>
                <span role="img" aria-label="Milk glass">🥛</span> 
                <span role="img" aria-label="Chocolate">🍫</span>
                <span role="img" aria-label="Brown heart">🤎</span>
                <span role="img" aria-label="Pink heart">💕</span> 
                <span role="img" aria-label="Cherry blossom">🌸</span> 
                <span role="img" aria-label="Sparkles">✨</span>
                <span role="img" aria-label="Teddy bear">🧸</span>
              </div>
            </motion.div>
          )}

          {/* Value Page - Beautiful final page about her worth */}
          {isValuePage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex-1 flex flex-col justify-center items-center text-center space-y-6 px-4"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-20 h-20 mb-4"
              >
                <img 
                  src={milkMochaHug} 
                  alt="Eternal Love" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-2xl md:text-3xl font-handwriting text-primary bg-gradient-to-r from-heart-pink via-primary to-secondary bg-clip-text text-transparent"
              >
                Your Worth in My Life
              </motion.h2>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="space-y-4 max-w-sm mx-auto"
              >
                <p className="text-base font-cute text-foreground leading-relaxed">
                  You are my morning sunshine ☀️ and my evening star 🌟
                </p>
                <p className="text-base font-cute text-foreground leading-relaxed">
                  The laugh that heals my heart 💚 and the smile that brightens my darkest days ✨
                </p>
                <p className="text-base font-cute text-foreground leading-relaxed">
                  You are not just my love, you are my home 🏠 my peace 🕊️ and my forever 💕
                </p>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
                className="flex justify-center space-x-3 text-2xl"
              >
                <span role="img" aria-label="Infinity">♾️</span>
                <span role="img" aria-label="Milk glass">🥛</span>
                <span role="img" aria-label="Brown heart">🤎</span>
                <span role="img" aria-label="Infinity">♾️</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="text-lg font-handwriting text-secondary italic"
              >
                Forever yours, {girlfriendName} 💖
              </motion.div>
            </motion.div>
          )}

          {type === 'memory' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              {title && (
                <h3 className="text-xl font-handwriting text-primary">
                  {title}
                </h3>
              )}
              
              {imageSrc && (
                <div className="relative">
                  <img
                    src={imageSrc}
                    alt={`Memory ${pageNumber}`}
                    className="max-w-[85%] h-auto mx-auto rounded-xl border-4 border-white shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300"
                    style={{ maxHeight: '250px' }}
                  />
                  {/* Tape effect */}
                  <div className="absolute -top-2 -right-2 w-8 h-6 bg-gradient-to-br from-yellow-200 to-yellow-300 opacity-80 transform rotate-45 rounded-sm shadow-sm"></div>
                </div>
              )}

              {content && (
                <p className="text-base font-cute text-foreground leading-relaxed max-w-xs mx-auto mt-4">
                  "{content}"
                </p>
              )}
              
              {/* Add milk/mocha themed decorations to memory pages */}
              <div className="flex justify-center space-x-2 text-lg mt-3 opacity-70">
                <span role="img" aria-label="Milk glass">🥛</span>
                <span role="img" aria-label="Brown heart">🤎</span>
                <span role="img" aria-label="Bubble tea">🧋</span>
              </div>
            </motion.div>
          )}

          {/* Collage Page */}
          {isCollagePage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-4"
            >
              {title && (
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl font-handwriting text-primary text-center"
                >
                  {title}
                </motion.h3>
              )}
              
              <CollageLayouts 
                images={images} 
                layout={collageLayout}
                className="flex-1"
              />
              
              {content && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-sm font-cute text-foreground leading-relaxed text-center max-w-xs mx-auto"
                >
                  {content}
                </motion.p>
              )}
              
              {/* Collage page decorations */}
              <div className="flex justify-center space-x-2 text-lg opacity-70">
                <span role="img" aria-label="Camera">📷</span>
                <span role="img" aria-label="Heart eyes">😍</span>
                <span role="img" aria-label="Sparkles">✨</span>
              </div>
            </motion.div>
          )}

          {/* Page footer */}
          <div className="text-center">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-2"></div>
            <div className="text-xs font-diary text-muted-foreground">
              {isValuePage ? '💎 Priceless' : isLastPage ? '💫 The End' : `Page ${pageNumber} • Made with 💖`}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

DiaryPage.displayName = 'DiaryPage';

export default DiaryPage;