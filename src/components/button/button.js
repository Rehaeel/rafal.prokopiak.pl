import React, { Component } from 'react'
import './button.css';

export default class Button extends Component {
    render() {
        return (
            <a href={this.props.link}>
                <button className="btn">{this.props.children}</button>
            </a >
        )
    }
}
