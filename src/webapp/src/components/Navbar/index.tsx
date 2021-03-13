import React from 'react';
import { Button } from '@small-ads/ui';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUser } from '../../auth/asyncAuthActions';
import { Header, HeaderStyles } from './navbar.style';
import { selectUser } from '../../auth/selectors';

export const Navbar = () => {
  const history = useHistory();
  const route = useRouteMatch('/login');
  const dispatch = useDispatch();
  const { authStatus } = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(signOutUser());
  };
  return (
    <HeaderStyles>
      <Header>
        {!authStatus && (
          <Button
            disabled={Boolean(route?.isExact)}
            size='sm'
            onClick={() => {
              history.push('/login');
            }}
          >
            Login
          </Button>
        )}
        {Boolean(authStatus) && (
          <Button type='secondary' size='sm' onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Header>
    </HeaderStyles>
  );
};
