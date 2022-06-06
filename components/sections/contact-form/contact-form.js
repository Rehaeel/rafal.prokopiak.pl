import { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './contact-form.module.css';

function sendEmail(e) {
	e.preventDefault();
	emailjs
		.sendForm(
			'service_6f2wh6e',
			'react-app',
			e.target,
			'user_FYozYYCsMf5VcHRsN4W14'
		)
		.then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
	e.target.reset();
}

const ContactForm = () => {
	const [opacityGreeting, setOpacityGreeting] = useState(0);
	const [displayForm, setDisplayForm] = useState('grid');
	const [display, setDisplay] = useState('none');

	const onSubmit = () => {
		setDisplayForm('none');
		setOpacityGreeting(1);
		setDisplay('block');
	};

	return (
		<section className={styles['contact-section']} id='contact'>
			<div className={styles['contact-form']}>
				<h2>Zacznijmy projekt!</h2>
				<form style={{ display: displayForm }} onSubmit={sendEmail}>
					<input
						className={styles['cf-name']}
						placeholder='Imię i nazwisko'
						type='text'
						name='name'
					/>
					<input
						className={styles['cf-email']}
						placeholder='Email'
						type='email'
						name='email'
					/>
					<textarea
						className={styles['cf-message']}
						placeholder='Wiadomość'
						name='message'
					/>
					<div
						className={styles['g-recaptcha']}
						data-sitekey='6LcfFjQcAAAAAJ-TOsSRNfjlF_-9OkSH7r5Qf60l'></div>
					<input
						className={styles['cf-submit']}
						type='submit'
						value='Wyślij wiadomość'
						onClick={onSubmit}
					/>
				</form>
				<div
					className={styles['greetings']}
					style={{
						opacity: opacityGreeting,
						display: display,
					}}>
					<h2>
						Dziękuję za wiadomość.Oczekuj ode mnie odpowiedzi w
						ciągu 24h!
					</h2>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
