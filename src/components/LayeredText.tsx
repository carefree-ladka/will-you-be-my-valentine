import { useState, useEffect } from 'react';

interface LayeredTextProps {
  text: string;
  onComplete: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export const LayeredText: React.FC<LayeredTextProps> = ({
  text,
  onComplete,
  className = "",
  style = {}
}) => {
  const [visibleLetters, setVisibleLetters] = useState(text.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLetters(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          setTimeout(onComplete, 300);
          return 0;
        }
        return prev - 1;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`relative ${className}`} style={style}>
      {text.split('').map((letter, index) => (
        <span
          key={index}
          className={`absolute transition-all duration-500 ${
            index < visibleLetters ? 'opacity-100 scale-100' : 'opacity-0 scale-150'
          }`}
          style={{
            left: `${index * 0.6}em`,
            animationDelay: `${index * 0.1}s`,
            zIndex: text.length - index,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </div>
  );
};