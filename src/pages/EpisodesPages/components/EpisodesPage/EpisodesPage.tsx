import React from 'react';

import { Container } from '@components/Container';
import { PageHeader } from '@components/PageHeader';

import episodesJSON from '../../../../mock/episodes.json';

import { Card } from '@components/Card';
import { useNavigate } from 'react-router-dom';
import { Page } from '@constants/pages';

import * as Styled from './EpisodesPage.styled';
import { TEpisode } from '@pages/EpisodesPages/EpisodesPages.types';

const EPISODES: TEpisode[] = episodesJSON;
const TITLE = 'Episodes';

export const EpisodesPage = () => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`${Page.episodes}/${id}`);
  };

  return (
    <>
      <PageHeader title={TITLE} />
      <Container>
        <Styled.Cards>
          {EPISODES.map(({ id, name }) => (
            <Card key={id} id={id} title={name} onClick={handleClick} />
          ))}
        </Styled.Cards>
      </Container>
    </>
  );
};
