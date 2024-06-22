import { Outlet, useLocation } from 'react-router-dom';

import { Page } from '@constants/pages';
import * as Styled from './PortalLayout.styled';
import { AuthStatus } from '@components/AuthStatus';
import { ErrorBoundary } from '@components/ErrorBoundary';

export const PortalLayout = () => {
  const location = useLocation();

  return (
    <Styled.Container>
      <Styled.OutletWrapper>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </Styled.OutletWrapper>

      <Styled.Sidebar>
        <AuthStatus />
        <Styled.Nav>
          <Styled.NavList>
            <Styled.NavListItem><Styled.NavListLink to={Page.home}>Home</Styled.NavListLink></Styled.NavListItem>
            <Styled.NavListItem><Styled.NavListLink to={Page.characters}>Characters</Styled.NavListLink></Styled.NavListItem>
            <Styled.NavListItem><Styled.NavListLink to={Page.locations}>Locations</Styled.NavListLink></Styled.NavListItem>
            <Styled.NavListItem><Styled.NavListLink to={Page.episodes}>Episodes</Styled.NavListLink></Styled.NavListItem>
          </Styled.NavList>
        </Styled.Nav>
      </Styled.Sidebar>

      <Styled.Background $path={'/' + location.pathname.split('/')[1]} />
    </Styled.Container>
  );
};
