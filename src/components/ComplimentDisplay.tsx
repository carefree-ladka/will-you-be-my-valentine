import { CONFIG } from "../config";

interface ComplimentDisplayProps {
  show: boolean;
  currentCompliment: number;
}

export const ComplimentDisplay: React.FC<ComplimentDisplayProps> = ({ 
  show, 
  currentCompliment 
}) => {
  if (!show) return null;

  const compliments = CONFIG.text.compliments;
  const maxVisible = 4;
  const startIndex = Math.max(0, currentCompliment - maxVisible);
  const visibleCompliments = compliments.slice(startIndex, currentCompliment);

  return (
    <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none bg-black/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-4 space-y-4 max-h-[80vh] overflow-hidden">
        {visibleCompliments.map((compliment, index) => {
          const originalIndex = startIndex + index;
          return (
            <div
              key={originalIndex}
              className="bg-gradient-to-r from-pink-900/95 to-purple-900/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl border-2 border-pink-400/50"
              style={{
                animation: `slideIn 0.8s ease-out ${index * 0.2}s both`,
                boxShadow: "0 0 40px rgba(255, 8, 68, 0.4)",
              }}
            >
              <h3
                className="text-2xl md:text-3xl font-bold text-white text-center mb-3"
                style={{
                  textShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
                  fontFamily: "Georgia, serif",
                }}
              >
                {compliment.title}
              </h3>
              <p
                className="text-lg md:text-xl text-pink-100 text-center leading-relaxed"
                style={{
                  fontFamily: "Georgia, serif",
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                }}
              >
                {compliment.message}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};