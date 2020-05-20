import React, { Component } from 'react';
import { Nav, Navbar, Container, Button } from 'react-bootstrap';

export default class NavBar extends Component {
    render() {
        return (
            <Navbar scrolling dark expand="lg" fixed="top" collapseOnSelect transparent>
                <Container>
                    <Navbar.Brand  id="white" href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link  id="white" href="#features">Features</Nav.Link>
                        <Nav.Link  id="white" href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav>
                        <Nav.Link  id="white" href="#deets">
                            <Button variant="outline-light">Sign-Up</Button>
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}