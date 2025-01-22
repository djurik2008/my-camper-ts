import { SyntheticEvent } from 'react';

export const handleImageError = (
  e: SyntheticEvent<HTMLImageElement>,
  placeholderSrc: string
) => {
  e.currentTarget.src = placeholderSrc;
  e.currentTarget.alt = 'Oops, something went wrong. Image not available';
};
