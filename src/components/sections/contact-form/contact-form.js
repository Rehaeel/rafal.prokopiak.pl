import React from 'react'
import emailjs from 'emailjs-com'
import './contact-form.css';

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'react-app', e.target, 'user_FYozYYCsMf5VcHRsN4W14')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    e.target.reset();
}
export default class ContactForm extends React.Component {


    render() {
        return (
            <div className="contact-section">
                <div className="contact-form" >
                    <h2>Zacznijmy projekt!</h2>
                    <form onSubmit={sendEmail}>
                        <input className="cf-name" placeholder="Imię i nazwisko" type="text" name="name" />
                        <input className="cf-email" placeholder="Email" type="email" name="email" />
                        <textarea className="cf-message" placeholder="Wiadomość" name="message" />
                        <input className="cf-submit" type="submit" value="Wyślij wiadomość" />
                    </form>
                </div>
            </div>
        )
    }
}
