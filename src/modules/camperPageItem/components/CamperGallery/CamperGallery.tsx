import { useState } from 'react';
import clsx from 'clsx';
import { GalleryImageSkelleton } from 'shared/components';
import { noPicture } from 'shared/images';
import { handleImageError } from 'helpers/handleImageError';
import { ClassNameProp, GalleryImage } from 'shared/types';
import s from './camperGallery.module.scss';

interface CamperGalleryProps extends ClassNameProp {
  gallery: GalleryImage[];
}

const CamperGallery = ({ gallery, className }: CamperGalleryProps) => {
  const extendedGallery =
    gallery.length === 3
      ? [...gallery, gallery[0]]
      : [...gallery, gallery[0], gallery[1]];

  const [loaded, setLoaded] = useState(
    Array(extendedGallery.length).fill(false)
  );

  const handleImageLoad = (idx: number) => {
    setLoaded((prev) => {
      const updated = [...prev];
      updated[idx] = true;
      return updated;
    });
  };

  return (
    <ul className={clsx(s.galleryList, className)}>
      {extendedGallery.map((img, idx) => (
        <li key={idx} className={s.galleryItem}>
          {!loaded[idx] && <GalleryImageSkelleton />}
          <img
            src={img.original}
            alt={`camper image ${idx + 1}`}
            className={clsx(!loaded[idx] ? s.hidden : s.galleryImg)}
            width={'292'}
            loading={'lazy'}
            onLoad={() => handleImageLoad(idx)}
            onError={(e) => handleImageError(e, noPicture)}
          />
        </li>
      ))}
    </ul>
  );
};

export default CamperGallery;
