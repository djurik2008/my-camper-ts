import { FC } from 'react';
import clsx from 'clsx';
import { ClassNameProp } from 'shared/types';
import s from './heroTitle.module.scss';

const HeroTitle: FC<ClassNameProp> = ({ className = null }) => {
  return (
    <div className={clsx(s.titleWrapper, className)}>
      <h1 className={s.mainTitle}>Campers of your dreams</h1>
      <p className={s.description}>
        You can find everything you want in our catalog
      </p>
    </div>
  );
};

export default HeroTitle;
