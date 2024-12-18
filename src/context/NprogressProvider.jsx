import { createContext } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
  showSpinner: false,
  speed: 200,
});

export const NprogressContext = createContext();

const NprogressProvider = ({ children }) => {
  const startProgressBar = () => NProgress.start();
  const setProgressBar = (value) => NProgress.set(value);
  const doneProgressBar = () => NProgress.done();

  return (
    <NprogressContext.Provider
      value={{ startProgressBar, setProgressBar, doneProgressBar }}
    >
      {children}
    </NprogressContext.Provider>
  );
};

export default NprogressProvider;
