import React, { Component } from 'react';
import './tile.css';
import { Link } from 'react-router-dom';

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
                    <Link to='./apirecipes'>
                        <h3 className="tile-title">{this.state.data.title}</h3>
                    </Link>
                    <p className="tile-copy">{this.state.data.icon}</p>
                </div>
            
        )
    }
}
export default Tile;