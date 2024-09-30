import { NavLink } from 'react-router-dom';
import { ROUTES } from 'shared/constants';
import s from './menu.module.scss';
import clsx from 'clsx';

const Menu = () => {
  return (
    <ul className={s.navList}>
      <li className={s.navListItem}>
        <NavLink
          to={ROUTES.HOME}
          className={({ isActive }) =>
            clsx(s.navLink, isActive && s.activNavLink)
          }
        >
          Home
        </NavLink>
      </li>
      <li className={s.navListItem}>
        <NavLink
          to={ROUTES.CATALOG}
          className={({ isActive }) =>
            clsx(s.navLink, isActive && s.activNavLink)
          }
        >
          Catalog
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
