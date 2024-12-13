import { useState } from 'react';
import clsx from 'clsx';
import { noPicture } from 'shared/images';
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

  return (
    <div className={clsx(s.galleryContainer, className)}>
      <ul className={s.galleryThumbsList}>
        {extendedGallery.map((img, idx) => (
          <li key={idx} className={s.galleryItem}>
            <img
              src={img.thumb}
              alt={`camper image ${idx + 1}`}
              className={s.galleryThumbImg}
              width="292"
              loading="lazy"
              onClick={() => handleImageClick(img.original)}
              onError={(e) => {
                e.target.src = noPicture;
                e.target.alt =
                  'Oops, something went wrong. Image not available';
              }}
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
          onError={(e) => {
            e.target.src = noPicture;
            e.target.alt = 'Oops, something went wrong. Image not available';
          }}
        />
      )}
    </div>
  );
};

export default CamperGalleryMobile;
