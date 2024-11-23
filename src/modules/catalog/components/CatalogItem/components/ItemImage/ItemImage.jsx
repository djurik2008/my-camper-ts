import clsx from 'clsx';
import s from './itemImage.module.scss';

const ItemImage = ({ className = null, imgUrl, imgAlt }) => {
  return (
    <img
      src={imgUrl}
      alt={imgAlt}
      className={clsx(s.itemImage, className)}
      width="292"
      height="320"
      loading="lazy"
    />
  );
};

export default ItemImage;
