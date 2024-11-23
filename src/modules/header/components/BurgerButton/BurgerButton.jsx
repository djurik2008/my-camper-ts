import { forwardRef } from 'react';
import clsx from 'clsx';
import { sprite } from 'shared/svg';
import s from './burgerButton.module.scss';

const BurgerButton = forwardRef(
  ({ onClick, isOpen, className = null }, ref) => {
    return (
      <button
        type="button"
        className={clsx(s.burgerBatton, isOpen && s.isOpen, className)}
        onClick={onClick}
        ref={ref}
      >
        <svg className={s.icon}>
          {isOpen ? (
            <use href={sprite + '#close'} />
          ) : (
            <use href={sprite + '#burger'} />
          )}
        </svg>
      </button>
    );
  }
);

BurgerButton.displayName = 'BurgerButton';

export default BurgerButton;
