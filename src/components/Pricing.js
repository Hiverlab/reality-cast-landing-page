import React, { Component } from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import './pricing.css'

export default class Pricing extends Component {
    render() {
        return (
            <section id="pricing" className="text-center">
                <h2 className="mb-5 font-weight-bold">Pricing Plans</h2>

                {/* <div className="row d-flex justify-content-center mb-4">

                    <div className="col-md-8">

                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptate
                            hic
                            provident nulla repellat
                            facere esse molestiae ipsa labore porro minima quam quaerat rem, natus repudiandae debitis
                            est
                            sit pariatur.</p>

                    </div>

                </div> */}

                <div className="row justify-content-center">
                    <CardGroup>
                        <Card border="warning">
                            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                            <Card.Body>
                            <Card.Title>Free</Card.Title>
                            <Card.Text className="card-body">
                                <h1>$0</h1>
                                <h6>forever</h6>

                                <h5 className="description">Host up to 5 projects</h5>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Button variant="outline-warning" block>Get a Demo</Button>
                            </Card.Footer>
                        </Card>
                        <Card border="warning">
                            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                            <Card.Body>
                            <Card.Title>Regular Presenter</Card.Title>
                            <Card.Text className="card-body">
                                <h1>$10</h1>
                                <h6>Per month</h6>

                                <h5 className="description">Host up to 50 projects</h5>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Button variant="outline-warning" block>Get a Demo</Button>
                            </Card.Footer>
                        </Card>
                        <Card border="warning">
                            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                            <Card.Body>
                            <Card.Title>Active Presenter</Card.Title>
                            <Card.Text className="card-body">
                                <h1>$20</h1>
                                <h6>Per month</h6>

                                <h5 className="description">Host up to 100 projects</h5>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Button variant="outline-warning" block>Get a Demo</Button>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </div>
                
            </section>
        );
    }
}