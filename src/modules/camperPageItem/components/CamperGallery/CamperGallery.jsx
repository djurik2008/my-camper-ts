import clsx from 'clsx';
import s from './camperGallery.module.scss';

const CamperGallery = ({ gallery, className = null }) => {
  const extendedGallery =
    gallery.length === 3
      ? [...gallery, gallery[0]]
      : [...gallery, gallery[0], gallery[1]];

  return (
    <ul className={clsx(s.galleryList, className && className)}>
      {extendedGallery.map((img, idx) => (
        <li key={idx} className={s.galleryItem}>
          <img
            src={img.original}
            alt={`camper image ${idx + 1}`}
            className={s.galleryImg}
            width={'292'}
            loading={'lazy'}
          />
        </li>
      ))}
    </ul>
  );
};

export default CamperGallery;
