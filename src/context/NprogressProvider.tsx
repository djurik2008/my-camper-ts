import { createContext, ReactNode } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
  showSpinner: false,
  speed: 200,
});

type NprogressContextType = {
  startProgressBar: () => void;
  setProgressBar: (value: number) => void;
  doneProgressBar: () => void;
};

export const NprogressContext = createContext<NprogressContextType | null>(
  null
);

const NprogressProvider = ({ children }: { children: ReactNode }) => {
  const startProgressBar = () => NProgress.start();
  const setProgressBar = (value: number) => NProgress.set(value);
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
