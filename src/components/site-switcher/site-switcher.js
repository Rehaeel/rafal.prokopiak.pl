import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import AboutMeSite from '../sites/about-me-page/about-me-page.js'

export default class SiteSwitcher extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/o-mnie' component={AboutMeSite} />
            </Switch>
        )
    }
}
