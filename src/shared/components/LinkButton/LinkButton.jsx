import { Link } from 'react-router-dom';
import clsx from 'clsx';
import s from './linkButton.module.scss';

const LinkButton = ({ text, linkTo, className = null }) => {
  //linkTo - shared/constants - ROUTES
  return (
    <Link to={linkTo} className={clsx(s.linkButton, className)}>
      {text}
    </Link>
  );
};

export default LinkButton;
