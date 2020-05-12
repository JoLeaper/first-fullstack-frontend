import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default class HomePage extends Component {
    render() {
        return (
            <div className="enterbox">
                <Link to={`/list/`}>
                    <button className='button'>Let's Go!</button>
                </Link>
            </div>
        )
    }
}
