import React from 'react'
import emailjs from 'emailjs-com'
import './contact-form.css';

function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_6f2wh6e', 'react-app', e.target, 'user_FYozYYCsMf5VcHRsN4W14')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset();
}

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacityGreeting: 0,
            displayForm: 'grid',
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        this.setState({ displayForm: 'none' })
        this.setState({ opacityGreeting: 1 })
    }



    render() {
        return (
            <section className="contact-section" id="contact">
                <div className="contact-form" >
                    <h2>Zacznijmy projekt!</h2>
                    <form style={{ display: this.state.displayForm }} onSubmit={sendEmail}>
                        <input className="cf-name" placeholder="Imię i nazwisko" type="text" name="name" />
                        <input className="cf-email" placeholder="Email" type="email" name="email" />
                        <textarea className="cf-message" placeholder="Wiadomość" name="message" />
                        <div class="g-recaptcha" data-sitekey="6LcfFjQcAAAAAJ-TOsSRNfjlF_-9OkSH7r5Qf60l"></div>
                        <input className="cf-submit" type="submit" value="Wyślij wiadomość" onClick={this.onSubmit} />
                    </form>
                    <div className="greetings" style={{ opacity: this.state.opacityGreeting }}>
                        <h2>Dziękuję za wiadomość.Oczekuj ode mnie odpowiedzi w ciągu 24h!</h2>
                    </div>
                </div>
            </section>
        )
    }
}
