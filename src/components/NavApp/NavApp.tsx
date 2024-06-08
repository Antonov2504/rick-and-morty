import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '@pages/HomePage';
import { CharactersPages } from '@pages/CharactersPages';
import { EpisodesPages } from '@pages/EpisodesPages';
import { LocationsPages } from '@pages/LocationsPages';
import { ErrorPage } from '@pages/ErrorPage';
import { Page } from '@constants/pages';
import { PortalLayout } from '@src/layouts/PortalLayout';

export const NavApp = () => {
  return (
    <Routes>
      <Route element={<PortalLayout />}>
        <Route path={Page.index} element={<Navigate to={Page.home} replace />} />
        <Route path={Page.home} element={<HomePage />} />
        <Route path={`${Page.characters}/*`} element={<CharactersPages />} />
        <Route path={`${Page.episodes}/*`} element={<EpisodesPages />} />
        <Route path={`${Page.locations}/*`} element={<LocationsPages />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
