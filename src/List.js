import React, { Component } from 'react'
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
                            <h2>{digimon.digimon_name}</h2>
                    </li >
                    )}  
            </div>
        )
    }
}
