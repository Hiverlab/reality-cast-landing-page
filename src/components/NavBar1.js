import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse } from 'mdbreact';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import './navbar.css';
// import Tutorial from './Tutorial.js';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          {/* <Router> */}
            <MDBNavbar fixed="top" dark expand="md" scrolling transparent>
              <Container>
                <MDBNavbarBrand>
                  <strong>
                    <img src="https://raw.githubusercontent.com/Hiverlab/reality-cast-landing-page/master/public/images/logo.png?token=AMBYZPV4VS26XBERFMA5X4C6YS474" height="50px" width="130px" alt=""/>
                  </strong>
                </MDBNavbarBrand>
                {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                <MDBCollapse isOpen={this.state.collapse} navbar>
                  <MDBNavbarNav right>
                    <Link to="/">
                      <Nav.Link id="move-down">Home</Nav.Link>
                    </Link>
                    <Link to="/tutorial">
                      <Nav.Link id="move-down">Tutorial</Nav.Link>
                    </Link>
                        
                        
                        <Nav.Link  id="move-down" href="#pricing">Pricing</Nav.Link>
                        <Nav.Link  id="move-down" href="https://www.youtube.com/">Log In</Nav.Link>
                        

                        <button id="navbar-button" type= "button">Sign-Up</button>
                        
                        {/* <Button href="https://www.youtube.com/" variant="outline-white">Sign-Up</Button> */}
                  </MDBNavbarNav>
                </MDBCollapse>
              </Container>
            </MDBNavbar>
            {/* <Switch>
              <Route exact path='/reality-cast-landing-page/tutorial' component={Tutorial} />
            </Switch>
          </Router> */}
        </header>
      </div>
    );
  }
}

export default NavBar;