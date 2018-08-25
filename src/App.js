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
      <div className='artx-gradient-bg pt-5'>
        <div className='position-relative'>
          <div className='artx-header py-4 apx-14 position-fixed w-100 d-flex justify-content-between'>
            <ul className='list-inline mb-0'>
                <li className='list-inline-item mr-5'><a className='artx-type-twf' href='/artx00/'>Game</a></li>
                <li className='list-inline-item mr-5'><a className='artx-type-twf' href='/artx00/about'>ARTX</a></li>
                <li className='list-inline-item mr-5'><a className='artx-type-twf' href='/artx00/community'>Community</a></li>
                <li className='list-inline-item mr-5'><a className='artx-type-twf' href='/artx00/auction-guide'>Auction Guide</a></li>
            </ul>
            <Account/>
          </div>
        </div>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Play} />
        <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
        <Route path={process.env.PUBLIC_URL + '/auction-guide'} component={PlayerGuide} />
      </div>
    </Router>
);

export default App;
