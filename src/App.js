import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/sites/main-page/home-page';
import AboutMeSite from './components/sites/about-me-page/about-me-page';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/o-mnie' component={AboutMeSite} />
      </Switch>
    </>
  );
}
export default App;
