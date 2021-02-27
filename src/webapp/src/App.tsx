import React from 'react';
import { Characters } from './characters/Characters';

import { Person } from './person/Person';
import { Auth } from './auth/Auth';

export const App = () => (
  <>
    <Auth />
    <Person />
    <Characters />
  </>
);
