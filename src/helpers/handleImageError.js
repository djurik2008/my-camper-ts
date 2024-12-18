export const handleImageError = (e, placeholderSrc) => {
  e.target.src = placeholderSrc;
  e.target.alt = 'Oops, something went wrong. Image not available';
};
