import React from 'react';
import { Button } from '@small-ads/ui';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from '../../auth/asyncAuthActions';
import { Header, HeaderStyles } from './navbar.style';
import { selectUser } from '../../auth/selectors';
import { AuthStatuses } from '../../auth/types';

export const Navbar = () => {
  const history = useHistory();
  const route = useRouteMatch('/login');
  const dispatch = useDispatch();
  const { authStatus } = useSelector(selectUser);

  const handleLogout = () => dispatch(signOutUser());

  const handleGoToLogin = () => history.push('/login');

  return (
    <HeaderStyles>
      <Header>
        {authStatus !== AuthStatuses.loggedIn && (
          <Button
            disabled={Boolean(route?.isExact)}
            size="sm"
            onClick={handleGoToLogin}
          >
            Login
          </Button>
        )}
        {Boolean(authStatus === AuthStatuses.loggedIn) && (
          <Button type="secondary" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Header>
    </HeaderStyles>
  );
};
