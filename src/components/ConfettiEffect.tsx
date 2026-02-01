import Confetti from "react-confetti";
import { CONFIG } from "../config";
import { useWindowSize } from "../hooks";
import { useValentineStore } from "../store/valentineStore";

export const ConfettiEffect: React.FC = () => {
  const windowSize = useWindowSize();
  const { showConfetti } = useValentineStore();
  
  if (!showConfetti) return null;

  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      numberOfPieces={CONFIG.animation.confettiPieces}
      recycle={true}
      colors={[
        "#ff0844",
        "#ff1744",
        "#ff6b9d",
        "#ff4081",
        "#f50057",
        "#ff80ab",
      ]}
    />
  );
};
