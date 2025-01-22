import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useMedia = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767.98px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1279.98px)',
  });
  const isDesktopS = useMediaQuery({
    query: '(min-width: 1280px) and (max-width: 1439.98px)',
  });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return useMemo(
    () => ({
      isMobile,
      isTablet,
      isDesktopS,
      isDesktop,
    }),
    [isMobile, isTablet, isDesktopS, isDesktop]
  );
};
