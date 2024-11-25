import { useState } from 'react';
import clsx from 'clsx';
import s from './camperGallery.module.scss';

const CamperGallery = ({ gallery, className = null }) => {
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
      console.error('Failed to load image');
      setIsLoading(false);
    };
  };

  return (
    <div className={clsx(s.galleryContainer, className)}>
      <ul className={s.galleryThumbsList}>
        {extendedGallery.map((img, idx) => (
          <li key={idx} className={s.galleryItem}>
            <img
              src={img.thumb}
              alt={`camper image ${idx + 1}`}
              className={s.galleryImg}
              width={'292'}
              loading={'lazy'}
              onClick={() => handleImageClick(img.original)}
            />
          </li>
        ))}
      </ul>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img
          src={accentImg}
          alt="Enlarged image of camper"
          className={s.accentCamperImg}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default CamperGallery;
