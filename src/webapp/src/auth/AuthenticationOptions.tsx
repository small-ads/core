import React from 'react';
import { Button } from '@small-ads/ui';
import styled from 'styled-components';
import { Facebook } from '@styled-icons/boxicons-logos/Facebook';
import { navbarConstants } from '../components/Navbar';

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
    &:hover {
      background-color: #166fe5;
      border: 1px solid #166fe5;
    }
  }
`;

export const AuthenticationOptions = () => (
  <LoginScreenStyles>
    <LoginStyles>
      <LoginSign>Login to upload your ads</LoginSign>
      <LoginButtons>
        <GhostSpacer aria-hidden='true' />
        <FacebookButton size='lg' icon={<Facebook />} onClick={() => {}}>
          Login with Facebook
        </FacebookButton>
      </LoginButtons>
    </LoginStyles>
  </LoginScreenStyles>
);
