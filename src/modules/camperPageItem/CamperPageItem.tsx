import { useState, useCallback } from 'react';
import { Container } from 'shared/components';
import { CamperRatingLocation, Modal } from 'shared/components';
import {
  CamperGallery,
  CamperGalleryMobile,
  FeaturesReviewsTabs,
  BookForm,
  BookFormButton,
} from '.';
import { useMedia } from 'hooks/useMedia';
import { Camper } from 'shared/types';
import s from './camperPageItem.module.scss';

const CamperPageItem = ({ camper }: { camper: Camper }) => {
  const { name, price, rating, location, description, reviews, gallery } =
    camper;
  const { isMobile, isTablet } = useMedia();

  const [isModalFormOpen, setIsModalFormOpen] = useState(false);

  const toggleModal = useCallback(() => setIsModalFormOpen((ps) => !ps), []);

  return (
    <Container className={s.camperPageItemContainer}>
      <main className={s.camperPageItemMain}>
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
        {isMobile || isTablet ? (
          <CamperGalleryMobile gallery={gallery} className={s.camperGallery} />
        ) : (
          <CamperGallery gallery={gallery} className={s.camperGallery} />
        )}
        <p className={s.camperDescription}>{description}</p>
      </main>
      {isMobile || isTablet ? (
        <>
          <BookFormButton onClick={toggleModal} />
          <FeaturesReviewsTabs />
          <Modal isOpen={isModalFormOpen} onClose={toggleModal}>
            <BookForm closeModal={toggleModal} isOpen={isModalFormOpen} />
          </Modal>
        </>
      ) : (
        <FeaturesReviewsTabs>
          <BookForm />
        </FeaturesReviewsTabs>
      )}
    </Container>
  );
};

export default CamperPageItem;
