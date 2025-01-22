import { useEffect } from 'react';
import { useNProgress } from './useNprogressContext';

export const useDoneProgressBar = () => {
  const { setProgressBar, doneProgressBar } = useNProgress();

  useEffect(() => {
    setProgressBar(0.4);
    setProgressBar(0.8);
    doneProgressBar();
  }, [doneProgressBar, setProgressBar]);
};
