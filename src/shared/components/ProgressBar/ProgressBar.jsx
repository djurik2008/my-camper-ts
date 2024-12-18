import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNProgress } from 'hooks/useNprogressContext';

const ProgressBar = () => {
  const { pathname } = useLocation();
  const { startProgressBar } = useNProgress();

  useEffect(() => {
    startProgressBar();
  }, [pathname, startProgressBar]);

  return null;
};

export default ProgressBar;
