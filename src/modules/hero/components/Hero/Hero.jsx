import { HeroTitle, HeroLinkButton } from 'modules/hero';
import s from './hero.module.scss';

const Hero = () => {
  return (
    <section className={s.heroSection}>
      <HeroTitle className={s.heroTitle} />
      <HeroLinkButton />
    </section>
  );
};

export default Hero;
