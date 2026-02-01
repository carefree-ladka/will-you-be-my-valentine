import { CONFIG } from "../config";
import { useComplimentProgression } from "../hooks";
import { useValentineStore } from "../store/valentineStore";

export const ComplimentDisplay: React.FC = () => {
  const { showCompliments, currentCompliment } = useValentineStore();
  useComplimentProgression();
  
  if (!showCompliments) return null;

  const compliments = CONFIG.text.compliments;
  const activeCompliment = compliments[currentCompliment - 1];

  if (!activeCompliment) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none bg-gradient-to-br from-pink-900/90 via-purple-900/90 to-rose-900/90 backdrop-blur-sm">
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-4 w-full relative">
        {/* Wedding-style Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <span className="text-6xl animate-pulse">💍</span>
            <span className="text-4xl mx-4">✨</span>
            <span className="text-6xl animate-pulse">💍</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-pulse" style={{
            textShadow: "0 0 40px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 8, 68, 0.6)",
            fontFamily: "Georgia, serif",
            background: "linear-gradient(45deg, #FFD700, #FF69B4, #FFD700)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            My Queen Shruti 👑
          </h1>
          <p className="text-2xl md:text-3xl text-yellow-200 mb-4" style={{
            fontFamily: "Georgia, serif",
            textShadow: "0 0 20px rgba(255, 215, 0, 0.8)",
          }}>
            ✨ Why You Deserve The World ✨
          </p>
          <div className="flex justify-center items-center space-x-4">
            <span className="text-2xl">🌹</span>
            <span className="text-xl text-pink-200">Step {currentCompliment} of {compliments.length}</span>
            <span className="text-2xl">🌹</span>
          </div>
        </div>

        {/* Elegant Card */}
        <div
          key={currentCompliment}
          className="relative bg-gradient-to-br from-white/95 via-pink-50/95 to-rose-100/95 backdrop-blur-md rounded-3xl p-8 md:p-16 shadow-2xl border-4 border-yellow-300/60 text-center transform transition-all duration-700 animate-slide-in-right"
          style={{
            boxShadow: "0 0 80px rgba(255, 215, 0, 0.4), 0 0 120px rgba(255, 8, 68, 0.3), inset 0 0 60px rgba(255, 255, 255, 0.1)",
            minHeight: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 text-3xl text-yellow-500">✨</div>
          <div className="absolute top-4 right-4 text-3xl text-yellow-500">✨</div>
          <div className="absolute bottom-4 left-4 text-3xl text-yellow-500">✨</div>
          <div className="absolute bottom-4 right-4 text-3xl text-yellow-500">✨</div>
          
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full text-white text-lg font-bold shadow-lg">
              💎 Step {currentCompliment} 💎
            </span>
          </div>
          
          <h3
            className="text-4xl md:text-6xl font-bold mb-8"
            style={{
              textShadow: "0 0 30px rgba(255, 215, 0, 0.8)",
              fontFamily: "Georgia, serif",
              background: "linear-gradient(45deg, #8B0000, #DC143C, #FF1493)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {activeCompliment.title}
          </h3>
          
          <p
            className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto text-gray-800"
            style={{
              fontFamily: "Georgia, serif",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              lineHeight: "1.8",
            }}
          >
            {activeCompliment.message}
          </p>
          
          {/* Decorative divider */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
            <span className="text-3xl">💖</span>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent"></div>
          </div>
        </div>
        
        {/* Elegant Progress Section */}
        <div className="mt-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex space-x-3">
              {compliments.map((_, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 rounded-full transition-all duration-500 border-2 ${
                    index < currentCompliment 
                      ? 'bg-gradient-to-r from-yellow-400 to-pink-400 border-yellow-300 scale-125 shadow-lg' 
                      : 'bg-pink-200/50 border-pink-300/50'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="w-full bg-gradient-to-r from-pink-200/30 via-purple-200/30 to-rose-200/30 rounded-full h-3 max-w-lg mx-auto border border-pink-300/30">
            <div 
              className="bg-gradient-to-r from-yellow-400 via-pink-400 to-rose-400 h-3 rounded-full transition-all duration-700 shadow-lg"
              style={{ width: `${(currentCompliment / compliments.length) * 100}%` }}
            />
          </div>
          
          <p className="text-yellow-200 mt-4 text-lg" style={{ fontFamily: "Georgia, serif" }}>
            🌹 Creating memories just for you 🌹
          </p>
        </div>
      </div>
    </div>
  );
};