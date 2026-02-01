import { create } from 'zustand';
import { CONFIG } from '../config';

interface ValentineStore {
  // State
  showMessage: boolean;
  showConfetti: boolean;
  saidYes: boolean;
  showCompliments: boolean;
  currentCompliment: number;
  hasStarted: boolean;
  showTransition: boolean;
  showApologies: boolean;
  currentApology: number;
  
  // Actions
  handleStart: () => void;
  handleTransitionComplete: () => void;
  handleYesClick: () => void;
  nextCompliment: () => void;
  showApologySection: () => void;
  nextApology: () => void;
  reset: () => void;
}

export const useValentineStore = create<ValentineStore>((set, get) => ({
  // Initial state
  showMessage: false,
  showConfetti: false,
  saidYes: false,
  showCompliments: false,
  currentCompliment: 0,
  hasStarted: false,
  showTransition: false,
  showApologies: false,
  currentApology: 0,

  // Actions
  handleStart: () => set({ showTransition: true }),
  
  handleTransitionComplete: () => {
    set({ hasStarted: true, showTransition: false });
    
    // Start apologies first
    setTimeout(() => {
      set({ showApologies: true });
    }, 500);
    
    // Show compliments after apologies
    setTimeout(() => {
      set({ showApologies: false, showCompliments: true });
    }, CONFIG.text.apologyReasons.length * 3000 + 2000);
    
    // Show main message after compliments
    setTimeout(() => {
      set({ showCompliments: false, showMessage: true });
    }, CONFIG.text.apologyReasons.length * 3000 + CONFIG.animation.complimentDuration + CONFIG.animation.messageDelay + 2000);
  },
  
  handleYesClick: () => set({ saidYes: true, showConfetti: true }),
  
  nextCompliment: () => {
    const { currentCompliment } = get();
    const compliments = CONFIG.text.compliments;
    
    if (currentCompliment < compliments.length) {
      set({ currentCompliment: currentCompliment + 1 });
    }
  },
  
  showApologySection: () => set({ showApologies: true }),
  
  nextApology: () => {
    const { currentApology } = get();
    const apologies = CONFIG.text.apologyReasons;
    
    if (currentApology < apologies.length) {
      set({ currentApology: currentApology + 1 });
    }
  },
  
  reset: () => set({
    showMessage: false,
    showConfetti: false,
    saidYes: false,
    showCompliments: false,
    currentCompliment: 0,
    hasStarted: false,
    showTransition: false,
    showApologies: false,
    currentApology: 0,
  }),
}));