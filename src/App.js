import './App.css';
import { Realizations } from './components/sections/realizations/realizations';
import ContactForm from './components/sections/contact-form/contact-form.js';
import Partners from './components/sections/partners/partners';
import Crew from './components/sections/crew/crew';
import References from './components/sections/references/references.js';

function App() {
  return (
    <div className="App">
      <Realizations />
      <References />
      <Crew />
      <Partners />
      <ContactForm />
    </div>
  );
}
export default App;
