import React from 'react'
import { PartnerList } from './partner-list';
import './partners.css';
import Image from 'next/image';
import { Link } from 'react-router-dom';


export default class partners extends React.Component {
    render() {
        return (
            <div className="partners">
                {PartnerList.map(partner =>
                    <Link key={partner.id} to={partner.link} target="_blank" rel="noreferrer" > <Image className="partner" height={72} width={165} src={partner.img} alt='Prokopiak Visuals partner' /></Link>
                )
                }
            </div>
        )
    }
}
