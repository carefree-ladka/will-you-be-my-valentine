import Confetti from "react-confetti";
import type { WindowSize } from "../types";
import { CONFIG } from "../config";

interface ConfettiEffectProps {
  windowSize: WindowSize;
  show: boolean;
}

export const ConfettiEffect: React.FC<ConfettiEffectProps> = ({ windowSize, show }) => {
  if (!show) return null;

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
