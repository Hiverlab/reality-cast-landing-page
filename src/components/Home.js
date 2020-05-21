import React, { Component } from 'react';
// import NavBar from './components/NavBar.js'
import Features from './components/Features.js';
import FeaturedPresentations from './components/FeaturedPresentations';
import Hero from './components/Hero';
// import Pricing from './components/Pricing';
import Pricing1 from './components/Pricing1';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

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