import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import List from './List.js'
import AdminPage from './AdminPage.js'
import DigimonDetail from './DigimonDetail.js'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <Switch>
                    <Route
                    path="/list"
                    render={(routerProps) => <List {...routerProps} />}
                    />
                    <Route
                    path="/admin"
                    render={(routerProps) => <AdminPage {...routerProps} />}
                    />
                    <Route
                    path="/digimon/:id"
                    render={(routerProps) => <DigimonDetail {...routerProps} />}
                    />
                </Switch>
                </div>
        )
    }
}
