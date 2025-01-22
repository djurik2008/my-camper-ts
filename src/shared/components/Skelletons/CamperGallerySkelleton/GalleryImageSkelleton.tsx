import Skeleton from 'react-loading-skeleton';
import { useMedia } from 'hooks/useMedia';
import 'react-loading-skeleton/dist/skeleton.css';

const GalleryImageSkelleton = () => {
  const { isDesktopS } = useMedia();

  const sizes = isDesktopS
    ? { width: 270, height: 280, borderRadius: 10 }
    : {
        width: 292,
        height: 312,
        borderRadius: 10,
      };

  return (
    <Skeleton
      style={{
        width: sizes.width,
        height: sizes.height,
        borderRadius: sizes.borderRadius,
      }}
    />
  );
};

export default GalleryImageSkelleton;
