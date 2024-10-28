import s from './loadMoreButton.module.scss';

const LoadMoreButton = ({ funk }) => {
  return (
    <button type="button" className={s.loadMoreBtn} onClick={() => funk()}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
