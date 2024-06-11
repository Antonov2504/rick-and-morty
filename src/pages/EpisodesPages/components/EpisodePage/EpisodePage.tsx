import React from 'react';

import { Container } from '@components/Container';
import { PageHeader } from '@components/PageHeader';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Page } from '@constants/pages';
import episodesJSON from '../../../../mock/episodes.json';

import { ErrorPageRoutePathEnum } from '@pages/ErrorPage/ErrorPage.types';
import { PrimaryButton } from '@components/PrimaryButton';
import { TEpisode } from '@pages/EpisodesPages/EpisodesPages.types';
import PlaceholderImage from '@src/assets/images/episode.jpg';
import * as Styled from './EpisodePage.styled';

const EPISODES: TEpisode[] = episodesJSON;

const mapEpisodes = EPISODES.reduce<Record<string, TEpisode>>((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});

export const EpisodePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const series = mapEpisodes[id];

  if (series) {
    const { name, air_date, episode, created } = series;
    const title = `Episodes / ${name}`;

    const handleClickBack = () => {
      navigate(`${Page.episodes}`);
    };

    const handlePrevClick = () => {
      if (id) {
        navigate(`${Page.episodes}/${Number(id) - 1}`);
      }
    };

    const handleNextClick = () => {
      if (id) {
        navigate(`${Page.episodes}/${Number(id) + 1}`);
      }
    };

    return (
      <>
        <PageHeader title={title} showBackButton onClickBack={handleClickBack} />
        <Container>
          <Styled.CardDetail>
            <Styled.Image src={PlaceholderImage} />
            <Styled.Info>
              <Styled.Title>{name || '—'}</Styled.Title>
              <Styled.Description>
                <Styled.Row>
                  <Styled.Label>Air date:</Styled.Label>
                  <Styled.Value>{air_date || '—'}</Styled.Value>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Label>Episode:</Styled.Label>
                  <Styled.Value>{episode || '—'}</Styled.Value>
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
            <PrimaryButton title='Next' onClick={handleNextClick} disabled={Number(id) === EPISODES.at(-1).id} />
          </Styled.Buttons>
        </Container>
      </>
    );
  }

  return <Navigate to={ErrorPageRoutePathEnum.notFound} />;
};
