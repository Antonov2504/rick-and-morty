import React from 'react';

import { Container } from '@components/Container';
import { PageHeader } from '@components/PageHeader';

import charactersJSON from '../../../../mock/characters.json';

import * as Styled from './CharactersPage.styled';
import { Card } from '@components/Card';
import { useNavigate } from 'react-router-dom';
import { Page } from '@constants/pages';
import { TCharacter } from '@pages/CharactersPages/CharactersPages.types';
import { useSort } from '@src/hooks/useSort';

const CHARACTERS: TCharacter[] = charactersJSON;
const TITLE = 'Characters';

export const CharactersPage = () => {
  const navigate = useNavigate();

  const { onSort, currentSort, sortedData } = useSort({
    data: CHARACTERS.map((c) => ({ ...c, created: new Date(c.created).valueOf() })),
    key: 'created',
  });

  const handleClick = (id: number) => {
    navigate(`${Page.characters}/${id}`);
  };

  return (
    <>
      <PageHeader title={TITLE} sortButton={{ currentSort, onSort }} />
      <Container>
        <Styled.Cards>
          {sortedData.map(({ id, name, image }) => (
            <Card key={id} id={id} title={name} src={image} onClick={handleClick} />
          ))}
        </Styled.Cards>
      </Container>
    </>
  );
};
