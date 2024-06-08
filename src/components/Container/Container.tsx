import React, { ReactNode } from 'react';

import * as Styled from './Container.styled';

type ContainerProps = {
  children: ReactNode;
  isLoading?: boolean;
};

export const Container = ({ isLoading, children }: ContainerProps) => {
  if (isLoading) {
    return <p>Загрузка</p>;
  }

  return (
    <Styled.Container>{children}</Styled.Container>
  );
};
