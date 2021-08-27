import React from 'react'
import './crew.css';
import { CrewList } from './crew-list';

export default class Crew extends React.Component {
    render() {
        return (
            <div className="crew-section">
                {CrewList.map(crew =>
                    <div className="crew">
                        <img src={crew.img} alt='' />
                        <h1>{crew.title}</h1>
                        <h2>{crew.author}</h2>
                    </div>
                )
                }
            </div>
        )
    }
}
