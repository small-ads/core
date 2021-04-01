import React, { useEffect } from 'react';
import { GlobalStyle } from '@small-ads/ui';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from './components/Navbar';
import { AuthenticationOptions } from './auth/AuthenticationOptions';
import { Auth } from './auth/Auth';
import { Feed } from './home/Feed';
import { auth } from './firebase';
import { login, notLoggedIn } from './auth/userSlice';
import { selectUser } from './auth/selectors';
import { AuthStatuses } from './auth/types';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const { uid, email, displayName } = authUser;
        dispatch(login({ uid, email, displayName }));
      } else {
        dispatch(notLoggedIn());
      }
    });
  }, [dispatch]);

  const { authStatus } = useSelector(selectUser);

  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        {authStatus === AuthStatuses.pending ? (
          <div>loading</div>
        ) : (
          <Switch>
            <Route path="/login" component={AuthenticationOptions} />
            <Route path="/feed" component={Feed} />
            <Route exact path="/" component={Auth} />
          </Switch>
        )}
      </Router>
    </>
  );
};
