import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, CatalogPage, NotFoundPage, CamperPage } from './pages';
import { ROUTES } from 'shared/constants';
import { SharedLayout } from 'shared/components';

function App() {
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
