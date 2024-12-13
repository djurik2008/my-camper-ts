import { Puff, ThreeDots } from 'react-loader-spinner';
import { useThreeDotsLoaderProps } from 'hooks/useThreeDotsProps';
import s from './loader.module.scss';

const Loader = ({ type }) => {
  const threeDotsProps = useThreeDotsLoaderProps();

  return type === 'page' ? (
    <Puff
      visible={true}
      color="#E44848"
      height="100"
      width="100"
      ariaLabel="puff-loading"
      wrapperClass={s.pageLoader}
    />
  ) : type === 'button' ? (
    <ThreeDots {...threeDotsProps} />
  ) : null;
};

export default Loader;
