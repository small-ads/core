import React from 'react';
import { Button } from '@small-ads/ui';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
`;

const Header = styled.div`
  width: 1048px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 13.5px auto;
`;

export const Navbar = () => (
  <HeaderWrapper>
    <Header>
      <Button size='medium' onClick={() => {}}>
        Login
      </Button>
    </Header>
  </HeaderWrapper>
);
