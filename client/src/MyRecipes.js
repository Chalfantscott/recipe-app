import React, { Component } from 'react';
import axios from 'axios'
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
import './MyRecipes.css';

class MyRecipes extends Component {
   constructor () {
       super();
       this.state = {
           recipes: []
       }
       this.handleClick = this.handleClick.bind(this)
       this.addRecipe = this.addRecipe.bind(this)
   }

   handleClick() {
       console.log("handled this click");
   }

   addRecipe() {
       console.log(this.state)
   }
   
   componentDidMount() {
    axios.get("/api/search?number=1&query=tasty")
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
                        <div className="recipeCards">
                            <Card className="apiRecipeCard">
                                <CardImg top width="100%" src={"https://spoonacular.com/recipeImages/" + recipe.image} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle><a href={recipe.sourceUrl}>{recipe.title}</a></CardTitle>
                                    <CardText>Ready in : {recipe.readyInMinutes} minutes</CardText>
                                    <button onClick={this.addRecipe}>add to recipe book</button>
                                </CardBody>
                            </Card>
                    </div>)}

           </div>
       )
     }
    search = (event) => {
        event.preventDefault();
        axios.get("/api/search?number=10&query=" + event.target.searchParams.value)
        .then(res => {
            const state = {...this.state};
            state.recipes = res.data.results;
            this.setState(state);
        })
        
    }
}

export default MyRecipes;

