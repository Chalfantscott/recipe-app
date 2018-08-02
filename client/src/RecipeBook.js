import React, { Component } from 'react';
import LandingPage from './LandingPage';

class RecipeBook extends Component {
    constructor() {
        super();
    
    this.handleClick = this.handleClick.bind(this);
    }

    handleClick(props) {
        return <LandingPage />
        
      }

    

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>chicken pot pie</button>
            </div>
        )
    }
}

export default RecipeBook;