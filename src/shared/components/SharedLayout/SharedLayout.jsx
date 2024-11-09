import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'modules/header';
import { Loader } from '..';

const SharedLayout = () => {
  return (
    <>
      <Header />
      {/* <div style={{ minHeight: '100vh' }}> */}
      <Suspense fallback={<Loader type={'page'} />}>
        <Outlet />
      </Suspense>
      {/* </div> */}
    </>
  );
};

export default SharedLayout;
