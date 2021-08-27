import './App.css';
import { Realizations } from './components/sections/realizations/realizations';
import ContactForm from './components/sections/contact-form/contact-form.js';
import Partners from './components/sections/partners/partners';

function App() {
  return (
    <div className="App">
      <Realizations />
      <Partners />
      <ContactForm />
    </div>
  );
}
export default App;
