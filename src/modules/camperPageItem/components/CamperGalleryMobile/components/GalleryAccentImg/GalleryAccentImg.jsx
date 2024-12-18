import { useEffect, useState } from 'react';
import { GalleryMobileImageSkelleton } from 'shared/components';
import { noPicture } from 'shared/images';
import { handleImageError } from 'helpers/handleImageError';
import s from './galleryAccentImg.module.scss';

const GalleryAccentImg = ({ accentImgSrc, isLoading }) => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = accentImgSrc;

    img.onload = () => setIsInitialLoading(false);
    img.onerror = () => setIsInitialLoading(false);
  }, [accentImgSrc]);

  if (isLoading || isInitialLoading) {
    return <GalleryMobileImageSkelleton />;
  }

  return (
    <img
      src={accentImgSrc}
      alt="Enlarged image of camper"
      width="283"
      className={s.accentCamperImg}
      loading="lazy"
      onError={(e) => handleImageError(e, noPicture)}
    />
  );
};

export default GalleryAccentImg;
