import React from 'react'
import './realizations.css'
import RealizationView from './realization-view/realization-view.js';

export class Realizations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 700,
            display: 'flex'
        }
        this.readMore = this.readMore.bind(this);
    }

    readMore() {
        this.setState({ height: 'fit-content', display: 'none' })
    }



    render() {
        return (
            <div>
                <div style={{ height: this.state.height }} className="realizations" id="realizations">
                    <h1 className="headers">Realizacje</h1>
                    <RealizationView style={{ height: this.state.height }} />
                </div >
                <div style={{ display: this.state.display }} className="separator">
                    <h2 className="show-more" onClick={this.readMore}>pokaż więcej</h2>
                </div>
            </div>
        )
    }
}