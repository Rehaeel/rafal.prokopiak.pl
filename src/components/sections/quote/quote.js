import React from 'react'
import './quote.css';

export default class Quote extends React.Component {
    render() {
        return (
            <div className="quote-section">
                <div className="quote">
                    <h1>“Piękno jest pierwszą kategorią moralną”</h1>
                    <h1>~Jan Duns Szkot OFM</h1>
                </div>
            </div >
        )
    }
}
