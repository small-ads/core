import React, { useEffect } from 'react';
import { GlobalStyle } from '@small-ads/ui';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Navbar } from './components/Navbar';
import { AuthenticationOptions } from './auth/AuthenticationOptions';
import { Auth } from './auth/Auth';
import { Feed } from './home/Feed';
import { auth } from './firebase';
import { login } from './auth/userSlice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const { uid, email, displayName } = authUser;
        dispatch(login({ uid, email, displayName }));
      }
    });
  }, [dispatch]);

  return (
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
};
