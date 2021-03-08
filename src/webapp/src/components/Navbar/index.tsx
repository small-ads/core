import React from 'react';
import { Button } from '@small-ads/ui';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { HeaderStyles, Header } from './navbar.style';

export const Navbar = () => {
  const history = useHistory();
  const route = useRouteMatch('/login');
  return (
    <HeaderStyles>
      <Header>
        <Button
          disabled={Boolean(route?.isExact)}
          size='sm'
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
      </Header>
    </HeaderStyles>
  );
};
