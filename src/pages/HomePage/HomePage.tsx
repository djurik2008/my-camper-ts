import { Hero } from 'modules/hero';
import { useDoneProgressBar } from 'hooks/useDoneProgressBar';

const HomePage = () => {
  useDoneProgressBar();

  return <Hero />;
};

export default HomePage;
