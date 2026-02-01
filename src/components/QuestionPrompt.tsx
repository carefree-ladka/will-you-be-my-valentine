import { CONFIG } from "../config";
import { useValentineStore } from "../store/valentineStore";

export const QuestionPrompt: React.FC = () => {
  const { showMessage, saidYes, handleYesClick } = useValentineStore();
  
  if (saidYes) return null;

  const handleMaybeButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const randomX = Math.random() * (window.innerWidth - 200);
    const randomY = Math.random() * (window.innerHeight - 100);
    target.style.position = "fixed";
    target.style.left = randomX + "px";
    target.style.top = randomY + "px";
  };

  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-all duration-1000 ${
        showMessage ? "opacity-100" : "opacity-0"
      }`}
    >
      <h1
        className="text-6xl md:text-6xl font-bold text-white mb-8 animate-pulse"
        style={{
          textShadow: `0 0 20px ${CONFIG.colors.textGlow}, 0 0 40px rgba(255, 8, 68, 0.6), 0 0 60px rgba(255, 8, 68, 0.4)`,
          fontFamily: "Georgia, serif",
        }}
      >
        {CONFIG.text.question}
      </h1>
      <h2
        className="text-7xl md:text-8xl font-bold text-red-500 mb-12"
        style={{
          textShadow:
            "0 0 30px rgba(255, 23, 68, 1), 0 0 60px rgba(255, 23, 68, 0.8)",
          fontFamily: "Georgia, serif",
          animation: `heartbeat ${CONFIG.animation.heartbeatSpeed}s ease-in-out infinite`,
        }}
      >
        {CONFIG.text.valentine}
      </h2>

      <div className="flex gap-6 pointer-events-auto">
        <button
          className="px-12 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-2xl font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
          style={{
            boxShadow: "0 0 20px rgba(255, 23, 68, 0.6)",
          }}
          onClick={handleYesClick}
        >
          {CONFIG.text.yesButton}
        </button>

        <button
          className="px-12 py-4 bg-gray-800 text-white text-2xl font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-red-400"
          onMouseEnter={handleMaybeButtonHover}
        >
          {CONFIG.text.maybeButton}
        </button>
      </div>
    </div>
  );
};
