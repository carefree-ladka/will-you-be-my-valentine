import { useEffect, useRef } from "react";
import musicFile from "../assets/how-do-I-stop-loving-you.mp3";
import { useValentineStore } from "../store/valentineStore";

export const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { hasStarted } = useValentineStore();

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && hasStarted) {
      audio.volume = 0.3;
      audio.loop = true;
      audio.play().catch(() => {
        console.log("Autoplay blocked or failed");
      });
    }
  }, [hasStarted]);

  return <audio ref={audioRef} src={musicFile} preload="auto" />;
};
