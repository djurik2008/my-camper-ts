import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, CatalogPage, NotFoundPage, CamperPage } from './pages';
import './App.css';
import { ROUTES } from 'shared/constants';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.CATALOG} element={<CatalogPage />} />
        <Route path={ROUTES.CAMPER_PAGE} element={<CamperPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
    </>
  );
}

export default App;
