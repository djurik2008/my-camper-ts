import clsx from 'clsx';
import s from './container.module.scss';

const Container = ({ className, children }) => {
  return (
    <div className={clsx(s.container, className && className)}>{children}</div>
  );
};

export default Container;
