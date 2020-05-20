import React, { Component } from 'react';
// import {Image} from 'react-bootstrap';
import './howitworks.css'

export default class HowItWorks extends Component {
    render() {
        return(
            <section className="background-img" id = "howitworks">
                <div className="container justify-content-center">
                    <img className="image-fluid howitworks" src="https://raw.githubusercontent.com/Hiverlab/reality-cast-landing-page/master/public/images/workflow.png?token=AMBYZPV5UNW4MJG2UBXPBYK6YS5CK" alt=""/>
                </div>
            </section>
        );
    }
}