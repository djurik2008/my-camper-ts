import { useMedia } from 'hooks/useMedia';

export const useThreeDotsLoaderProps = () => {
  const { isMobile, isTablet, isDesktopS } = useMedia();

  return isMobile
    ? {
        visible: true,
        height: '10',
        width: '50',
        color: '#E44848',
        radius: '1',
        ariaLabel: 'three-dots-loading',
      }
    : isTablet
      ? {
          visible: true,
          height: '10',
          width: '50',
          color: '#E44848',
          radius: '1.5',
          ariaLabel: 'three-dots-loading',
        }
      : isDesktopS
        ? {
            visible: true,
            height: '15',
            width: '70',
            color: '#E44848',
            radius: '2',
            ariaLabel: 'three-dots-loading',
          }
        : {
            visible: true,
            height: '20',
            width: '100',
            color: '#E44848',
            radius: '3',
            ariaLabel: 'three-dots-loading',
          };
};
