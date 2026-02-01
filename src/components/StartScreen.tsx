import { TypewriterText } from './TypewriterText';
import { useState } from 'react';
import { generateHeartPositions } from '../utils/animations';
import { useValentineStore } from '../store/valentineStore';

export const StartScreen: React.FC = () => {
  const [heartPositions] = useState(generateHeartPositions);
  const { hasStarted, showTransition, handleStart } = useValentineStore();

  if (hasStarted || showTransition) return null;

  const handleClick = () => {
    // Request fullscreen
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
    handleStart();
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-purple-900/50 to-pink-900/50 z-50">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {heartPositions.map((position, i) => (
          <div
            key={i}
            className="absolute text-pink-300/20 animate-float"
            style={position}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Typewriter Text */}
        <div className="mb-12">
          <TypewriterText
            text="Shrutiiiiiiiiiii, I love you"
            speed={150}
            className="text-4xl md:text-6xl font-bold text-white block mb-4"
            style={{
              fontFamily: "Georgia, serif",
              textShadow: "0 0 30px rgba(255, 8, 68, 0.8), 0 0 60px rgba(255, 215, 0, 0.6)",
            }}
          />
          <TypewriterText
            text="✨ Forever and Always ✨"
            speed={80}
            delay={3000}
            className="text-2xl md:text-3xl text-yellow-200 block"
            style={{
              fontFamily: "Georgia, serif",
              textShadow: "0 0 20px rgba(255, 215, 0, 0.8)",
            }}
          />
        </div>

        {/* Animated Heart */}
        <div className="mb-12">
          <div
            className="text-9xl mb-8 cursor-pointer hover:scale-110 transition-transform duration-300 inline-block"
            onClick={handleClick}
            style={{
              animation: "heartbeat 1.5s ease-in-out infinite",
              filter: "drop-shadow(0 0 30px #ff0844) drop-shadow(0 0 60px #FFD700)",
            }}
          >
            💖
          </div>
        </div>

        {/* Royal Message */}
        <div className="max-w-2xl mx-4">
          <p className="text-white text-2xl md:text-3xl font-serif text-center leading-relaxed">
            💍 Click the heart to begin your royal experience, My Queen 👑
          </p>
          
          {/* Decorative Elements */}
          <div className="flex justify-center items-center mt-8 space-x-6">
            <span className="text-3xl animate-sparkle">✨</span>
            <span className="text-4xl">🌹</span>
            <span className="text-3xl animate-sparkle">✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};
