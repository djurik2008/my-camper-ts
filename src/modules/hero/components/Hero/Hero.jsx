import { HeroTitle } from 'modules/hero';
import { LinkButton } from 'shared/components';
import { ROUTES } from 'shared/constants';
import { Container } from 'shared/components';
import s from './hero.module.scss';

const Hero = () => {
  return (
    <section className={s.heroSection}>
      <Container>
        <HeroTitle className={s.heroTitle} />
        <LinkButton text={'View Now'} linkTo={ROUTES.CATALOG} />
      </Container>
    </section>
  );
};

export default Hero;
