import './App.css';
import { Realizations } from './components/sections/realizations/realizations';
import ContactForm from './components/sections/contact-form/contact-form.js';
import Partners from './components/sections/partners/partners';
import Crew from './components/sections/crew/crew';
import References from './components/sections/references/references.js';
import Quote from './components/sections/quote/quote.js';
import AboutMe from './components/sections/about-me/about-me.js';


function App() {
  return (
    <div className="App">
      <AboutMe />
      <Quote />
      <Realizations />
      <References />
      <Crew />
      <Partners />
      <ContactForm />
    </div>
  );
}
export default App;
