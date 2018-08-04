import React, { Component } from 'react';
import axios from 'axios'
import { Card, CardImg, CardText, CardBody,
    CardTitle, Button } from 'reactstrap';
import './MyRecipes.css';
import { Link } from 'react-router-dom';
import { FormGroup } from 'react-bootstrap';

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
    axios.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/random?number=1&tags=vegetarian%2Cdessert",
            {
                headers: {
                    "X-Mashape-Key": "QWQxjueQ0FmshU0oIdFFsH6cXzDMp1tDWbqjsnYkVz7dQyIzvi"
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
                <FormGroup id="recipeSearch" onSubmit={this.search}>
                    <div className="form-field">
                        <input name="searchParams" type="text" />
                    </div>
                    <Button bsStyle="primary" type="submit">Search</Button>
                </FormGroup>
                
                    { this.state.recipes.map(recipe => 
                        <div>
                            <Card className="apiRecipeCard">
                                <CardImg top width="100%" src={recipe.image} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><a href={recipe.sourceUrl}>{recipe.title}</a></CardTitle>
                                    <CardText>Ready in : {recipe.readyInMinutes} minutes</CardText>
                                </CardBody>
                            </Card>
                    </div>)}

           </div>
       )
     }
    search = (event) => {
        event.preventDefault();
        axios.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=10&query=" + event.target.searchParams.value,
        {
            headers: {
                "X-Mashape-Key": "QWQxjueQ0FmshU0oIdFFsH6cXzDMp1tDWbqjsnYkVz7dQyIzvi"
            }
        })
        .then(res => {
            const recipes = res.data.recipes;
            this.setState({ recipes });
        })
        console.log(this.state.recipes)
    }
}

export default MyRecipes;

