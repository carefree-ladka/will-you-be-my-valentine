export const generateHeartPositions = () =>
  Array.from({ length: 15 }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    fontSize: `${Math.random() * 30 + 15}px`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${Math.random() * 4 + 3}s`,
  }));
