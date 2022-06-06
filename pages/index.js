import { useEffect } from 'react';

import ReactGA from 'react-ga';

import Welcome from '../components/sections/welcome/welcome';
import AboutMe from '../components/sections/about-me/about-me';
import Quote from '../components/sections/quote/quote';
import Realizations from '../components/sections/realizations/realizations';
import References from '../components/sections/references/references';
import Crew from '../components/sections/crew/crew';
import Partners from '../components/sections/partners/partners';
import ContactForm from '../components/sections/contact-form/contact-form';

const HomePage = () => {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<div>
			<Welcome />
			<AboutMe />
			<Quote />
			<Realizations />
			<References />
			<Crew />
			<Partners />
			<ContactForm />
		</div>
	);
};

export default HomePage;
