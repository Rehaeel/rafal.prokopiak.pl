import React from 'react';
import { realizationList } from './realization-list.js';
import './realization-view.css'

export default class RealizationView extends React.Component {
    render() {
        return (<>
            {realizationList.map(realization =>
                <div className="realization-view">
                    <a target="_blank" rel="noreferrer" href={realization.link}><img src={realization.img} alt='' /></a>
                    <h3>{realization.subTitle}</h3>
                    <h1>{realization.title}</h1>
                    <a target="_blank" rel="noreferrer" href={realization.link} className="button" >ZOBACZ !</a>
                </div>
            )
            }
        </>)
    }
}
