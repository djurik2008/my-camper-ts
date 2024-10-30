import { sprite } from 'shared/svg';
import s from './reviewerRate.module.scss';

const ReviewerRate = ({ rating }) => {
  const stars = Array.from({ length: Math.min(rating, 5) }, (_, i) => (
    <li key={i}>
      <svg className={s.star}>
        <use href={`${sprite}#star`}></use>
      </svg>
    </li>
  ));

  return <ul className={s.rateStarsList}>{stars}</ul>;
};

export default ReviewerRate;
