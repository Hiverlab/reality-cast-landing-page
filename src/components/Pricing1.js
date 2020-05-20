import React, { Component } from 'react';
import './pricing.css'

export default class Pricing1 extends Component {
    render() {
        return (
            <section id="pricing" className="container text-center">
                <h2 id="pricing-title" className="mb-5 font-weight-bold">Pricing Plans</h2>

                <div className="row justify-content-center">
                    <div className="pricing-box">
                        <div className="pricing-container">
                            <img src="/images/free.png" width="98px" height="98px" alt=""/>
                            <p className="pricing-header">Free</p>
                            <p className="price">$0</p>
                            <p className="duration">forever</p>
                            <p className="projects">Host up to 5 projects</p>
                        
                            <button id="pricing-button" type= "button">Get a Demo</button>
                        
                        </div>
                    </div>
                    <div className="pricing-box">
                        <div className="pricing-container">
                            <img src="/images/regular.png" width="98px" height="98px" alt=""/>
                            <p className="pricing-header">Regular Presenter</p>
                            <p className="price">$10</p>
                            <p className="duration">Per month</p>
                            <p className="projects">Host up to 50 projects</p>
                            
                            <button id="pricing-button" type= "button">Get a Demo</button>
                           
                        </div>
                    </div>
                    <div className="pricing-box">
                        <div className="pricing-container">
                            <img src="/images/active.png" width="98px" height="98px" alt=""/>
                            <p className="pricing-header">Active Presenter</p>
                            <p className="price">$20</p>
                            <p className="duration">Per month</p>
                            <p className="projects">Host up to 100 projects</p>
                           
                            <button id="pricing-button" type= "button">Get a Demo</button>
                           
                        </div>
                    </div>
                </div>
                
            </section>
        );
    }
}