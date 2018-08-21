import React, { Component } from 'react';
import {Row, Container, Col} from 'reactstrap';
import './About.css';

class About extends Component {
    render() {
        return(
            <div className="about-container">
                <div className="about-background">
                    <Container>
                        <Row>
                            <div className="info-box">
                                <Col className="about-title">What is Like Mama Made?</Col>
                                <Col className="about-content">Like Mama Made is a recipe-sharing application at its core. Users can build and save their own recipes, as well as search for other recipes for a quick one-off meal. Build your recipe book today and start sharing with friends and loved ones.  </Col>
                            </div>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default About;