import clsx from 'clsx';
import { Loader } from '..';
import { ClassNameProp } from 'shared/types';
import s from './loadMoreButton.module.scss';

interface LoadMoreButtonProps extends ClassNameProp {
  onClick: () => void;
  isLoading: boolean;
}

const LoadMoreButton = ({
  onClick,
  className,
  isLoading,
}: LoadMoreButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(s.loadMoreBtn, className)}
      onClick={onClick}
    >
      {isLoading ? <Loader type={'button'} /> : 'Load more'}
    </button>
  );
};

export default LoadMoreButton;
