import { useEffect, useRef } from 'react';
import musicFile from '../assets/music-for-valentine-cinematic-love-462815.mp3';

interface BackgroundMusicProps {
  shouldPlay: boolean;
}

export const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ shouldPlay }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && shouldPlay) {
      audio.volume = 0.3;
      audio.loop = true;
      audio.play().catch(() => {});
    }
  }, [shouldPlay]);

  return <audio ref={audioRef} src={musicFile} preload="auto" />;
};