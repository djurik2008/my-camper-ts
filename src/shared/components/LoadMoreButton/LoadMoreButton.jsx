import clsx from 'clsx';
import s from './loadMoreButton.module.scss';

const LoadMoreButton = ({ funk, className = null }) => {
  return (
    <button
      type="button"
      className={clsx(s.loadMoreBtn, className && className)}
      onClick={() => funk()}
    >
      Load more
    </button>
  );
};

export default LoadMoreButton;
