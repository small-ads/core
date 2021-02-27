import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { AuthStatuses } from './types';
import { RootState } from '../reducers';
import { signInUser, signOutUser } from './asyncAuthActions';

const Loader = styled.div`
  border: 12px solid #f3f3f3;
  border-radius: 50%;
  border-top: 12px solid #48b0f5;
  width: 30px;
  height: 30px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Auth = () => {
  const dispatch = useDispatch();
  const { authStatus, user, error } = useSelector(
    (state: RootState) => state.user
  );

  const handleLogout = () => {
    dispatch(signOutUser());
  };

  if (error) {
    return (
      <p>There has been an error: ${error}. Refresh the page and try again</p>
    );
  }

  if (authStatus === AuthStatuses.loading) {
    return <Loader />;
  }

  return (
    <div>
      {authStatus === AuthStatuses.loggedIn ? (
        <p>
          Welcome: {user?.displayName} your id is ${user?.uid} and you are using
          the following email: ${user?.email}
        </p>
      ) : (
        <p>Hello there, login please</p>
      )}
      <button type='button' onClick={() => dispatch(signInUser())}>
        LogIn
      </button>
      <button type='button' onClick={() => handleLogout()}>
        LogOut
      </button>
    </div>
  );
};
