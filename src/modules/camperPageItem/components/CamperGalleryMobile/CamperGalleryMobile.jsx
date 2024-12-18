import { useState } from 'react';
import clsx from 'clsx';
import { GalleryThumbImg } from './components';
import { GalleryAccentImg } from './components';
import s from './camperGalleryMobile.module.scss';

const CamperGalleryMobile = ({ gallery, className = null }) => {
  const extendedGallery =
    gallery.length === 3
      ? [...gallery, gallery[0]]
      : [...gallery, gallery[0], gallery[1]];

  const [accentImg, setAccentImg] = useState(extendedGallery[0].thumb);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageClick = (newImg) => {
    if (accentImg === newImg) return;

    setIsLoading(true);
    const img = new Image();
    img.src = newImg;

    img.onload = () => {
      setAccentImg(newImg);
      setIsLoading(false);
    };

    img.onerror = () => {
      setIsLoading(false);
    };
  };

  const [loaded, setLoaded] = useState(
    Array(extendedGallery.length).fill(false)
  );

  const handleImageLoad = (idx) => {
    setLoaded((prev) => {
      const updated = [...prev];
      updated[idx] = true;
      return updated;
    });
  };

  return (
    <div className={clsx(s.galleryContainer, className)}>
      <ul className={s.galleryThumbsList}>
        {extendedGallery.map((img, idx) => (
          <GalleryThumbImg
            key={idx}
            idx={idx}
            img={img}
            loaded={loaded}
            onImageLoad={handleImageLoad}
            onClick={handleImageClick}
          />
        ))}
      </ul>
      <GalleryAccentImg accentImgSrc={accentImg} isLoading={isLoading} />
    </div>
  );
};

export default CamperGalleryMobile;
