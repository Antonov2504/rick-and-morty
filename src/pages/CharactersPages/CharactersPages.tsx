import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { CharactersPage } from './components/CharactersPage';
import { CharacterPage } from './components/CharacterPage';
import { ErrorPageRoutePathEnum } from '@pages/ErrorPage/ErrorPage.types';

export const CharactersPages = () => {
  return (
    <Routes>
      <Route>
        <Route index element={<CharactersPage />} />
        <Route path=":id" element={<CharacterPage />} />
        <Route path="*" element={<Navigate to={ErrorPageRoutePathEnum.notFound} />} />
      </Route>
    </Routes>
  );
};
