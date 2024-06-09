import React, { MouseEvent } from 'react';

import PlaceholderImage from '@src/assets/images/episode.jpg';

import * as Styled from './Card.styled';

type CardProps = {
  id: number;
  title: string;
  onClick: (id: number) => void;
  src?: string;
};

export const Card = ({ id, title, onClick, src = PlaceholderImage }: CardProps) => {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClick(id);
  }

  return (
    <Styled.Container onClick={handleClick}>
      <Styled.Image src={src} />
      <Styled.Title>{title}</Styled.Title>
    </Styled.Container>
  );
};
