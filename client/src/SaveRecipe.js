import React, { Component } from 'react';
import "./SaveRecipe.css";
import {Row, Col, Card, CardBody, CardTitle, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import axios from 'axios';

class SaveRecipe extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            preparetime: '',
            step1: '',
            step2: '',
            step3: '',
            step4: '',
            step5: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        console.log(this.state)
        axios.post('/api/recipes/save', this.state).then((response)=> {
            console.log('success');
        })
        
      }
      
    render() {
        return (
            <div className="savedRecipeContainer">
                <div className="savedRecipeSubContainer">
                    <h2>Add a Recipe</h2>
                    <Row>
                        <Col>
                            <Form onSubmit={this.submitHandler}>
                                <FormGroup>
                                    <Label for="title">Title</Label>
                                    <Input onChange={e => this.setState({ title: e.target.value })} value={this.state.title} type="text" name="title" id="recipe-title" placeholder="title" />
                                    <Label for="preparetime">Prepare Time</Label>
                                    <Input onChange={e => this.setState({ preparetime: e.target.value })} value={this.state.preparetime} type="text" name="recipe-preparetime" id="recipe-preparetime" placeholder="enter number of minutes" />
                                    <Label for="step1">Step 1:</Label>
                                    <Input onChange={e => this.setState({ step1: e.target.value })} value={this.state.step1} type="text" name="step1" id="recipe-step1" placeholder="step 1" />
                                    <Label for="step1">Step 2:</Label>
                                    <Input onChange={e => this.setState({ step2: e.target.value })} value={this.state.Step2} type="text" name="Step2" id="recipe-step2" placeholder="step 2" />
                                    <Label for="step1">Step 3:</Label>
                                    <Input onChange={e => this.setState({ step3: e.target.value })} value={this.state.Step3} type="text" name="Step3" id="recipe-step3" placeholder="step 3" />
                                    <Label for="step1">Step 4:</Label>
                                    <Input onChange={e => this.setState({ step4: e.target.value })} value={this.state.Step4} type="text" name="Step4" id="recipe-step4" placeholder="step 4" />
                                    <Label for="step1">Step 5:</Label>
                                    <Input onChange={e => this.setState({ step5: e.target.value })} value={this.state.Step5} type="text" name="Step5" id="recipe-step5" placeholder="step 5" />
                                    <Button bsStyle="primary" className="saveRecipeButton" type="submit" >Save</Button>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </div>
                <div className="saved-recipe-cards-container"></div>
               
            </div>
        )
    }
}

export default SaveRecipe;