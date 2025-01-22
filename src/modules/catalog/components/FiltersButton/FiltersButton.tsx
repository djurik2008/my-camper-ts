import { forwardRef } from 'react';
import clsx from 'clsx';
import { sprite } from 'shared/svg';
import { ClassNameProp } from 'shared/types';
import s from './filtersButton.module.scss';

interface FiltersButtonProps extends ClassNameProp {
  onClick: () => void;
}

const FiltersButton = forwardRef<HTMLButtonElement, FiltersButtonProps>(
  ({ className, onClick }, ref) => {
    return (
      <button
        type="button"
        className={clsx(s.filtersButton, className)}
        onClick={onClick}
        ref={ref}
      >
        <p className={s.buttonText}>Set filters</p>
        <svg className={s.buttonIcon}>
          <use href={sprite + '#filters'}></use>
        </svg>
      </button>
    );
  }
);

FiltersButton.displayName = 'FiltersButton';

export default FiltersButton;
