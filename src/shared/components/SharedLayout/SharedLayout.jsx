import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'modules/header';

const SharedLayout = () => {
  return (
    <>
      <Header />
      {/* <div style={{ minHeight: '100vh' }}> */}
      <Suspense>
        <Outlet />
      </Suspense>
      {/* </div> */}
    </>
  );
};

export default SharedLayout;
