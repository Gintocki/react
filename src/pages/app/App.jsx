import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import Auth from '../auth/auth';
import Home from '../home/home';

const App = ({ email }) => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => (email ? <Redirect to="/home" /> : <Auth />)} />
      <Route exact path="/home" render={() => (email ? <Home /> : <Redirect to="/" />)} />
    </Switch>
  </Router>
);


export default App;
