import React from 'react';

import * as Styled from './PrimaryButton.styled';

type PrimaryButtonProps = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
};

export const PrimaryButton = ({ title, onClick, disabled }: PrimaryButtonProps) => {
  return (
    <Styled.Button type="button" onClick={onClick} disabled={disabled}>{title}</Styled.Button>
  );
};
