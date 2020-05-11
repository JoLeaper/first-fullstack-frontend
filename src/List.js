import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import request from 'superagent';

export default class List extends Component {
    state = {
        items: []
    }

    componentDidMount = async () => {
        const fetchedDigimon = await request.get(`https://secure-caverns-93128.herokuapp.com/digimon`);
        console.log(fetchedDigimon);
        this.setState({ items: fetchedDigimon.body });
    }
    
    render() {
        return (
            <div>
                   {this.state.items.map(digimon =>
                    <li className="digimonList" >
                        <Link to={`/digimon/${digimon.id}`}>
                            <h2>{digimon.digimon_name}</h2>
                        </Link>
                            <p>{digimon.digimon_level}</p>
                            <p>{digimon.digimon_type}</p>
                            <p>{digimon.digimon_attribute}</p>
                            <p>{digimon.digimon_attack}</p>
                            <p>{digimon.appeared_in_anime}</p>
                    </li >
                    )}  
            </div>
        )
    }
}
