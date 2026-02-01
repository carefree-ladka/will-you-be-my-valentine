import {
  BackgroundMusic,
  ComplimentDisplay,
  ApologyDisplay,
  ConfettiEffect,
  GlobalStyles,
  QuestionPrompt,
  StartScreen,
  SuccessMessage,
  TransitionScreen,
  ValentineScene,
  LoveLetter,
} from "./components";

export default function ValentineHeart() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <StartScreen />
      <TransitionScreen />
      <BackgroundMusic />
      <ValentineScene />
      <ApologyDisplay />
      <ComplimentDisplay />
      <ConfettiEffect />
      <SuccessMessage />
      <QuestionPrompt />
      <LoveLetter />
      <GlobalStyles />
    </div>
  );
}
