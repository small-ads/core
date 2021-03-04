import React from 'react';
import { GlobalStyle } from '@small-ads/ui';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Login } from './auth/Login';
import { Auth } from './auth/Auth';

export const App = () => (
  <>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path='/login' component={Login} />
        <Route exact path='/' component={Auth} />
      </Switch>
    </Router>
  </>
);
