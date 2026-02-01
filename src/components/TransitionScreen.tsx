import { LayeredText } from './LayeredText';
import { useValentineStore } from '../store/valentineStore';

export const TransitionScreen: React.FC = () => {
  const { showTransition, handleTransitionComplete } = useValentineStore();
  
  if (!showTransition) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-purple-900/80 to-pink-900/80 z-40">
      <LayeredText
        text="I LOVE YOU"
        onComplete={handleTransitionComplete}
        className="text-8xl md:text-9xl font-bold"
        style={{
          fontFamily: "Georgia, serif",
          color: "#FFD700",
          textShadow: "0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 8, 68, 0.6)",
          width: "8em",
          height: "1.2em",
        }}
      />
    </div>
  );
};