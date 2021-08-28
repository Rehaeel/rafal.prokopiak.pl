import './App.css';
import { Realizations } from './components/sections/realizations/realizations';
import ContactForm from './components/sections/contact-form/contact-form.js';
import Partners from './components/sections/partners/partners';
import Crew from './components/sections/crew/crew';
import References from './components/sections/references/references.js';
import Quote from './components/sections/quote/quote.js';
import AboutMe from './components/sections/about-me/about-me.js';
import Welcome from './components/sections/welcome/welcome.js';
import { Sugar } from 'react-preloaders2';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Welcome />
        <AboutMe />
        <Quote />
        <Realizations />
        <References />
        <Crew />
        <Partners />
        <ContactForm />
        <Sugar background='linear-gradient(0deg, var(--link-color) 0%, var(--blue-color) 100%);' color='var(--orange-color)' />
      </div>
    </React.Fragment>
  );
}
export default App;
