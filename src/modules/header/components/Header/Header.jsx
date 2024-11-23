import { useState, useCallback, useRef } from 'react';
import { useMedia } from 'hooks/useMedia';
import { Logo, Menu } from 'modules/header';
import { Container } from 'shared/components';
import { BurgerButton } from 'modules/header';
import s from './header.module.scss';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const media = useMedia();
  const burgerButtonRef = useRef(null);

  const handleMenuToggle = useCallback(() => {
    setMobileMenuOpen((ps) => !ps);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header className={s.header}>
      <Container className={s.headerWrapper}>
        <Logo className={s.headerLogo} />
        <Menu
          className={!media.isMobile ? s.menuCenter : ''}
          isMobileMenuOpen={isMobileMenuOpen}
          onClose={handleCloseMenu}
          burgerButtonRef={burgerButtonRef}
        />
        {media.isMobile && (
          <BurgerButton
            className={s.mobileMenuButton}
            onClick={handleMenuToggle}
            isOpen={isMobileMenuOpen}
            ref={burgerButtonRef}
          />
        )}
      </Container>
    </header>
  );
};

export default Header;
