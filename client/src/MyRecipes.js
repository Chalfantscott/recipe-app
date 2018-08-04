import React, { Component } from 'react';
import axios from 'axios'
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import './MyRecipes.css';
import { Link } from 'react-router-dom';

class MyRecipes extends Component {
   constructor () {
       super();
       this.state = {
           recipes: []
       }
       this.handleClick = this.handleClick.bind(this)
   }

   handleClick() {
       console.log("handled this click");
   }
   
   componentDidMount() {
       axios.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?number=2&tags=vegetarian%2Cdessert", 
       { headers: {
        'X-Mashape-Key': 'ap8G36dpBcmshgicwH4BqkCd5xOPp16uGpKjsnrhtzJVZWrOyK'
       }
    })
         .then(res => {
           const recipes = res.data.recipes;
           this.setState({ recipes });
         })
         console.log(this.state.recipes)
   }

     render() {
       return (
           <div>
               <header>
                   <Link to='./'>back home</Link>
                   <h4>SLOSH/NOSH</h4>
               </header>
               <hr/>
                <p1 className="searchRecipes">search for recipes</p1>
                <form>
                    <input type="text"></input>
                    <Button bsStyle="primary">Search</Button>
                </form>
                
                    { this.state.recipes.map(recipe => 
                        <div>
                            <Card className="apiRecipeCard">
                                <CardImg top width="100%" src={recipe.image} alt="Card image cap" />
                                <CardText>Ready in : {recipe.readyInMinutes} minutes</CardText>
                                <CardBody>
                                <CardTitle><a href={recipe.sourceUrl}>{recipe.title}</a></CardTitle>
                                </CardBody>
                            </Card>
                    </div>)}

           </div>
       )
     }
}

export default MyRecipes;

