import { Link } from 'react-router-dom';
import s from './linkButton.module.scss';

const LinkButton = ({ text, linkTo }) => {
  //linkTo - shared/constants - ROUTES
  return (
    <Link to={linkTo} className={s.linkButton}>
      {text}
    </Link>
  );
};

export default LinkButton;
