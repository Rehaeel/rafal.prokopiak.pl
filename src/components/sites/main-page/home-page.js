import React from 'react'
import './home-page.css';
import Realizations from '../../sections/realizations/realizations.js';
import Partners from '../../sections/partners/partners.js';
import ContactForm from '../../sections/contact-form/contact-form.js';
import Crew from '../../sections/crew/crew.js';
import References from '../../sections/references/references.js';
import Quote from '../../sections/quote/quote.js';
import Welcome from '../../sections/welcome/welcome.js';
import AboutMe from '../../sections/about-me/about-me.js';
import ReactGA from 'react-ga';

export default class HomePage extends React.Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    render() {
        return (
            <div className="home-page">
                <Welcome />
                <AboutMe />
                <Quote />
                <Realizations />
                <References />
                <Crew />
                <Partners />
                <ContactForm />
            </div>
        )
    }
}
