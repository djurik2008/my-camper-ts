import { lazy } from 'react';

export const HomePage = lazy(() => import('./HomePage/HomePage'));
export const CatalogPage = lazy(() => import('./CatalogPage/CatalogPage'));
export const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));
export const CamperPage = lazy(() => import('./CamperPage/CamperPage'));
