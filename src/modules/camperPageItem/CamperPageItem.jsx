import { Container } from 'shared/components';
import { CamperRatingLocation } from 'shared/components';
import { CamperGallery, FeaturesReviewsTabs, BookForm } from '.';
import s from './camperPageItem.module.scss';

const CamperPageItem = ({ camper }) => {
  const { name, price, rating, location, description, reviews, gallery } =
    camper;

  return (
    <Container className={s.camperPageItemContainer}>
      <main>
        <h1 className="visuallyHidden ">
          Page with information about camper car
        </h1>
        <h2 className={s.camperName}>{name}</h2>
        <CamperRatingLocation
          rating={rating}
          location={location}
          reviewsCount={reviews.length}
          className={s.camperRatingLocationBlok}
        />
        <p className={s.camperPrice}>€{price.toFixed(2)}</p>
        <CamperGallery gallery={gallery} className={s.camperGallery} />
        <p className={s.camperDescription}>{description}</p>
      </main>
      <FeaturesReviewsTabs>
        <BookForm />
      </FeaturesReviewsTabs>
    </Container>
  );
};

export default CamperPageItem;
