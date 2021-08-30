import React from 'react'
import './realizations.css'
import RealizationView from './realization-view/realization-view.js';

export class Realizations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '700px',
        }
    }

    render() {
        return (
            <section className="realizations" id="realizations">
                <h1 className="headers">Realizacje</h1>
                <RealizationView style={{ height: this.state.height }} />
                <div className="separator">
                    <h1 style={{  }}>pokaż więcej</h1>
                </div>
            </section >
        )
    }
}