import { Link } from 'react-router-dom';
import { ROUTES } from 'shared/constants';
import s from './heroLinkButton.module.scss';

const HeroLinkButton = () => {
  return (
    <Link to={ROUTES.CATALOG} className={s.linkButton}>
      View Now
    </Link>
  );
};

export default HeroLinkButton;
