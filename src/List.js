import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent';
import './List.css'

export default class List extends Component {
    state = {
        items: []
    }

    componentDidMount = async () => {
        const fetchedDigimon = await request.get(`https://secure-caverns-93128.herokuapp.com/digimon`);
        console.log(fetchedDigimon);
        this.setState({ items: fetchedDigimon.body });
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
            <div className="listContainer">
                   {this.state.items.map(digimon =>
                    <ul className="digimonList" >
                        <Link to={`/digimon/${digimon.id}`}>
                            <h2>{digimon.digimon_name}</h2>
                        </Link>
                            <p>Level: {this.digimonLevel(digimon.digimon_level)}</p>
                            <p>Type: {digimon.digimon_type}</p>
                            <p>Attribute: {digimon.digimon_attribute}</p>
                            <p>Attack: {digimon.digimon_attack}</p>
                            <p>Appeared In Anime: {(digimon.appeared_in_anime)
                                ? 'Yes'
                                : 'No'}</p>
                    </ul >
                    )}  
            </div>
        )
    }
}
