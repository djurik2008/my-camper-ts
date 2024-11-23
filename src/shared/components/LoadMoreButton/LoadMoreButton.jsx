import clsx from 'clsx';
import { Loader } from '..';
import s from './loadMoreButton.module.scss';

const LoadMoreButton = ({ onClick, className = '', isLoading }) => {
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
