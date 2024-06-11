import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { EpisodesPage } from './components/EpisodesPage';
import { EpisodePage } from './components/EpisodePage';
import { ErrorPageRoutePathEnum } from '@pages/ErrorPage/ErrorPage.types';

export const EpisodesPages = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<EpisodesPage />} />
        <Route path=":id" element={<EpisodePage />} />
        <Route path="*" element={<Navigate to={ErrorPageRoutePathEnum.notFound} />} />
      </Route>
    </Routes>
  )
}