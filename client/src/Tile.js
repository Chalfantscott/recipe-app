import React, { Component } from 'react';
import './tile.css';

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }
    render(){
        return(
            
                <div className="tile">
                    <h3 className="tile-title">{this.state.data.title}</h3>
                    <p className="tile-copy">{this.state.data.icon}</p>
                </div>
            
        )
    }
}
export default Tile;