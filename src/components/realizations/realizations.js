import React from 'react'
import './realizations.css'
import RealizationView from './realization-view/realization-view.js'

export class Realizations extends React.Component {
    render() {
        return (
            <section className="realizations">
                <h1 className="headers">Realizacje</h1>
                <RealizationView />
            </section>
        )
    }
}