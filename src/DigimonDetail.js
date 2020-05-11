import React, { Component } from 'react'
import request from 'superagent';

export default class DigimonDetail extends Component {
    state = {
        digimon: {}
    }
    componentDidMount = async () => {
        const fetchedDigimon = await request.get(`https://secure-caverns-93128.herokuapp.com/digimon/${this.props.match.params.id}`);
        console.log(fetchedDigimon);
        this.setState({
            digimon: fetchedDigimon.body
        })
        console.log(this.state.digimon);
    }
    render() {
        return (
            <div>
                <h2>{this.state.digimon.digimon_name}</h2>
                <p>{this.state.digimon.digimon_level}</p>
                <p>{this.state.digimon.digimon_type}</p>
                <p>{this.state.digimon.digimon_attribute}</p>
                <p>{this.state.digimon.digimon_attack}</p>
                <p>{this.state.digimon.appeared_in_anime}</p>
            </div>
        )
    }
}
