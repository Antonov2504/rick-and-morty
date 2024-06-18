import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '@pages/HomePage';
import { CharactersPages } from '@pages/CharactersPages';
import { EpisodesPages } from '@pages/EpisodesPages';
import { LocationsPages } from '@pages/LocationsPages';
import { ErrorPage } from '@pages/ErrorPage';
import { Page } from '@constants/pages';
import { PortalLayout } from '@src/layouts/PortalLayout';
import { LoginPage } from '@pages/LoginPage';
import { AuthContextProvider } from '@src/contexts/AuthContextProvider';
import { RegisterPage } from '@pages/RegisterPage/RegisterPage';
import { PrivateRoute } from '@components/PrivateRoute';

export const NavApp = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path={Page.login} element={<LoginPage />} />
        <Route path={Page.register} element={<RegisterPage />} />
        <Route element={<PortalLayout />}>
          <Route path={Page.index} element={<Navigate to={Page.home} replace />} />
          <Route path={Page.home} element={<HomePage />} />
          <Route element={<PrivateRoute />}>
            <Route path={`${Page.characters}/*`} element={<CharactersPages />} />
            <Route path={`${Page.episodes}/*`} element={<EpisodesPages />} />
            <Route path={`${Page.locations}/*`} element={<LocationsPages />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AuthContextProvider>
  );
};
