import React from 'react'
import { partnerList } from './partner-list';
import './partners.css';

export default class partners extends React.Component {
    render() {
        return (
            <div className="partners">
                {partnerList.map(partner =>
                    <a key={partner.id} href={partner.link} target="_blank" rel="noreferrer"><img className="partner" src={partner.img} alt='' /></a>
                )}
            </div>
        )
    }
}
