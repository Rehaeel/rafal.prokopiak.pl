import React from 'react'
import './crew.css';
import { CrewList } from './crew-list';

export default class Crew extends React.Component {
    render() {
        return (
            <div className="crew-section">

                {CrewList.map(crew =>
                    <div className="crew">
                        <img key={crew.id} className={crew.className} src={crew.img} alt='' />
                        <h3>{crew.title}</h3>
                        <p>{crew.author}</p>
                    </div>
                )
                }
            </div>
        )
    }
}
