import React, { Component } from 'react'
import './home-page.css';
import { Realizations } from '../../sections/realizations/realizations.js';
import Partners from '../../sections/partners/partners.js';
import ContactForm from '../../sections/contact-form/contact-form.js';
import Crew from '../../sections/crew/crew.js';
import References from '../../sections/references/references.js';
import Quote from '../../sections/quote/quote.js';
import Welcome from '../../sections/welcome/welcome.js';
import { Sugar } from 'react-preloaders2';
import AboutMe from '../../sections/about-me/about-me.js';

export default class HomePage extends Component {
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
                {/* <Sugar background='linear-gradient(0deg, var(--link-color) 0%, var(--blue-color) 100%);' color='var(--orange-color)' /> */}
            </div>
        )
    }
}
