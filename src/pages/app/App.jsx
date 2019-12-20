import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import Auth from '../auth/auth';
import HomeContainer from '../../containers/home';

const App = ({ email }) => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => (email ? <Redirect to="/home" /> : <Auth />)} />
      <Route exact path="/home" render={() => (email ? <HomeContainer /> : <Redirect to="/" />)} />
    </Switch>
  </Router>
);


export default App;
