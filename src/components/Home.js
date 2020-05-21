import React, { Component } from 'react';
// import NavBar from './components/NavBar.js'
import Features from './Features.js';
import FeaturedPresentations from './FeaturedPresentations';
import Hero from './Hero';
// import Pricing from './components/Pricing';
import Pricing1 from './Pricing1';
import HowItWorks from './HowItWorks';
import Footer from './Footer';

export default class Tutorial extends Component {
    render() {
        return(
            <div>
                <header>

                <Hero/>

                </header>

                <main className="bg mt-5">
                <div>

                    <FeaturedPresentations/>

                    <hr className="container my-5 yellow"></hr>

                    <Features/>

                    <hr className="container my-5 invisible"></hr>

                    <HowItWorks/>

                    <Pricing1/>

                </div>
                </main>

                <Footer/>
            </div>
        );
    }
}