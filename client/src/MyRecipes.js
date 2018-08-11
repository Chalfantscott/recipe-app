import React, { Component } from 'react';
import axios from 'axios'
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
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
<<<<<<< HEAD
    axios.get("/api/search?number=1&query=tasty")
=======
    axios.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=1&query=tasty",
            {
                headers: {
                    "X-Mashape-Key": "QWQxjueQ0FmshU0oIdFFsH6cXzDMp1tDWbqjsnYkVz7dQyIzvi"
            }
        })
>>>>>>> 21fc35ad318f9a5374581798ca2ffcefdb2289c8
        .then(res => {
            const state = {...this.state};
            state.recipes = res.data.results;
            this.setState(state);
         })
         console.log(this.state.recipes)
   }

     render() {
       return (
           <div>
                <p1 className="searchRecipes">search for recipes</p1>
                <form id="recipeSearch" onSubmit={this.search}>
                    <div className="form-field">
                        <input name="searchParams" type="text" />
                    </div>
                    <button className="btn btn-primary" type="submit">Search</button>
                </form>
                
                    { this.state.recipes.map(recipe => 
                        <div>
                            <Card className="apiRecipeCard">
                                <CardImg top width="100%" src={"https://spoonacular.com/recipeImages/" + recipe.image} alt="Card image cap" />
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
<<<<<<< HEAD
        axios.get("/api/search?number=10&query=" + event.target.searchParams.value)
=======
        axios.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search?number=10&query=" + event.target.searchParams.value,
        {
            headers: {
                "X-Mashape-Key": "QWQxjueQ0FmshU0oIdFFsH6cXzDMp1tDWbqjsnYkVz7dQyIzvi"
            }
        })
>>>>>>> 21fc35ad318f9a5374581798ca2ffcefdb2289c8
        .then(res => {
            const state = {...this.state};
            state.recipes = res.data.results;
            this.setState(state);
        })
        
    }
}

export default MyRecipes;

