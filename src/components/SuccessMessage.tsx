import { CONFIG } from "../config";
import { useValentineStore } from "../store/valentineStore";

export const SuccessMessage: React.FC = () => {
  const { saidYes } = useValentineStore();
  
  if (!saidYes) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
      <div
        className="bg-gradient-to-br from-pink-900/95 to-red-900/95 backdrop-blur-sm rounded-3xl p-12 max-w-2xl mx-4 shadow-2xl border-4 border-pink-400 animate-bounce-in"
        style={{
          boxShadow:
            "0 0 60px rgba(255, 8, 68, 0.8), 0 0 100px rgba(255, 107, 157, 0.6)",
          animation: "slideIn 0.5s ease-out",
        }}
      >
        <h2
          className="text-4xl md:text-6xl font-bold text-white text-center mb-6"
          style={{
            textShadow: "0 0 20px rgba(255, 255, 255, 0.8)",
            fontFamily: "Georgia, serif",
          }}
        >
          {CONFIG.text.successTitle}
        </h2>

        <div className="space-y-4">
          {CONFIG.text.successMessages.map((msg, index) => (
            <p
              key={index}
              className="text-xl md:text-2xl text-pink-100 text-center animate-fade-in"
              style={{
                animationDelay: `${index * 0.2}s`,
                fontFamily: "Georgia, serif",
                textShadow: "0 2px 4px rgba(0,0,0,0.5)",
              }}
            >
              {msg}
            </p>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="inline-block">
            {["💕", "💖", "💗", "💓", "💝", "❤️", "🌹", "✨"].map(
              (emoji, i) => (
                <span
                  key={i}
                  className="text-4xl mx-2 inline-block animate-float"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    display: "inline-block",
                  }}
                >
                  {emoji}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};