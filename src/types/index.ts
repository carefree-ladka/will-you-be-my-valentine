export interface ValentineConfig {
  colors: {
    background: string;
    heartPrimary: string;
    heartSecondary: string;
    particleColor: string;
    textGlow: string;
  };
  text: {
    question: string;
    valentine: string;
    yesButton: string;
    maybeButton: string;
    noButtonTexts: string[];
    successTitle: string;
    successMessages: string[];
    apologyReasons: string[];
    compliments: {
      title: string;
      message: string;
      delay: number;
    }[];
  };
  animation: {
    heartbeatSpeed: number;
    particleCount: number;
    confettiPieces: number;
    messageDelay: number;
    complimentDuration: number;
  };
}

export interface WindowSize {
  width: number;
  height: number;
}

export interface ValentineState {
  showMessage: boolean;
  showConfetti: boolean;
  saidYes: boolean;
  showCompliments: boolean;
  currentCompliment: number;
  hasStarted: boolean;
  showTransition: boolean;
}