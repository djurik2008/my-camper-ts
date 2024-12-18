import Skeleton from 'react-loading-skeleton';
import { useMedia } from 'hooks/useMedia';
import 'react-loading-skeleton/dist/skeleton.css';

const GalleryImageSkelleton = () => {
  const { isDesktopS } = useMedia();

  const size = isDesktopS
    ? {
        width: 270,
        height: 280,
        borderRadius: 10,
      }
    : {
        width: 292,
        height: 312,
        borderRadius: 10,
      };

  return (
    <Skeleton
      style={{
        width: size.width,
        height: size.height,
        borderRadius: size.borderRadius,
      }}
    />
  );
};

export default GalleryImageSkelleton;
