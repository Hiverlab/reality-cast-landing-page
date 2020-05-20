import React, { Component } from 'react';
// import {Image} from 'react-bootstrap';
import './howitworks.css'

export default class HowItWorks extends Component {
    render() {
        return(
            <section className="background-img" id = "howitworks">

                <div className="container justify-content-center">
                    <img className="image-fluid howitworks" src="/images/workflow.png" alt=""/>
                </div>
            </section>
        );
    }
}