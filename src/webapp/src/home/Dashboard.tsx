import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectUser } from '../auth/selectors';
import { AuthStatuses } from '../auth/types';

export const Dashboard = () => {
  const { authStatus } = useSelector(selectUser);

  if (authStatus !== AuthStatuses.loggedIn) {
    return <Redirect to='/login' />;
  }

  return (
    <div>
      <h1>Your ads are here</h1>
    </div>
  );
};
