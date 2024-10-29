import { Container } from 'shared/components';
import { CamperRatingLocation } from 'shared/components';
import { CamperGallery } from '.';
import s from './camperPageItem.module.scss';

const CamperPageItem = ({ camper }) => {
  const { name, price, rating, location, description, reviews, gallery } =
    camper;

  return (
    <Container>
      <h2 className={s.camperName}>{name}</h2>
      <CamperRatingLocation
        rating={rating}
        location={location}
        reviewsCount={reviews.length}
      />
      <p className={s.camperPrice}>€{price.toFixed(2)}</p>
      <CamperGallery gallery={gallery} />
      <p className={s.camperDescription}>{description}</p>
    </Container>
  );
};

export default CamperPageItem;
