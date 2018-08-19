import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Play from './pages/Play';
import About from './pages/About';
import PlayerGuide from './pages/PlayerGuide';
//import logo from './styles/assets/logo.svg';
import './styles/scss/App.css';
import './styles/scss/play.scss';

const App = () => (
  <Router>
    <div className='container'>
        <div className='container artx-header position-fixed w-100 d-flex justify-content-between'>
          <ul className='list-inline'>
              <li className='list-inline-item'><a href='/about'>ARTX</a></li>
              <li className='list-inline-item'><a href='/community'>Community</a></li>
              <li className='list-inline-item'><a href='/auction-guide'>Auction Guide</a></li>
          </ul>
          <button className='btn btn-outline-primary' type='button'>Personal Account</button>
        </div>

      <Route exact path="/" component={Play} />
      <Route path="/about" component={About} />
      <Route path="/auction-guide" component={PlayerGuide} />
    </div>
  </Router>
);

export default App;
