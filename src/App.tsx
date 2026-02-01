import { useWindowSize, useValentineState } from './hooks';
import { 
  ValentineScene, 
  ConfettiEffect, 
  SuccessMessage, 
  QuestionPrompt, 
  GlobalStyles,
  ComplimentDisplay,
  BackgroundMusic,
  StartScreen
} from './components';

export default function ValentineHeart() {
  const windowSize = useWindowSize();
  const { showMessage, showConfetti, saidYes, showCompliments, currentCompliment, hasStarted, handleStart, handleYesClick } = useValentineState();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {!hasStarted && <StartScreen onStart={handleStart} />}
      <BackgroundMusic shouldPlay={hasStarted} />
      <ValentineScene />
      <ComplimentDisplay show={showCompliments} currentCompliment={currentCompliment} />
      <ConfettiEffect windowSize={windowSize} show={showConfetti} />
      <SuccessMessage show={saidYes} />
      <QuestionPrompt 
        showMessage={showMessage} 
        saidYes={saidYes} 
        onYesClick={handleYesClick} 
      />
      <GlobalStyles />
    </div>
  );
}
