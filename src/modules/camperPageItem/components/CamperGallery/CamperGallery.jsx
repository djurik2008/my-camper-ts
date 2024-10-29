import s from './camperGallery.module.scss';

const CamperGallery = ({ gallery }) => {
  return (
    <ul className={s.galleryList}>
      {gallery.map((img, idx) => (
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
