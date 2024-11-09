import { Puff, ThreeDots } from 'react-loader-spinner';
import s from './loader.module.scss';

const Loader = ({ type }) =>
  type === 'page' ? (
    <Puff
      visible={true}
      color="#E44848"
      height="100"
      width="100"
      ariaLabel="puff-loading"
      wrapperClass={s.pageLoader}
    />
  ) : type === 'button' ? (
    <ThreeDots
      visible={true}
      height="20"
      width="100"
      color="#E44848"
      radius="3"
      ariaLabel="three-dots-loading"
    />
  ) : null;

export default Loader;
