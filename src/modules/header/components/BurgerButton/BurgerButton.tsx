import { forwardRef } from 'react';
import clsx from 'clsx';
import { sprite } from 'shared/svg';
import { ClassNameProp } from 'shared/types';
import s from './burgerButton.module.scss';

interface BurgerButtonProps extends ClassNameProp {
  onClick: () => void;
  isOpen: boolean;
}

const BurgerButton = forwardRef<HTMLButtonElement, BurgerButtonProps>(
  ({ onClick, isOpen, className }, ref) => {
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
