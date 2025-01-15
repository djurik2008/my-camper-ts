import { ReactNode, FC } from 'react';
import clsx from 'clsx';
import { ClassNameProp } from 'shared/types';
import s from './container.module.scss';

interface ContainerProps extends ClassNameProp {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ className = null, children }) => {
  return <div className={clsx(s.container, className)}>{children}</div>;
};

export default Container;
