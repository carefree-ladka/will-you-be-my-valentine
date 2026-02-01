import { useThreeScene } from "../hooks/useThreeScene";

export const ValentineScene: React.FC = () => {
  const mountRef = useThreeScene();

  return <div ref={mountRef} className="absolute inset-0" />;
};