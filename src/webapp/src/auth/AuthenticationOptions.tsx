import { Button } from '@small-ads/ui';
import React from 'react';
import styled from 'styled-components';
import { FacebookSquare } from '@styled-icons/boxicons-logos';

const LoginScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 64px);
`;

const LoginMain = styled.div`
  align-self: center;
  flex: 1 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LoginSign = styled.div`
  font-size: 3rem;
  letter-spacing: -0.066875rem;
  font-weight: 700;
`;

const LoginForm = styled.div`
  width: 100%;
  text-align: center;
  max-width: 320px;
  align-self: center;
`;

const GeistSpacer = styled.span`
  margin-left: 23px;
  margin-top: 23px;
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
  <LoginScreen>
    <LoginMain>
      <LoginSign>Login to Vercel</LoginSign>
      <LoginForm>
        <GeistSpacer aria-hidden='true' />
        <FacebookButton
          size='large'
          icon={<FacebookSquare size={20} />}
          onClick={() => {}}
        >
          Login with Facebook
        </FacebookButton>
      </LoginForm>
    </LoginMain>
  </LoginScreen>
);
