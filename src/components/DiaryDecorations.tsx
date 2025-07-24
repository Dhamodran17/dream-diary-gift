import React from 'react';

interface DiaryDecorationsProps {
  variant?: 'left' | 'right' | 'scattered';
}

const DiaryDecorations: React.FC<DiaryDecorationsProps> = ({ variant = 'scattered' }) => {
  const cuteIcons = [
    { emoji: '🦄', label: 'unicorn' },
    { emoji: '🎀', label: 'bow' }, 
    { emoji: '💖', label: 'sparkling heart' },
    { emoji: '📷', label: 'camera' },
    { emoji: '🧁', label: 'cupcake' },
    { emoji: '🌈', label: 'rainbow' },
    { emoji: '🎵', label: 'musical note' },
    { emoji: '✨', label: 'sparkles' },
    { emoji: '🥛', label: 'milk glass' },
    { emoji: '🤎', label: 'brown heart' },
    { emoji: '🧋', label: 'bubble tea' },
    { emoji: '🍫', label: 'chocolate' },
    { emoji: '🧸', label: 'teddy bear' },
    { emoji: '🌸', label: 'cherry blossom' },
    { emoji: '🍰', label: 'cake slice' }
  ];

  const getRandomIcons = (count: number) => {
    return cuteIcons
      .sort(() => 0.5 - Math.random())
      .slice(0, count);
  };

  const leftPageDecorations = getRandomIcons(8);
  const rightPageDecorations = getRandomIcons(6);
  const scatteredDecorations = getRandomIcons(12);

  if (variant === 'left') {
    return (
      <div className="absolute inset-0 pointer-events-none">
        {leftPageDecorations.map((icon, index) => (
          <div
            key={`left-${index}`}
            className="absolute text-lg opacity-60"
            style={{
              left: `${10 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              transform: `rotate(${Math.random() * 30 - 15}deg)`,
              zIndex: 1
            }}
          >
            <span role="img" aria-label={icon.label}>{icon.emoji}</span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'right') {
    return (
      <div className="absolute inset-0 pointer-events-none">
        {rightPageDecorations.map((icon, index) => (
          <div
            key={`right-${index}`}
            className="absolute text-sm opacity-40"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
              zIndex: 1
            }}
          >
            <span role="img" aria-label={icon.label}>{icon.emoji}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      {scatteredDecorations.map((icon, index) => (
        <div
          key={`scattered-${index}`}
          className="absolute text-base opacity-50"
          style={{
            left: `${5 + Math.random() * 85}%`,
            top: `${10 + Math.random() * 80}%`,
            transform: `rotate(${Math.random() * 40 - 20}deg)`,
            zIndex: 1
          }}
        >
          <span role="img" aria-label={icon.label}>{icon.emoji}</span>
        </div>
      ))}
    </div>
  );
};

export default DiaryDecorations;