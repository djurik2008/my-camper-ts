import { sprite } from 'shared/svg';
import s from './itemRatingLocation.module.scss';

const ItemRatingLocation = ({ rating, location }) => {
  return (
    <div className={s.ratingLocationContainer}>
      <p className={s.rating}>
        <svg className={s.ratingIcon}>
          <use href={sprite + '#star'}></use>
        </svg>
        {rating}
      </p>
      <p className={s.location}>
        <svg className={s.locationIcon}>
          <use href={sprite + '#map'}></use>
        </svg>
        {location}
      </p>
    </div>
  );
};

export default ItemRatingLocation;
