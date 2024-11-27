import clsx from 'clsx';
import s from './bookFormButton.module.scss';

const BookFormButton = ({ onClick, className = null }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(s.bookFormButton, className)}
    >
      Open booking form
    </button>
  );
};

export default BookFormButton;
