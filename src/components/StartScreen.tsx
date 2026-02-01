interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const handleStart = () => {
    // Request fullscreen
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {});
    }
    onStart();
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-red-400 z-50">
      <div className="text-center">
        <div
          className="text-9xl mb-8 cursor-pointer hover:scale-110 transition-transform duration-300"
          onClick={handleStart}
          style={{
            animation: "heartbeat 1.5s ease-in-out infinite",
            filter: "drop-shadow(0 0 20px #ff0844)",
          }}
        >
          💖
        </div>
        <p className="text-white text-2xl font-serif">
          Click the heart to start
        </p>
      </div>
    </div>
  );
};
