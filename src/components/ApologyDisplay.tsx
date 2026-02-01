import { CONFIG } from "../config";
import { useValentineStore } from "../store/valentineStore";
import { useApologyProgression } from "../hooks";

export const ApologyDisplay: React.FC = () => {
  const { showApologies, currentApology } = useValentineStore();
  useApologyProgression();
  
  if (!showApologies) return null;

  const apologies = CONFIG.text.apologyReasons;
  const activeApology = apologies[currentApology - 1];

  if (!activeApology) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none bg-gradient-to-br from-red-900/90 via-pink-900/90 to-purple-900/90 backdrop-blur-sm">
      <div className="max-w-4xl mx-4 w-full relative">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-pulse" style={{
            textShadow: "0 0 40px rgba(255, 0, 0, 0.8), 0 0 60px rgba(255, 8, 68, 0.6)",
            fontFamily: "Georgia, serif",
          }}>
            I'm Sorry, Shruti 💔
          </h1>
          <p className="text-xl md:text-2xl text-red-200 mb-4" style={{
            fontFamily: "Georgia, serif",
            textShadow: "0 0 20px rgba(255, 0, 0, 0.8)",
          }}>
            {currentApology} of {apologies.length} reasons why I'm truly sorry
          </p>
        </div>

        <div
          key={currentApology}
          className="relative bg-gradient-to-br from-white/95 via-red-50/95 to-pink-100/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border-4 border-red-300/60 text-center transform transition-all duration-700 animate-slide-in-right"
          style={{
            boxShadow: "0 0 80px rgba(255, 0, 0, 0.4), 0 0 120px rgba(255, 8, 68, 0.3)",
            minHeight: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-white text-lg font-bold shadow-lg">
              💔 Reason {currentApology} 💔
            </span>
          </div>
          
          <p
            className="text-xl md:text-3xl leading-relaxed max-w-3xl mx-auto text-gray-800 font-medium"
            style={{
              fontFamily: "Georgia, serif",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              lineHeight: "1.6",
            }}
          >
            {activeApology}
          </p>
        </div>
        
        <div className="mt-8 text-center">
          <div className="w-full bg-gradient-to-r from-red-200/30 via-pink-200/30 to-purple-200/30 rounded-full h-3 max-w-lg mx-auto border border-red-300/30">
            <div 
              className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 h-3 rounded-full transition-all duration-700 shadow-lg"
              style={{ width: `${(currentApology / apologies.length) * 100}%` }}
            />
          </div>
          
          <p className="text-red-200 mt-4 text-lg" style={{ fontFamily: "Georgia, serif" }}>
            💔 From the depths of my heart 💔
          </p>
        </div>
      </div>
    </div>
  );
};