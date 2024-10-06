import clsx from 'clsx';
import s from './itemImage.module.scss';

const ItemImage = ({ className = null, imgUrl, imgAlt }) => {
  return (
    <img
      src={imgUrl}
      alt={imgAlt}
      className={clsx(s.itemImage, className && className)}
      width={292}
    />
  );
};

export default ItemImage;
