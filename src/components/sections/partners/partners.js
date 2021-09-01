import React from 'react'
import { partnerList } from './partner-list';
import './partners.css';
import Image from 'next/image';


export default class partners extends React.Component {
    render() {
        return (
            <div className="partners">
                {partnerList.map(partner =>
                    <Link key={partner.id} href={partner.link} target="_blank" rel="noreferrer"><Image className="partner" src={partner.img} alt='Prokopiak Visuals partner' /></Link>
                )}
            </div>
        )
    }
}
