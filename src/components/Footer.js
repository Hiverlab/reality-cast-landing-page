import React, { Component } from 'react';
import './footer.css'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small black">
 
                <div id="foot" className="container mt-5 mb-4 text-center text-md-left">
                    <div className="row mt-3">

            
                        <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                            <strong>
                            <img src="/images/logo.png" height="50px" width="130px" alt=""/>
                            </strong>
                        </div>
                
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <p>
                                Catherine Loy
                            </p>
                            <p>
                            <a href="https://www.hiverlab.com/">www.hiverlab.com</a>
                            </p>
                        </div>
                
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <h6 className="text-uppercase font-weight-bold">
                                <strong>Useful links</strong>
                            </h6> */}
                            {/* <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"/> */}
                            <p>
                            <FontAwesomeIcon icon={faPhone} /> +65 9336 1450
                            </p>
                            <p>
                            <FontAwesomeIcon icon={faEnvelope} /> ask@realitycast.io
                            </p>
                            {/* <p>
                                <a href="#!">Shipping Rates</a>
                            </p>
                            <p>
                                <a href="#!">Help</a>
                            </p> */}
                        </div>
        
                        <div className="col-md-4 col-lg-3 col-xl-3">
                            {/* <h6 className="text-uppercase font-weight-bold">
                                <strong>Contact</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"/> */}
                            <p>
                            <FontAwesomeIcon icon={faMapMarkerAlt} /> Toa Payoh N, #04-12/14/15 1008    Singapore 318990
                            </p>
                        </div>
        

                    </div>
                </div>

                <div className="footer-copyright py-3 align-left">© Reality Cast 2020. All rights reserved
                </div>
        

            </footer>
        );
    }
}