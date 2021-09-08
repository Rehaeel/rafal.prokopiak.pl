import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Favicon from 'react-favicon';
import favicon from './components/logo/'


ReactDOM.render(
  <BrowserRouter>
    <Favicon src={favicon} />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
