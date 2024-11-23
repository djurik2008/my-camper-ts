import { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ROUTES } from 'shared/constants';
import { useMedia } from 'hooks/useMedia';
import { useOutsideClickWithButton } from 'hooks/useOutsideClickWithButton';
import s from './menu.module.scss';
import clsx from 'clsx';

const Menu = ({
  className = '',
  isMobileMenuOpen,
  onClose,
  burgerButtonRef,
}) => {
  const menuRef = useRef(null);
  const { isMobile } = useMedia();
  const { pathname } = useLocation();

  useOutsideClickWithButton(
    menuRef,
    burgerButtonRef,
    isMobileMenuOpen,
    onClose
  );

  useEffect(() => {
    if (isMobileMenuOpen) {
      onClose();
    }
  }, [pathname]);

  return (
    <nav
      className={clsx(
        className,
        isMobile && s.mobileMenu,
        isMobileMenuOpen && s.open
      )}
      ref={menuRef}
    >
      <ul className={clsx(s.navList, isMobileMenuOpen && s.open)}>
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
            end
            className={({ isActive }) =>
              clsx(s.navLink, isActive && s.activNavLink)
            }
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
