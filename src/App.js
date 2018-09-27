import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Work from './pages/WorkPage';
import About from './pages/AboutPage';
import Resume from './pages/ResumePage';

import './styles/scss/_app.scss';

const App =() => (
    <Router>
      <div>
        <div className='position-relative'>
          <nav className="navbar navbar-expand-lg py-3 position-fixed w-100">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="menu">
              <ul className='navbar-nav mr-auto'>
                  <li className='nav-item mr-5'><a className='nav-link' href='/'>Work</a></li>
                  <li className='nav-item mr-5'><a className='nav-link' href='/about'>About me</a></li>
                  <li className='nav-item mr-5'><a className='nav-link' href='/resume'>Resume</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Work} />
        <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
        <Route path={process.env.PUBLIC_URL + '/resume'} component={Resume} />
      </div>
    </Router>
);

export default App;
