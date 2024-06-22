import React, { MouseEvent, useCallback, useRef } from 'react';

import PlaceholderImage from '@src/assets/images/episode.jpg';

import * as Styled from './Card.styled';

type CardProps = {
  id: number;
  title: string;
  created?: string;
  onClick: (id: number) => void;
  getNodeRef?: (node: Element) => void;
  src?: string;
};

export const Card = ({
  id,
  title,
  created,
  onClick,
  getNodeRef,
  src = PlaceholderImage
}: CardProps) => {
  const refNode = useCallback((node: Element) => {
    if (getNodeRef) {
      getNodeRef(node);
    }
  }, [id]);

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClick(id);
  }

  return (
    <Styled.Container ref={refNode} onClick={handleClick}>
      <Styled.Image src={src} />
      <Styled.Info>
        <Styled.InfoList>
          <Styled.InfoListItem>{title}</Styled.InfoListItem>
          <Styled.InfoListItem>created: {created ?? 'created'}</Styled.InfoListItem>
        </Styled.InfoList>
      </Styled.Info>
    </Styled.Container>
  );
};
