import React, { Component } from 'react';
import './hero.css'
import { Button } from 'react-bootstrap';
import { ChevronDown } from 'react-bootstrap-icons';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Hero extends Component {
    render() {
        return (
            <div id="intro" className="view">
                <div className="embed-responsive video-background-container">
                    <video id="video" autoPlay muted loop playsInline>
                        <source src="/public/images/Microsoft%20HoloLens%202%20Trailer.mp4" type="video/mp4"/>
                    </video>
                    <div id="words" className="text-overlay">
                        <div className="container-fluid d-flex align-items-center justify-content-center">

                            <div className="row d-flex justify-content-center text-center">

                                <div className="col-md-10">

                                    
                                    <h3 id="title" className="display-6 white-text pt-5 mb-2">LAUNCH YOUR REALITY, ANYWHERE.</h3>

                                
                                    {/* <hr className="hr-light"></hr> */}

                                    
                                    <h5 id="title-description" className="white-text my-4">
                                        Easily create Augmented Reality presentations and take your proposals, pitches, or webinars
                                        to the next level with Hiverlab's Reality Cast.
                                    </h5>

                                    <button id="hero-button" type= "button">Get a Demo</button>

                        
                                    {/* <Button id="demo" variant="outline-warning">Get a Demo</Button> */}

                                    {/* <hr id="transparent"></hr> */}
                                    
                                    
                                    {/* <ChevronDown color="white" id="chevron" size={48}/> */}
                                    
                                    
                                </div>
                                
                            </div>
                            
                        </div>
                        <div className=" chevron">
                            <a className="smoothscroll" href="#featured-presentations">
                                <ChevronDown color="white" size={48}/>
                                {/* <FontAwesomeIcon icon={faChevronDown} size="4x" style={{ color: 'white' }}/> */}
                                <p className="white-text">
                                    LEARN MORE
                                </p>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}
