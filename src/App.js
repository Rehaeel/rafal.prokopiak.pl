import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/sites/main-page/home-page.js';
import AboutMeSite from './components/sites/about-me-page/about-me-page';

function App() {
  return (
    <Switch>
      <Route exact path="/o-mnie" component={AboutMeSite} />
      <Route exact path='/' component={HomePage} />
    </Switch>
  );
}
export default App;
