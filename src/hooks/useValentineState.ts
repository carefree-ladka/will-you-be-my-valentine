import { useEffect } from 'react';
import { CONFIG } from '../config';
import { useValentineStore } from '../store/valentineStore';

export const useComplimentProgression = () => {
  const { showCompliments, currentCompliment, nextCompliment } = useValentineStore();

  useEffect(() => {
    if (!showCompliments) return;

    const compliments = CONFIG.text.compliments;
    if (currentCompliment >= compliments.length) return;

    const timer = setTimeout(() => {
      nextCompliment();
    }, 8000);

    return () => clearTimeout(timer);
  }, [showCompliments, currentCompliment, nextCompliment]);
};

export const useApologyProgression = () => {
  const { showApologies, currentApology, nextApology } = useValentineStore();

  useEffect(() => {
    if (!showApologies) return;

    const apologies = CONFIG.text.apologyReasons;
    if (currentApology >= apologies.length) return;

    const timer = setTimeout(() => {
      nextApology();
    }, 3000);

    return () => clearTimeout(timer);
  }, [showApologies, currentApology, nextApology]);
};
