import React from 'react';
import { Button } from '@small-ads/ui';
import { Characters } from './characters/Characters';
import { Person } from './person/Person';
import { Auth } from './auth/Auth';

export const App = () => (
  <>
    <Auth />
    <Person />
    <Button onClick={() => {}} type='secondary'>
      Call to Action
    </Button>
    <Characters />
  </>
);
