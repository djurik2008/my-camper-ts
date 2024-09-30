import clsx from 'clsx';
import s from './heroTitle.module.scss';

const HeroTitle = ({ className }) => {
  return (
    <div className={clsx(s.titleWrapper, className && className)}>
      <h1 className={s.mainTitle}>Campers of your dreams</h1>
      <p className={s.description}>
        You can find everything you want in our catalog
      </p>
    </div>
  );
};

export default HeroTitle;
