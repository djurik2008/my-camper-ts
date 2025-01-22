import { ReactNode } from 'react';
import clsx from 'clsx';
import { ClassNameProp } from 'shared/types';
import s from './container.module.scss';

interface ContainerProps extends ClassNameProp {
  children: ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return <div className={clsx(s.container, className)}>{children}</div>;
};

export default Container;
