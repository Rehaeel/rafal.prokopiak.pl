import React from 'react'
import './realizations.css'
import RealizationView from './realization-view/realization-view.js';

export default class Realizations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 700,
            display: 'flex',
            opacity: 1
        }
        this.readMore = this.readMore.bind(this);
    }

    readMore() {
        this.setState({ height: `fit-content`, opacity: 0, display: 'none' })
    }



    render() {
        return (
            <div>
                <div className="realizations" id="realizations" style={{ height: this.state.height }} >
                    <h1 className="headers">Realizacje</h1>
                    <RealizationView />
                </div >
                <div style={{ opacity: this.state.opacity, display: this.state.display }} className="separator">
                    <h2 className="show-more" onClick={this.readMore}>pokaż więcej</h2>
                </div>
            </div>
        )
    }
}