import { Link } from 'react-router-dom';
import s from './logo.module.scss';
import { sprite } from 'shared/svg';
import { ROUTES } from 'shared/constants';

const Logo = ({ className }) => {
  return (
    <Link to={ROUTES.HOME} className={className && className}>
      <svg className={s.logo}>
        <use href={`${sprite}#TravelTrucks`}></use>
      </svg>
    </Link>
  );
};

export default Logo;
