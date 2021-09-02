import React from 'react'
import './go-up.css';

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export default class GoUp extends React.Component {
    render() {
        return (
            <div className="go-up" onClick={topFunction}>
                ˄
            </div>
        )
    }
}
