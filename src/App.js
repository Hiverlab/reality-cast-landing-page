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
import NavBar from './components/NavBar1.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home.js'
import Tutorial from './components/Tutorial.js'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/reality-cast-landing-page/" component={Home} />
          <Route exact path="/reality-cast-landing-page/tutorial" component={Tutorial} />
        </div>
      </Router>
    </div>
  );
}

export default App;
