import Skeleton from 'react-loading-skeleton';
import { useMedia } from 'hooks/useMedia';
import 'react-loading-skeleton/dist/skeleton.css';

const GalleryMobileImageSkelleton = ({ type = null }) => {
  const { isMobile } = useMedia();

  const thumbSize = isMobile
    ? {
        width: 60,
        height: 60,
      }
    : {
        width: 120,
        height: 120,
      };

  const accentSize = isMobile
    ? {
        width: 283,
        height: 240,
      }
    : {
        width: 580,
        height: 480,
      };

  return type === 'thumb' ? (
    <Skeleton
      style={{
        width: thumbSize.width,
        height: thumbSize.height,
      }}
    />
  ) : (
    <Skeleton
      style={{
        width: accentSize.width,
        height: accentSize.height,
      }}
    />
  );
};

export default GalleryMobileImageSkelleton;
