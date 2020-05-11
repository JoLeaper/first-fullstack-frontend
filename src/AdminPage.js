import React, { Component } from 'react'
import request from 'superagent'

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
        console.log(this.state);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const newDigimon = await request.post(`https://secure-caverns-93128.herokuapp.com/digimon`, this.state);
        return newDigimon.body;
    }
    render() {
        return (
            <div className="formbox">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Digimon Name
                        <input onChange={this.handleChange} value={this.state.digimon_name} name="digimon_name"/>
                    </label>
                    <label>
                        Digimon Level
                        <input onChange={this.handleChange} value={this.state.digimon_level} name="digimon_level" type="number" />
                    </label>
                    <label>
                        Digimon Type
                        <input onChange={this.handleChange} value={this.state.digimon_type} name="digimon_type" />
                    </label>
                    <label>
                        Digimon Attribute
                        <input onChange={this.handleChange} value={this.state.digimon_attribute} name="digimon_attribute" />
                    </label>
                    <label>
                        Signature Attack
                        <input onChange={this.handleChange} value={this.state.digimon_attack} name="digimon_attack"/>
                    </label>
                    <label>
                        Appeared In Anime?
                        Yes
                        <input onChange={this.handleChange} checked={this.state.appeared_in_anime === 'true'} name="appeared_in_anime" type="radio" value="true" />
                        No
                        <input onChange={this.handleChange} checked={this.state.appeared_in_anime === 'true'} name="appeared_in_anime" type="radio" value="false" />
                    </label>
                    <button>Submit</button>
                </form>
                
            </div>
        )
    }
}
