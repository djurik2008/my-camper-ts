import { Logo, Menu } from 'modules/header';
import s from './header.module.scss';
import { Container } from 'shared/components';

const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.headerWrapper}>
        <Logo className={s.headerLogo} />
        <Menu />
      </Container>
    </header>
  );
};

export default Header;
