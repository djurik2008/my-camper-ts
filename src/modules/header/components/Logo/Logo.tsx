import { Link } from 'react-router-dom';
import { FC } from 'react';
import clsx from 'clsx';
import { sprite } from 'shared/svg';
import { ROUTES } from 'shared/constants';
import { ClassNameProp } from 'shared/types';
import s from './logo.module.scss';

const Logo: FC<ClassNameProp> = ({ className }) => {
  return (
    <Link to={ROUTES.HOME} className={clsx(className)}>
      <svg className={s.logo}>
        <use href={`${sprite}#icon-logo`}></use>
      </svg>
    </Link>
  );
};

export default Logo;
