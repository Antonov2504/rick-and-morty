import React from 'react';
import { useNavigate } from 'react-router';

import { Page } from '@constants/pages';
import { errorsMock } from '@pages/ErrorPage/ErrorPage.mocks';

import { ErrorPageDescriptionEnum } from '@pages/ErrorPage/ErrorPage.types';

type AuthErrorViewProps = {
  status: ErrorPageDescriptionEnum;
};

export const AuthErrorView = ({ status }: AuthErrorViewProps) => {
  const navigate = useNavigate();
  const error = errorsMock[status];
  const { code, title } = error;

  const handleGoHome = () => {
    navigate(Page.home);
  };

  return (
    <>
      <p>{code}</p>
      <p>{title}</p>
      <button type="button" onClick={handleGoHome}>На Главную</button>
    </>
  );
};
