import { Puff, ThreeDots, Bars } from 'react-loader-spinner';
import { useThreeDotsLoaderProps } from 'hooks/useThreeDotsProps';
import s from './loader.module.scss';

type LoaderProps = {
  type: 'page' | 'button' | 'content';
};

const Loader = ({ type }: LoaderProps) => {
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
  ) : type === 'content' ? (
    <Bars
      height="30"
      width="30"
      color="#E44848"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass={s.contentLoader}
      visible={true}
    />
  ) : null;
};

export default Loader;
