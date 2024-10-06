import { useDispatch, useSelector } from 'react-redux';
import {
  ItemImage,
  ItemNamePriceHeart,
  ItemRatingLocation,
} from './components';
import { BadgesList, LinkButton } from 'shared/components';
import { ROUTES } from 'shared/constants';
import { selectSelected } from '@redux/campers/campersSelectors';
import { changeSelected } from '@redux/campers/campersSlice';
import { MAIN_CAMP_ADVANTAGES } from 'shared/constants';
import s from './catalogItem.module.scss';

const CatalogItem = ({ camper }) => {
  const { id, name, price, rating, location, description } = camper;
  const dispatch = useDispatch();
  const selectedCampersId = useSelector(selectSelected);
  const isSelected = selectedCampersId.includes(id);
  const handleSelectionChange = (id) => dispatch(changeSelected(id));
  const imgUrl = camper.gallery[0].original;

  return (
    <div className={s.catalogItemContainer}>
      <ItemImage imgUrl={imgUrl} />
      <div className={s.detailsContainer}>
        <div>
          <ItemNamePriceHeart
            id={id}
            price={price}
            name={name}
            func={handleSelectionChange}
            isSelected={isSelected}
            className={s.namePrice}
          />
          <ItemRatingLocation rating={rating} location={location} />
        </div>
        <p className={s.description}>{description}</p>
        <BadgesList advantageKeys={MAIN_CAMP_ADVANTAGES} camperData={camper} />
        <LinkButton text={'Show more'} linkTo={ROUTES.CATALOG + `/${id}`} />
      </div>
    </div>
  );
};

export default CatalogItem;
