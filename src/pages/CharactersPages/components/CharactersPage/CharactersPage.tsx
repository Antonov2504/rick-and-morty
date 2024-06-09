import React from 'react';

import { Container } from '@components/Container';
import { PageHeader } from '@components/PageHeader';

import charactersJSON from '../../../../mock/characters.json';

import * as Styled from './CharactersPage.styled';
import { Card } from '@components/Card';
import { useNavigate } from 'react-router-dom';
import { Page } from '@constants/pages';
import { TCharacter } from '@pages/CharactersPages/CharactersPages.types';

const CHARACTERS: TCharacter[] = charactersJSON;
const TITLE = 'Characters';

export const CharactersPage = () => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`${Page.characters}/${id}`);
  };

  return (
    <>
      <PageHeader title={TITLE} />
      <Container>
        <Styled.Cards>
          {CHARACTERS.map(({ id, name, image }) => (
            <Card key={id} id={id} title={name} src={image} onClick={handleClick} />
          ))}
        </Styled.Cards>
      </Container>
    </>
  );
};
