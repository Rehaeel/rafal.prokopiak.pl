import React from 'react'
import './footer.css';
import Facebook from '../../../../icons/facebook.svg';


export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p>Created & designed with ♥ by <a href="https://www.facebook.com/rafalprokopiak.visuals"><b>Rafał Prokopiak</b></a></p>
                <a href="https://www.facebook.com/rafalprokopiak.visuals" target="_blank" rel="noreferrer" id="fb" ><img width={17} height={36} src={Facebook} alt='' /></a>
            </div>
        )
    }
}