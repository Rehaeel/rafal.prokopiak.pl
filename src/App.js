import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/sites/main-page/home-page.js';
import AboutMeSite from './components/sites/about-me-page/about-me-page';

export default function App() {
  return (
    <Switch>
      <Route exact path="/o-mnie">
        <AboutMeSite />
      </Route>
      <Route exact path='/' >
        <HomePage />
      </Route>
    </Switch>
  );
}

