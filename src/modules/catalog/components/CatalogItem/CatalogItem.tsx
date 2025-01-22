import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@redux/store';
import { ItemImage, ItemNamePriceHeart } from './components';
import {
  BadgesList,
  LinkButton,
  CamperRatingLocation,
} from 'shared/components';
import { ROUTES } from 'shared/constants';
import { selectSelected } from '@redux/campers/campersSelectors';
import { changeSelected } from '@redux/campers/campersSlice';
import { MAIN_CAMP_ADVANTAGES } from 'shared/constants';
import { Camper } from 'shared/types';
import { useMedia } from 'hooks/useMedia';
import s from './catalogItem.module.scss';

const CatalogItem = ({ camper }: { camper: Camper }) => {
  const { id, name, price, rating, location, description, reviews } = camper;
  const dispatch = useDispatch<AppDispatch>();
  const { isMobile } = useMedia();
  const selectedCampersId = useAppSelector(selectSelected);
  const isSelected = selectedCampersId.includes(id);
  const handleSelectionChange = (id: string) => dispatch(changeSelected(id));
  const imgUrl = camper.gallery[0].thumb;

  return (
    <div className={s.catalogItemContainer}>
      <ItemImage imgUrl={imgUrl} imgAlt={name} className={s.camperImg} />
      <div className={s.detailsContainer}>
        <div>
          <ItemNamePriceHeart
            id={id}
            price={price}
            name={name}
            onChange={handleSelectionChange}
            isSelected={isSelected}
            className={s.camperNamePriceHeart}
          />
          <CamperRatingLocation
            rating={rating}
            location={location}
            reviewsCount={reviews.length}
          />
        </div>
        {!isMobile && <p className={s.description}>{description}</p>}
        <BadgesList advantageKeys={MAIN_CAMP_ADVANTAGES} camperData={camper} />
        <LinkButton
          text={'Show more'}
          linkTo={ROUTES.CATALOG + `/${id}`}
          className={s.showMoreBtn}
        />
      </div>
    </div>
  );
};

export default CatalogItem;
