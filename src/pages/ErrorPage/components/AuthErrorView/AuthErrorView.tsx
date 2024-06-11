import React from 'react';
import { useNavigate } from 'react-router';

import { Page } from '@constants/pages';
import { errorsMock } from '@pages/ErrorPage/ErrorPage.mocks';

import { ErrorPageDescriptionEnum } from '@pages/ErrorPage/ErrorPage.types';

import * as Styled from './AuthErrorView.styled';
import { PrimaryButton } from '@components/PrimaryButton';

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
    <Styled.Container>
      <Styled.Content>
        <Styled.Code>{code}</Styled.Code>
        <Styled.Title>{title}</Styled.Title>
        <PrimaryButton title='Go Home Page' onClick={handleGoHome} />
      </Styled.Content>
      <Styled.Background />
    </Styled.Container>
  );
};
