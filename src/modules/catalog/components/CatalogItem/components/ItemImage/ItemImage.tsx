import clsx from 'clsx';
import { ClassNameProp } from 'shared/types';
import s from './itemImage.module.scss';

interface ItemImageProps extends ClassNameProp {
  imgUrl: string;
  imgAlt: string;
}

const ItemImage = ({ className, imgUrl, imgAlt }: ItemImageProps) => {
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
