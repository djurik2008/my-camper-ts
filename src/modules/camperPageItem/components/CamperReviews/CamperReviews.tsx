import { useSelector } from 'react-redux';
import { selectCamper } from '@redux/camper/camperSelectors';
import { ReviewerBadge, ReviewerRate } from './components';
import { Review } from 'shared/types';
import s from './camperReviews.module.scss';

const CamperReviews = () => {
  const { reviews }: { reviews: Review[] } = useSelector(selectCamper);

  return (
    <ul className={s.reviewsList}>
      {reviews.map((review, idx) => (
        <li key={idx} className={s.reviewsItem}>
          <div className={s.badgeNameRatingContainer}>
            <ReviewerBadge reviewerName={review.reviewer_name} />
            <div className={s.nameRatingContainer}>
              <p className={s.reviewName}>{review.reviewer_name}</p>
              <ReviewerRate rating={review.reviewer_rating} />
            </div>
          </div>
          <p className={s.reviewComment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default CamperReviews;
