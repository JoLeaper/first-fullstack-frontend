import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import List from './List.js'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <Switch>
                    <Route
                    path="/"
                    render={(routerProps) => <List {...routerProps} />}
                    />
                </Switch>
                </div>
        )
    }
}
