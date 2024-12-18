import clsx from 'clsx';
import { GalleryMobileImageSkelleton } from 'shared/components';
import { handleImageError } from 'helpers/handleImageError';
import { noPicture } from 'shared/images';
import s from './galleryThumbImg.module.scss';

const GalleryThumbImg = ({ img, idx, loaded, onImageLoad, onClick }) => (
  <li className={s.galleryItem}>
    {!loaded[idx] && <GalleryMobileImageSkelleton type="thumb" />}
    <img
      src={img.thumb}
      alt={`camper image ${idx + 1}`}
      className={clsx(!loaded[idx] ? s.hidden : s.galleryThumbImg)}
      width="60"
      loading="lazy"
      onClick={() => onClick(img.original)}
      onLoad={() => onImageLoad(idx)}
      onError={(e) => handleImageError(e, noPicture)}
    />
  </li>
);

export default GalleryThumbImg;
