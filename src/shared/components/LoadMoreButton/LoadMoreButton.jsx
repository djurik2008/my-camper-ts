import clsx from 'clsx';
import { Loader } from '..';
import s from './loadMoreButton.module.scss';

const LoadMoreButton = ({ funk, className = null, isLoading }) => {
  return (
    <button
      type="button"
      className={clsx(s.loadMoreBtn, className && className)}
      onClick={() => funk()}
    >
      {isLoading ? <Loader type={'button'} /> : 'Load more'}
    </button>
  );
};

export default LoadMoreButton;
