import Skeleton from 'react-loading-skeleton';
import { useMedia } from 'hooks/useMedia';
import 'react-loading-skeleton/dist/skeleton.css';

type ImgType = {
  type: 'thumb' | 'accent';
};

const GalleryMobileImageSkelleton = ({ type }: ImgType) => {
  const { isMobile } = useMedia();

  const sizes = {
    thumb: isMobile ? { width: 60, height: 60 } : { width: 120, height: 120 },
    accent: isMobile
      ? { width: 283, height: 240 }
      : { width: 580, height: 480 },
  };

  const size = sizes[type];

  return (
    <Skeleton
      style={{
        width: size.width,
        height: size.height,
      }}
    />
  );
};

export default GalleryMobileImageSkelleton;
