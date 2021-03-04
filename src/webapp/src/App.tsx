import React from 'react';
import { Button, GlobalStyle } from '@small-ads/ui';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Characters } from './characters/Characters';
import { Person } from './person/Person';
import { Auth } from './auth/Auth';
import { Navbar } from './Navbar';
import { Login } from './auth/Login';

export const App = () => (
  <>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/login' component={Login} />
      </Switch>
      <Route exact path='/'>
        <Auth />
        <Person />
        <Button onClick={() => {}} type='secondary'>
          Invite Team
        </Button>
        <Button onClick={() => {}} type='primary'>
          New
        </Button>
        <Characters />
      </Route>
    </Router>
  </>
);
