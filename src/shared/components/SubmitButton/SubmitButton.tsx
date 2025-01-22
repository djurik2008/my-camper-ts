import clsx from 'clsx';
import { ClassNameProp } from 'shared/types';
import s from './submitButton.module.scss';

interface SubmitButtonProps extends ClassNameProp {
  text: string;
}

const SubmitButton = ({ text, className }: SubmitButtonProps) => {
  return (
    <button type="submit" className={clsx(s.submitButton, className)}>
      {text}
    </button>
  );
};

export default SubmitButton;
