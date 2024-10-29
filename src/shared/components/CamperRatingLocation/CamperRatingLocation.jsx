import clsx from 'clsx';
import { sprite } from 'shared/svg';
import s from './camperRatingLocation.module.scss';

const CamperRatingLocation = ({
  rating,
  location,
  reviewsCount,
  className = null,
}) => {
  return (
    <div className={clsx(s.ratingLocationContainer, className && className)}>
      <p className={s.rating}>
        <svg className={s.ratingIcon}>
          <use href={sprite + '#star'}></use>
        </svg>
        {rating + `(${reviewsCount} Reviews)`}
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

export default CamperRatingLocation;
