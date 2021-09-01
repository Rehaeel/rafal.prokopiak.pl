import React from 'react';
import { realizationList } from './realization-list.js';
import './realization-view.css';
import PlayButton from '../../../icons/play-button.svg';
import Image from 'next/image';

export default class RealizationView extends React.Component {
    render() {
        return (<>
            {realizationList.map(realization =>
                <div key={realization.id} className="realization-view">
                    <div className="realization-cover"><a key={realization.id} target="_blank" rel="noreferrer" href={realization.link}>
                        <Image src={PlayButton} width={57} height={57} className="play-button" alt='Włączenie filmiku' />
                        <Image src={realization.img} width={420} height={235} alt='Zdjęcie realizacji' className="realization-cover-img" />
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
