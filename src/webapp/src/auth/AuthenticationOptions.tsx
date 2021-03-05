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

export const AuthenticationOptions = () => (
  <LoginScreen>
    <LoginMain>
      <LoginSign>Login to Vercel</LoginSign>
      <LoginForm>
        <Button icon={<FacebookSquare size={20} />} full onClick={() => {}}>
          Continue with Facebook
        </Button>
      </LoginForm>
    </LoginMain>
  </LoginScreen>
);
