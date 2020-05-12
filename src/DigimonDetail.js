import React, { Component } from 'react'
import request from 'superagent';
import './DigimonDetail.css'

export default class DigimonDetail extends Component {
    state = {
        digimon: {},
        digimon_name: ''
    }
    componentDidMount = async () => {
        const fetchedDigimon = await request.get(`https://secure-caverns-93128.herokuapp.com/digimon/${this.props.match.params.id}`);
        this.setState({
            digimon: fetchedDigimon.body
        })
    }
    handleUpdate = async(e) => {
        await request.put(`https://secure-caverns-93128.herokuapp.com/digimon/${this.props.match.params.id}`, this.state);
        this.props.history.push('/list');
        console.log(this.state.digimon_name)
    }
    handleDelete = async() => {
        await request.delete(`https://secure-caverns-93128.herokuapp.com/digimon/${this.props.match.params.id}`);
        this.props.history.push('/list');
    }

    handleNameChange = async (e) => {
        this.setState({ digimon_name: e.target.value });
    }

    digimonLevel(levelNum) {
        let level;
        switch(levelNum) {
            default: 
                level = ''
                break;
                case 1:
                level = 'Rookie';
                break;
            case 2:
                level = 'Champion';
                break;
            case 3:
                level = 'Ultimate';
                break;
            case 4:
                level = 'Mega';
                break;
        }
        return level;

    }
    render() {
        return (
            <div className='digimon_details'>
                <h2>{this.state.digimon.digimon_name}</h2>
                Write here to update the Digimon's name.
                <input value={this.state.digimon_name} onChange={this.handleNameChange}></input>
                <p>Level: {this.digimonLevel(this.state.digimon.digimon_level)}</p>
                <p>Type: {this.state.digimon.digimon_type}</p>
                <p>Attribute: {this.state.digimon.digimon_attribute}</p>
                <p>Signature Attack: {this.state.digimon.digimon_attack}</p>
                <p>Appeared In Anime? {(this.state.digimon.appeared_in_anime)
                ? 'Yes'
                : 'No'}</p>
                <button onClick={this.handleUpdate}>Update</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}