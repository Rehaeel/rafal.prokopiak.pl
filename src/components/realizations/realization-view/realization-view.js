import React from 'react';
import { realizationList } from './realization-list.js';
import './realization-view.css';
import PlayButton from '../../icons/play-button.svg';


export default class RealizationView extends React.Component {
    render() {
        return (<>
            {realizationList.map(realization =>
                <div className="realization-view">
                    <div className="realization-cover"><a target="_blank" rel="noreferrer" href={realization.link}>
                        <img src={PlayButton} className="play-button" />
                        <img src={realization.img} alt='' className="realization-cover-img" />
                    </a></div>
                    <p>{realization.subTitle}</p>
                    <h2>{realization.title}</h2>
                    <a target="_blank" rel="noreferrer" href={realization.link} className="button" >ZOBACZ</a>
                </div>
            )
            }
        </>)
    }
}
