import { useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppDispatch, useAppSelector } from '@redux/store';
import { HomePage, CatalogPage, NotFoundPage, CamperPage } from './pages';
import { ROUTES } from 'shared/constants';
import { SharedLayout } from 'shared/components';
import { getCampersByParams } from '@redux/campers/campersOperations';
import { selectPage } from '@redux/campers/campersSelectors';
import { selectFilter } from '@redux/filter/filterSelectors';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const page = useAppSelector(selectPage);
  const filter = useAppSelector(selectFilter);

  const params = useMemo(() => {
    return {
      page,
      ...filter,
    };
  }, [page, filter]);

  useEffect(() => {
    dispatch(getCampersByParams(params));
  }, [dispatch, params]);

  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.CATALOG} element={<CatalogPage />} />
          <Route path={ROUTES.CAMPER_PAGE} element={<CamperPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
