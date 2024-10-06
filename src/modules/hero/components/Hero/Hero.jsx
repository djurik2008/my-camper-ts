import { HeroTitle } from 'modules/hero';
import { LinkButton } from 'shared/components';
import { ROUTES } from 'shared/constants';
import s from './hero.module.scss';

const Hero = () => {
  return (
    <section className={s.heroSection}>
      <HeroTitle className={s.heroTitle} />
      <LinkButton text={'View Now'} linkTo={ROUTES.CATALOG} />
    </section>
  );
};

export default Hero;
