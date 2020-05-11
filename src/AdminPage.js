import React, { Component } from 'react'
import request from 'superagent'
import './AdminPage.css'

export default class AdminPage extends Component {
    state = {
        digimon_name: '',
        digimon_level: null,
        digimon_type: '',
        digimon_attribute: '',
        digimon_attack: '',
        appeared_in_anime: null
    }

    handleChange = async (e) => {
        const newState = {}
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const newDigimon = await request.post(`https://secure-caverns-93128.herokuapp.com/digimon`, this.state);
        return newDigimon.body;
    }

    render() {
        return (
            <div className="formbox">
                <form className="digimonAdd" onSubmit={this.handleSubmit}>
                    <label>
                        <p>Digimon Name</p>
                        <input onChange={this.handleChange} value={this.state.digimon_name} name="digimon_name"/>
                    </label>
                    <label>
                        <p>Digimon Level</p>
                        <input onChange={this.handleChange} value={this.state.digimon_level} name="digimon_level" type="number" />
                    </label>
                    <label>
                       <p>Digimon Type</p>
                        <input onChange={this.handleChange} value={this.state.digimon_type} name="digimon_type" />
                    </label>
                    <label>
                    <p>Digimon Attribute</p>
                        <input onChange={this.handleChange} value={this.state.digimon_attribute} name="digimon_attribute" />
                    </label>
                    <label>
                        <p>Signature Attack</p>
                        <input onChange={this.handleChange} value={this.state.digimon_attack} name="digimon_attack"/>
                    </label>
                    <label>
                    <p>Appeared In Anime?</p>
                        Yes
                        <input onChange={this.handleChange} checked={this.state.appeared_in_anime === 'true'} name="appeared_in_anime" type="radio" value="true" />
                        No
                        <input onChange={this.handleChange} checked={this.state.appeared_in_anime === 'false'} name="appeared_in_anime" type="radio" value="false" />
                    </label>
                    <button className='submit'>Submit</button>
                </form>
                
            </div>
        )
    }
}
