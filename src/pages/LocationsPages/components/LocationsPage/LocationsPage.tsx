import { useNavigate } from 'react-router-dom';

import { TLocation } from '@pages/LocationsPages/LocationsPages.types';
import { Container } from '@components/Container';
import { PageHeader } from '@components/PageHeader';
import { Card } from '@components/Card';
import { Page } from '@constants/pages';

import * as Styled from '@src/components/Container/Container.styled';
import { useInfinityScrollWithSort } from '@src/hooks/useInfinityScrollWithSort';

const TITLE = 'Locations';

export const LocationsPage = () => {
  const navigate = useNavigate();

  const { cards, currentSort, isLoading, error, refLastNode, onSort } = useInfinityScrollWithSort<TLocation>({
    url: 'https://rickandmortyapi.com/api/location',
  });

  const handleClick = (id: number) => {
    navigate(`${Page.locations}/${id}`);
  };

  return (
    <>
      <PageHeader title={TITLE} sortButton={{ currentSort, onSort }} />
      <Container>
        <Styled.Cards>
          {cards.map(({ id, name, created }, index) => {
            const newCreated = `${new Date(created).toLocaleDateString()} ${new Date(created).toLocaleTimeString()}`;

            if (cards.length === index + 1) {
              return (
                <Card
                  key={id}
                  getNodeRef={refLastNode}
                  id={id}
                  title={name}
                  created={newCreated}
                  onClick={handleClick} />
              );
            }

            return <Card key={id} id={id} title={name} created={newCreated} onClick={handleClick} />;
          })}
        </Styled.Cards>
        {isLoading && <Styled.Loading>Loading...</Styled.Loading>}
        {error && <Styled.Loading>{error.toString()}</Styled.Loading>}
      </Container>
    </>
  );
};
