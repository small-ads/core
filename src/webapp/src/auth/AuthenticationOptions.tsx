import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from '@small-ads/ui';
import styled from 'styled-components';
import { Facebook } from '@styled-icons/boxicons-logos/Facebook';
import { useDispatch, useSelector } from 'react-redux';
import { navbarConstants } from '../components/Navbar/constants';
import { AuthStatuses } from './types';
import { signInUser } from './asyncAuthActions';
import { selectUser } from './selectors';
import { ReactComponent as GoogleLogo } from '../components/svgs/google-logo.svg';

const LoginScreenStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - ${navbarConstants.height});
`;

const LoginStyles = styled.div`
  align-self: center;
  flex: 1 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LoginSign = styled.div`
  font-size: 48px;
  letter-spacing: -0.066875rem;
  font-weight: 700;
`;

const LoginButtons = styled.div`
  width: 100%;
  text-align: center;
  max-width: 320px;
  align-self: center;
`;

const GhostSpacer = styled.span`
  margin-left: 24px;
  margin-top: 24px;
`;

const FacebookButton = styled(Button)`
  &&& {
    width: 320px;
    background-color: #1877f2;
    border: 1px solid #1877f2;
    color: white;
    span {
      position: absolute;
      inset: 0px auto 0px 22px;
    }
    &:hover {
      background-color: #166fe5;
      border: 1px solid #166fe5;
    }
  }
`;

const GoogleButton = styled(Button)`
  &&& {
    background-color: white;
    border: 1px solid #4285f4;
    width: 320px;
    color: #4285f4;
    span {
      position: absolute;
      inset: 0px auto 0px 22px;
      width: 18px;
    }
  }
`;

export const AuthenticationOptions = () => {
  const dispatch = useDispatch();
  const { authStatus } = useSelector(selectUser);

  if (authStatus === AuthStatuses.loggedIn) {
    return <Redirect to='/dashboard' />;
  }
  const handleSignIn = () => {
    dispatch(signInUser());
  };

  return (
    <LoginScreenStyles>
      <LoginStyles>
        <LoginSign>Login to upload your ads</LoginSign>
        <LoginButtons>
          <GhostSpacer aria-hidden='true' />
          <FacebookButton size='lg' icon={<Facebook />} onClick={() => {}}>
            Login with Facebook
          </FacebookButton>
          <GhostSpacer aria-hidden='true' />
          <GoogleButton size='lg' icon={<GoogleLogo />} onClick={handleSignIn}>
            Login with Google
          </GoogleButton>
        </LoginButtons>
      </LoginStyles>
    </LoginScreenStyles>
  );
};
