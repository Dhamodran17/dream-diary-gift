import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import milkMochaHug from '@/assets/milk-mocha-hug.png';

interface DiaryPageProps {
  pageNumber: number;
  type?: 'cover' | 'greeting' | 'memory' | 'ending';
  title?: string;
  content?: string;
  imageSrc?: string;
  className?: string;
}

const DiaryPage = forwardRef<HTMLDivElement, DiaryPageProps>(
  ({ pageNumber, type = 'memory', title, content, imageSrc, className = '' }, ref) => {
    const isFirstPage = type === 'greeting';
    const isLastPage = type === 'ending';

    return (
      <div 
        ref={ref}
        className={`w-full h-full bg-gradient-to-br from-card via-milk-white to-card border-2 border-border rounded-2xl p-6 flex flex-col justify-between shadow-inner ${className}`}
      >
        {/* Page header with decorative elements */}
        <div className="text-center">
          <div className="text-xs font-diary text-muted-foreground mb-2">
            {isLastPage ? '💖 LOVE YOU 💖' : '✨ LUCK! ✨'}
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4"></div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center items-center text-center space-y-4">
          {isFirstPage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
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
                <span role="img" aria-label="Brown heart">🤎</span>
                <span role="img" aria-label="Pink heart">💕</span> 
                <span role="img" aria-label="Cherry blossom">🌸</span> 
                <span role="img" aria-label="Sparkles">✨</span>
              </div>
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
            </motion.div>
          )}
        </div>

        {/* Page footer */}
        <div className="text-center">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-2"></div>
          <div className="text-xs font-diary text-muted-foreground">
            {isLastPage ? '💫 The End' : `Page ${pageNumber} • Made with 💖`}
          </div>
        </div>
      </div>
    );
  }
);

DiaryPage.displayName = 'DiaryPage';

export default DiaryPage;