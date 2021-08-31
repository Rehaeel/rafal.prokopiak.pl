import React from 'react'
import './crew.css';
import { CrewList } from './crew-list';

export default class Crew extends React.Component {
    render() {
        return (
            <div className="crew-section">
                <span><h1 className="headers">Nasz zespół</h1></span>
                {CrewList.map(crew =>
                    <div key={crew.id} className="crew">
                        <img className={crew.className} src={crew.img} alt='' />
                        <h3>{crew.title}</h3>
                        <p>{crew.author}</p>
                    </div>
                )
                }
            </div>
        )
    }
}
