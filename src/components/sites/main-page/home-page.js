import React, { Component } from 'react'
import './home-page.css';
import { Realizations } from './components/sections/realizations/realizations';
import Partners from './components/sections/partners/partners';
import ContactForm from '../../sections/contact-form/contact-form.js';
import Crew from '../../sections/crew/crew.js';
import References from './components/sections/references/references.js';
import Quote from './components/sections/quote/quote.js';
import Welcome from './components/sections/welcome/welcome.js';
import { Sugar } from 'react-preloaders2';
import AboutMeSite from '../about-me-page/about-me-page';

export default class HomePage extends Component {
    render() {
        return (
            <div className="home-page">
                <Welcome />
                <AboutMeSite />
                <Quote />
                <Realizations />
                <References />
                <Crew />
                <Partners />
                <ContactForm />
                <Sugar background='linear-gradient(0deg, var(--link-color) 0%, var(--blue-color) 100%);' color='var(--orange-color)' />
            </div>
        )
    }
}
