import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Account from './pages/components/Account';
import Play from './pages/Play';
import About from './pages/About';
import PlayerGuide from './pages/PlayerGuide';
//import logo from './styles/assets/logo.svg';
import './styles/scss/App.css';
import './styles/scss/header.scss';
import './styles/scss/shared.scss';
import './styles/scss/spacing.scss';

const App =() => (
    <Router>
      <div class='artx-gradient-bg pt-5'>
        <div className='container position-relative'>
          <div className='container artx-header py-4 position-fixed w-100 d-flex justify-content-between'>
            <ul className='list-inline'>
                <li className='list-inline-item mr-5'><a className='artx-type-twf' href='/about'>ARTX</a></li>
                <li className='list-inline-item mr-5'><a className='artx-type-twf' href='/community'>Community</a></li>
                <li className='list-inline-item mr-5'><a className='artx-type-twf' href='/auction-guide'>Auction Guide</a></li>
            </ul>
            <Account/>
          </div>
        </div>
        <Route exact path="/"  component={Play} />
        <Route path="/about" component={About} />
        <Route path="/auction-guide" component={PlayerGuide} />
      </div>
    </Router>
);

export default App;
