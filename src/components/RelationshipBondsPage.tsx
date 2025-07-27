import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import milkMochaHug from '@/assets/milk-mocha-hug.png';

interface RelationshipBondsPageProps {
  onBack: () => void;
}

const RelationshipBondsPage: React.FC<RelationshipBondsPageProps> = ({ onBack }) => {
  const relationshipMoments = [
    {
      title: "🌟 First Meeting",
      description: "The moment I knew you were special",
      image: "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=300&h=200&fit=crop&auto=format&q=80"
    },
    {
      title: "💕 Growing Closer", 
      description: "Every day brought us nearer to each other's hearts",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=200&fit=crop&auto=format&q=80"
    },
    {
      title: "🎉 Our Adventures",
      description: "Creating beautiful memories together",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop&auto=format&q=80"
    },
    {
      title: "💖 Deep Connection",
      description: "When souls recognize each other",
      image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=300&h=200&fit=crop&auto=format&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-heart-pink/20 via-background to-dreamy/30 flex flex-col relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          >
            {['💕', '🌸', '✨', '💖', '🦋', '🌟', '💫', '🥛', '🤎', '🧋'][Math.floor(Math.random() * 10)]}
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 p-6"
      >
        <Button
          onClick={onBack}
          variant="outline"
          className="mb-6 bg-white/80 backdrop-blur-sm hover:bg-white/90 border-heart-pink/30"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Diary
        </Button>
        
        <div className="text-center space-y-4">
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
            className="w-24 h-24 mx-auto mb-6"
          >
            <img 
              src={milkMochaHug} 
              alt="Our Love Story" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-handwriting text-primary bg-gradient-to-r from-heart-pink via-primary to-secondary bg-clip-text text-transparent">
            Our Relationship Bonds
          </h1>
          <p className="text-lg font-cute text-foreground/80 max-w-2xl mx-auto">
            Every relationship is built on countless small moments, shared dreams, and the invisible threads that connect two hearts 💕
          </p>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="flex-1 p-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Relationship moments grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {relationshipMoments.map((moment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-heart-pink/20"
              >
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    className="w-full h-32 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heart-pink/20 to-transparent"></div>
                </div>
                <h3 className="text-lg font-handwriting text-primary mb-2">
                  {moment.title}
                </h3>
                <p className="text-sm font-cute text-foreground/70">
                  {moment.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Our bond section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-heart-pink/30 text-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-handwriting text-primary">
                What Makes Us Special 💖
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="space-y-4"
                >
                  <div className="text-4xl">🤝</div>
                  <h3 className="text-xl font-handwriting text-secondary">Understanding</h3>
                  <p className="text-sm font-cute text-foreground/80">
                    We communicate without words, understand each other's silences, and support each other's dreams
                  </p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="space-y-4"
                >
                  <div className="text-4xl">😂</div>
                  <h3 className="text-xl font-handwriting text-secondary">Laughter</h3>
                  <p className="text-sm font-cute text-foreground/80">
                    Every day brings new reasons to smile, inside jokes that only we understand, and endless joy
                  </p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="space-y-4"
                >
                  <div className="text-4xl">🌱</div>
                  <h3 className="text-xl font-handwriting text-secondary">Growth</h3>
                  <p className="text-sm font-cute text-foreground/80">
                    We help each other become better versions of ourselves, growing together while staying true to who we are
                  </p>
                </motion.div>
              </div>

              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="pt-8 space-y-4"
              >
                <p className="text-lg font-handwriting text-primary italic">
                  "In you, I found my best friend, my greatest love, and my home all in one person"
                </p>
                <div className="flex justify-center space-x-3 text-2xl">
                  <span>🥛</span>
                  <span>💕</span>
                  <span>🤎</span>
                  <span>✨</span>
                  <span>🧋</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RelationshipBondsPage;