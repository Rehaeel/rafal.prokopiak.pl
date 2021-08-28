import React from 'react'
import './references.css';
import { ReferencesList } from './references-list.js'


export default class References extends React.Component {
    render() {
        return (
            <div className="references-section">
                <span><h1 className="headers">Niech wypowiedzą się inni</h1></span>
                {ReferencesList.map(reference =>
                    <div className="reference">
                        <img key={reference.id} src={reference.img} alt='' />
                        <p>{reference.text}</p>
                        <h3>{reference.author}</h3>
                        <a href={reference.link} target="_blank" rel="noreferrer" >
                            <p>{reference.source}</p>
                        </a>
                    </div>
                )}
            </div>
        )
    }
}