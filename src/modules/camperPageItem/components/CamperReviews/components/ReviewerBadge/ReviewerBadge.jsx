import s from './reviewerBadge.module.scss';

const ReviewerBadge = ({ reviewerName }) => {
  const nameFirstLetter = reviewerName.charAt(0);

  return <span className={s.reviewerBadge}>{nameFirstLetter}</span>;
};

export default ReviewerBadge;
