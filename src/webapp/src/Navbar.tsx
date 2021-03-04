import React from 'react';
import { Button } from '@small-ads/ui';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const HeaderStyles = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  min-height: 64px;
`;

const Header = styled.div`
  width: 1048px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 13.5px auto;
`;

export const Navbar = () => {
  const history = useHistory();
  return (
    <HeaderStyles>
      <Header>
        <Button
          size='medium'
          onClick={() => {
            history.push('/login');
          }}
        >
          Login Test
        </Button>
      </Header>
    </HeaderStyles>
  );
};
