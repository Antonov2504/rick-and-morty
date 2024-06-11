import React from 'react';
import { useNavigate } from 'react-router-dom';

import { TLocation } from '@pages/LocationsPages/LocationsPages.types';
import { Container } from '@components/Container';
import { PageHeader } from '@components/PageHeader';
import { Card } from '@components/Card';
import { Page } from '@constants/pages';

import locationsJSON from '../../../../mock/locations.json';
import * as Styled from './LocationsPage.styled';
import { useSort } from '@src/hooks/useSort';

const LOCATIONS: TLocation[] = locationsJSON;
const TITLE = 'Locations';

export const LocationsPage = () => {
  const navigate = useNavigate();

  const { onSort, currentSort, sortedData } = useSort({
    data: LOCATIONS.map((c) => ({ ...c, created: new Date(c.created).valueOf() })),
    key: 'created',
  });

  const handleClick = (id: number) => {
    navigate(`${Page.locations}/${id}`);
  };

  return (
    <>
      <PageHeader title={TITLE} sortButton={{ currentSort, onSort }} />
      <Container>
        <Styled.Cards>
          {sortedData.map(({ id, name }) => (
            <Card key={id} id={id} title={name} onClick={handleClick} />
          ))}
        </Styled.Cards>
      </Container>
    </>
  );
};
