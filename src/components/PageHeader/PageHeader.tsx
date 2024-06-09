import React from 'react';

import * as Styled from './PageHeader.styled';

type PageHeaderProps = {
  title: string;
  showBackButton?: boolean;
  onClickBack?: () => void;
};

export const PageHeader = ({ title, showBackButton = false, onClickBack = () => undefined }: PageHeaderProps) => {
  return (
    <Styled.Container>
      {showBackButton &&
        <Styled.BackButton onClick={onClickBack}>
          <Styled.BackIcon />
        </Styled.BackButton>
      }

      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
};
