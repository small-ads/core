import React from 'react';
import { Button, GlobalStyle } from '@small-ads/ui';
import { Characters } from './characters/Characters';
import { Person } from './person/Person';
import { Auth } from './auth/Auth';

export const App = () => (
  <>
    <GlobalStyle />
    <Auth />
    <Person />
    <Button onClick={() => {}} type='secondary'>
      Invite Team
    </Button>
    <Button onClick={() => {}} type='primary'>
      New Project
    </Button>
    <Characters />
  </>
);
