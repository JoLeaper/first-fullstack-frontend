import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent';
import './List.css'

export default class List extends Component {
    state = {
        fetchedItems: [],
        attributes: [],
        filter: ''
    }

    componentDidMount = async () => {
        const fetchedDigimon = await request.get(`https://secure-caverns-93128.herokuapp.com/digimon`);
        const digimonAttribute = await request.get(`https://secure-caverns-93128.herokuapp.com/attribute`);
        this.setState({ fetchedItems: fetchedDigimon.body,
                        attributes: digimonAttribute.body });
    }
    handleChange = async (e) => {
        this.setState({ filter: e.target.value })
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
            <div className="listContainer">
                <div className="dropdown_box">
                    <select onChange={this.handleChange} className="attribute_filter">
                        <option value=''>All</option>
                        {this.state.attributes.map(attribute =>
                            <option value={attribute.digimon_attribute}>{attribute.digimon_attribute}</option>)}
                    </select>
                </div>
                   {this.state.fetchedItems
                   .filter(digimon => {
                       if (!this.state.filter) return true;
                       return digimon.digimon_attribute === this.state.filter
                   })
                   .map(digimon =>
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
