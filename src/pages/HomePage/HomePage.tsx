import React from 'react';

import { Container } from '@components/Container';
import * as Styled from './HomePage.styled';

export const HomePage = () => {
  return (
    <Container>
      <Styled.Content>
        <Styled.Logo />
        <Styled.Description>
          <Styled.Title>
            Welcome to the ultimate fan site for Rick and Morty!
          </Styled.Title>
          <Styled.Text>
            Dive into the multiverse with us as we explore the wacky adventures of Rick Sanchez and his grandson Morty Smith. Discover behind-the-scenes secrets, character profiles, episode guides, and much more. Join us on this interdimensional journey and get ready for a portal-hopping experience like no other!
          </Styled.Text>
        </Styled.Description>
        <Styled.Portal />
      </Styled.Content>
    </Container>
  );
};
