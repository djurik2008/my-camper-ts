import clsx from 'clsx';
import { ClassNameProp } from 'shared/types';
import s from './bookFormButton.module.scss';

interface BookFormButtonProps extends ClassNameProp {
  onClick: () => void;
}

const BookFormButton = ({ onClick, className }: BookFormButtonProps) => {
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
