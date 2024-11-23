import { forwardRef } from 'react';
import clsx from 'clsx';
import { sprite } from 'shared/svg';
import s from './filtersButton.module.scss';

const FiltersButton = forwardRef(({ className = null, onClick }, ref) => {
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
});

FiltersButton.displayName = 'FiltersButton';

export default FiltersButton;
