import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'modules/header';
import { Loader } from '..';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader type={'page'} />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
