import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthErrorView } from './components/AuthErrorView';
import { ErrorPageDescriptionEnum } from './ErrorPage.types';

export const ErrorPage = () => {
  return (
    <Routes>
      <Route>
        <Route path="*" element={<AuthErrorView status={ErrorPageDescriptionEnum.notFound} />} />
      </Route>
    </Routes>
  );
};
