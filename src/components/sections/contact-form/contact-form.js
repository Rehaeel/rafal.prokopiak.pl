import React from 'react'
import emailjs from 'emailjs-com';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('Gmail', 'react-app', e.target, 'user_FYozYYCsMf5VcHRsN4W14')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="contact-form">
            <form onSubmit={sendEmail}>
                <input className="cf cf-name" type="text" placeholder="Imię i nazwisko" name="name" />
                <input className="cf cf-email" type="email" placeholder="Email" name="email" />
                <textarea className="cf cf-message" type="text" placeholder="Wiadomość" name="message" />
                <input className="cf cf-submit" type="submit" placeholder="Imię i nazwisko" value="Wyślij" />

            </form>
        </div>
    )

}
