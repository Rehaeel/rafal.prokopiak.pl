import React, { Component } from 'react'
import './welcome.css';

export default class Welcome extends Component {
    render() {
        return (
            <div className="welcome-section">
                <div className="greeting">
                    <h1>prokopiak.pl</h1>
                    <p>by ukazać piękno</p>
                </div>
            </div>
        )
    }
}
