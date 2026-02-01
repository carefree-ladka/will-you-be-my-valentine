import { useEffect, useState } from 'react';
import { CONFIG } from '../config';
import type { ValentineState } from '../types';

export const useValentineState = () => {
  const [state, setState] = useState<ValentineState>({
    showMessage: false,
    showConfetti: false,
    saidYes: false,
    showCompliments: false,
    currentCompliment: 0,
    hasStarted: false,
  });

  useEffect(() => {
    if (!state.hasStarted) return;

    // Show compliments first
    const complimentTimer = setTimeout(() => {
      setState(prev => ({ ...prev, showCompliments: true }));
    }, 500);

    // Hide compliments and show main message
    const messageTimer = setTimeout(() => {
      setState(prev => ({ ...prev, showCompliments: false, showMessage: true }));
    }, CONFIG.animation.complimentDuration + CONFIG.animation.messageDelay);

    return () => {
      clearTimeout(complimentTimer);
      clearTimeout(messageTimer);
    };
  }, [state.hasStarted]);

  // Handle compliment progression
  useEffect(() => {
    if (!state.showCompliments) return;

    const compliments = CONFIG.text.compliments;
    if (state.currentCompliment >= compliments.length) return;

    const timer = setTimeout(() => {
      setState(prev => ({
        ...prev,
        currentCompliment: prev.currentCompliment + 1
      }));
    }, state.currentCompliment === 0 ? compliments[0].delay + 3000 : 3000);

    return () => clearTimeout(timer);
  }, [state.showCompliments, state.currentCompliment]);

  const handleStart = () => {
    setState(prev => ({ ...prev, hasStarted: true }));
  };

  const handleYesClick = () => {
    setState(prev => ({
      ...prev,
      saidYes: true,
      showConfetti: true
    }));
  };

  return {
    ...state,
    handleStart,
    handleYesClick,
  };
};
