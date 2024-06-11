import React from 'react';

import { Container } from '@components/Container';
import { PageHeader } from '@components/PageHeader';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Page } from '@constants/pages';
import locationsJSON from '../../../../mock/locations.json';

import { ErrorPageRoutePathEnum } from '@pages/ErrorPage/ErrorPage.types';
import { PrimaryButton } from '@components/PrimaryButton';
import PlaceholderImage from '@src/assets/images/episode.jpg';
import { TLocation } from '@pages/LocationsPages/LocationsPages.types';
import * as Styled from './LocationPage.styled';

const LOCATIONS: TLocation[] = locationsJSON;

const mapLocations = LOCATIONS.reduce<Record<string, TLocation>>((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});

export const LocationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const locat = mapLocations[id];

  if (locat) {
    const { name, type, dimension, created } = locat;
    const title = `Locations / ${name}`;

    const handleClickBack = () => {
      navigate(`${Page.locations}`);
    };

    const handlePrevClick = () => {
      if (id) {
        navigate(`${Page.locations}/${Number(id) - 1}`);
      }
    };

    const handleNextClick = () => {
      if (id) {
        navigate(`${Page.locations}/${Number(id) + 1}`);
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
                  <Styled.Label>Type:</Styled.Label>
                  <Styled.Value>{type || '—'}</Styled.Value>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Label>Dimension:</Styled.Label>
                  <Styled.Value>{dimension || '—'}</Styled.Value>
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
            <PrimaryButton title='Next' onClick={handleNextClick} disabled={Number(id) === LOCATIONS.at(-1).id} />
          </Styled.Buttons>
        </Container>
      </>
    );
  }

  return <Navigate to={ErrorPageRoutePathEnum.notFound} />;
};
