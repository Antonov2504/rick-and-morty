import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import * as Styled from './PortalLayout.styled';
import { Page } from '@constants/pages';

export const PortalLayout = () => {
  return (
    <Styled.Container>
      <Styled.Nav>
        <Styled.NavList>
          <Styled.NavListItem><NavLink to={Page.characters}>Герои</NavLink></Styled.NavListItem>
          <Styled.NavListItem><NavLink to={Page.locations}>Локации</NavLink></Styled.NavListItem>
          <Styled.NavListItem><NavLink to={Page.episodes}>Эпизоды</NavLink></Styled.NavListItem>
        </Styled.NavList>
      </Styled.Nav>
      <Styled.OutletWrapper>
        <Outlet />
      </Styled.OutletWrapper>
    </Styled.Container>
  );
};
