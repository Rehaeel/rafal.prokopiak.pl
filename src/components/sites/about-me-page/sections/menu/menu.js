import React from 'react'
import './menu.css';
import Logo from '../../../../logo/Logo.webp';

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu">
                <a href="/"><img src={Logo} alt='' /></a>
                <div className="tabs">
                    <a href="/o-mnie"><h2>O mnie</h2></a>
                    <a href="/#realizations"><h2>Realizacje</h2></a>
                    <a href="/#contact"><h2>Kontakt</h2></a>
                </div>
            </div>
        )
    }
}