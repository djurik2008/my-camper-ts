import clsx from 'clsx';
import { sprite } from 'shared/svg';
import { ClassNameProp } from 'shared/types';
import s from './camperRatingLocation.module.scss';

interface CamperRatingLocationProps extends ClassNameProp {
  rating: number;
  location: string;
  reviewsCount: number;
}

const CamperRatingLocation = ({
  rating,
  location,
  reviewsCount,
  className,
}: CamperRatingLocationProps) => {
  return (
    <div className={clsx(s.ratingLocationContainer, className)}>
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
