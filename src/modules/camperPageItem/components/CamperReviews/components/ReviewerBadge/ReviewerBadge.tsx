import s from './reviewerBadge.module.scss';

const ReviewerBadge = ({ reviewerName }: { reviewerName: string }) => {
  const nameFirstLetter = reviewerName.charAt(0);

  return <span className={s.reviewerBadge}>{nameFirstLetter}</span>;
};

export default ReviewerBadge;
