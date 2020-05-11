import React, { Component } from 'react'
import request from 'superagent';
import './DigimonDetail.css'

export default class DigimonDetail extends Component {
    state = {
        digimon: {}
    }
    componentDidMount = async () => {
        const fetchedDigimon = await request.get(`https://secure-caverns-93128.herokuapp.com/digimon/${this.props.match.params.id}`);
        this.setState({
            digimon: fetchedDigimon.body
        })
    }
    digimonLevel(levelNum) {
        console.log(levelNum)
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
                <p>Level: {this.digimonLevel(this.state.digimon.digimon_level)}</p>
                <p>Type: {this.state.digimon.digimon_type}</p>
                <p>Attribute: {this.state.digimon.digimon_attribute}</p>
                <p>Signature Attack: {this.state.digimon.digimon_attack}</p>
                <p>Appeared In Anime? {(this.state.digimon.appeared_in_anime)
                ? 'Yes'
                : 'No'}</p>
            </div>
        )
    }
}