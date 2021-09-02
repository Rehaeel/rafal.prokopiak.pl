import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/sites/main-page/home-page.js';
import AboutMeSite from './components/sites/about-me-page/about-me-page';
import Menu from './components/sites/about-me-page/sections/menu/menu.js';

export default function App() {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/o-mnie" component={AboutMeSite} />
      </Switch >
    </>
  );
}

