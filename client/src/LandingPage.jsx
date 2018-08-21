import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './LandingPage.css';
import Tile from './Tile';
import axios from 'axios'
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
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
    componentDidMount() {
        axios.get("/api/search?number=1&query=tasty")
            .then(res => {
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
                        { this.state.recipes.map(recipe => 
                            <Container>
                                <Row>
                                    <Col sm="4">
                                        <Card className="Card">
                                            <CardImg top width="100%" src={"https://spoonacular.com/recipeImages/" + recipe.image} alt="Card image cap" />
                                            <CardBody>
                                                <CardTitle><a href={recipe.sourceUrl}>{recipe.title}</a></CardTitle>
                                                <CardSubtitle>Ready in : {recipe.readyInMinutes} minutes</CardSubtitle>
                                                <CardText>{recipe.ingredients}</CardText>
                                                <Button onClick={this.addRecipe}>Save</Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row> 
                            </Container>                   
                        )}
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