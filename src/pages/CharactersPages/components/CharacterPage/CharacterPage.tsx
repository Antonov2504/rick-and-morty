import React from 'react';

import { Container } from '@components/Container';
import { PageHeader } from '@components/PageHeader';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Page } from '@constants/pages';
import charactersJSON from '../../../../mock/characters.json';

import * as Styled from './CharacterPage.styled';
import { ErrorPageRoutePathEnum } from '@pages/ErrorPage/ErrorPage.types';
import { PrimaryButton } from '@components/PrimaryButton';
import { TCharacter } from '@pages/CharactersPages/CharactersPages.types';

const CHARACTERS: TCharacter[] = charactersJSON;

const mapCharacters = CHARACTERS.reduce<Record<string, TCharacter>>((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});

export const CharacterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const character = mapCharacters[id];

  if (character) {
    const { name, status, species, type, gender, image, created } = character;
    const title = `Characters / ${name}`;

    const handleClickBack = () => {
      navigate(`${Page.characters}`);
    };

    const handlePrevClick = () => {
      if (id) {
        navigate(`${Page.characters}/${Number(id) - 1}`);
      }
    };

    const handleNextClick = () => {
      if (id) {
        navigate(`${Page.characters}/${Number(id) + 1}`);
      }
    };

    return (
      <>
        <PageHeader title={title} showBackButton onClickBack={handleClickBack} />
        <Container>
          <Styled.CardDetail>
            <Styled.Image src={image} />
            <Styled.Info>
              <Styled.Title>{name || '—'}</Styled.Title>
              <Styled.Description>
                <Styled.Row>
                  <Styled.Label>Status:</Styled.Label>
                  <Styled.Value>{status || '—'}</Styled.Value>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Label>Species:</Styled.Label>
                  <Styled.Value>{species || '—'}</Styled.Value>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Label>Type:</Styled.Label>
                  <Styled.Value>{type || '—'}</Styled.Value>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Label>Gender:</Styled.Label>
                  <Styled.Value>{gender || '—'}</Styled.Value>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Label>Created:</Styled.Label>
                  <Styled.Value>{new Date(created).toLocaleDateString() + ' ' + new Date(created).toLocaleTimeString() || '—'}</Styled.Value>
                </Styled.Row>
              </Styled.Description>
            </Styled.Info>
          </Styled.CardDetail>

          <Styled.Buttons>
            <PrimaryButton title='Prev' onClick={handlePrevClick} disabled={Number(id) === 1} />
            <PrimaryButton title='Next' onClick={handleNextClick} disabled={Number(id) === CHARACTERS.at(-1).id} />
          </Styled.Buttons>
        </Container>
      </>
    );
  }

  return <Navigate to={ErrorPageRoutePathEnum.notFound} />;
};
