import clsx from 'clsx';
import s from './submitButton.module.scss';

const SubmitButton = ({ text, className = null }) => {
  return (
    <button type="submit" className={clsx(s.submitButton, className)}>
      {text}
    </button>
  );
};

export default SubmitButton;
