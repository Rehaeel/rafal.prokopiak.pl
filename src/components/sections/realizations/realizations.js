import React from 'react'
import './realizations.css'
import RealizationView from './realization-view/realization-view.js';

export default class Realizations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            maxHeight: 700,
            display: 'flex',
            opacity: 1
        }
        this.readMore = this.readMore.bind(this);
    }

    readMore() {
        this.setState({ maxHeight: '400 0px' })
    }



    render() {
        return (
            <div>
                <div className="realizations" id="realizations" style={{ maxHeight: this.state.maxHeight }} >
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