import React from 'react';
import './App.css';
import './style.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'mdbootstrap/css/bootstrap.min.css';
// import 'mdbootstrap/css/mdb.min.css';
// import 'mdbootstrap/css/style.css';
// import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// import NavBar from './components/NavBar.js'
import NavBar from './components/NavBar1.js'
import Features from './components/Features.js';
import FeaturedPresentations from './components/FeaturedPresentations';
import Hero from './components/Hero';
// import Pricing from './components/Pricing';
import Pricing1 from './components/Pricing1';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
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

export default App;
