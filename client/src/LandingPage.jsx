import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './LandingPage.css';
import Tile from './Tile';
import axios from 'axios'
import { CardColumns, Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';


class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
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
    goToRecipe = (id) => {
        axios.get(`/api/search/go?id=${id}`)
        .then(res => {
            window.location=res.data;
        })
    }
    componentDidMount() {
        axios.get("/api/search?number=2&query=tasty")
            .then(res => {
                console.log(res.data)
                const state = {...this.state};
                state.recipes = res.data.results;
                this.setState(state);
             })
             .catch(res => {
                console.log("error")
            })
             console.log(this.state.recipes)
    }    

    render() {
        return (
        <div>
            <div className="LandingPage-container">
                <div className="homepage-header">
                    <div className="text-block">
                    <p1 className="searchRecipes">search for recipes</p1>
                    <form id="recipeSearch" onSubmit={this.search}>
                        <div className="form-field">
                            <input name="searchParams" type="text" />
                        </div>
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                    </div>
                </div>

                    <div>
                        { this.state.recipes.map(recipe => {
                            console.log(recipe.sourceUrl)
                                return  <CardColumns>
                                            <Card className="Card">
                                                <CardImg top width="100%" src={"https://spoonacular.com/recipeImages/" + recipe.image} alt="Card image cap" />
                                                <CardBody>
                                                    <a href="#" onClick={(e) => { e.preventDefault(); this.goToRecipe(recipe.id)}}><CardTitle>{recipe.title}</CardTitle></a>
                                                    <CardSubtitle>Ready in : {recipe.readyInMinutes} minutes</CardSubtitle>
                                                    <CardText>{recipe.ingredients}</CardText>
                                                    <Button onClick={this.addRecipe}>Save</Button>
                                                </CardBody>
                                            </Card>
                                        </CardColumns>

                                        }              
                        )}
                    </div>

            </div>
        </div>

        )
    }
                    

    search = (event) => {
        event.preventDefault();
        axios.get("/api/search?number=3&query=" + event.target.searchParams.value)
        .then(res => {
            const state = {...this.state};
            state.recipes = res.data.results;
            this.setState(state);
        })
        .catch(res => {
            console.log("error")
        })
        
    }
}



export default LandingPage;