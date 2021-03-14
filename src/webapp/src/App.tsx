import React from 'react';
import { GlobalStyle } from '@small-ads/ui';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AuthenticationOptions } from './auth/AuthenticationOptions';
import { Auth } from './auth/Auth';
import { Feed } from './home/Feed';

export const App = () => (
  <>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/login" component={AuthenticationOptions} />
        <Route path="/feed" component={Feed} />
        <Route exact path="/" component={Auth} />
      </Switch>
    </Router>
  </>
);
