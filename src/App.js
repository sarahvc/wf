import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Work from './pages/WorkPage';
import About from './pages/AboutPage';
import Resume from './pages/ResumePage';
import PNC from './pages/projects/PNC';
import title from './styles/assets/title.svg';

import './styles/scss/_app.scss';

const App =() => (
    <Router>
      <div className='container'>
        <div className='position-relative'>
          <nav className="navbar navbar-expand-lg w-100">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
              <i className="fas fa-bars"></i>
            </button>
            <span className="navbar-brand"><img src={title} alt='Wei Fang, full stack designer'/></span>
            <div className="collapse navbar-collapse text-right" id="menu">
              <ul className='navbar-nav ml-auto'>
                  <li className='nav-item ml-5 font-nunito'><a className='nav-link' href='/'>Work</a></li>
                  <li className='nav-item ml-5 font-nunito'><a className='nav-link' href='/about'>About me</a></li>
                  <li className='nav-item ml-5 font-nunito'><a className='nav-link' href='/resume'>Resume</a></li>
              </ul>
            </div>
          </nav>
        </div>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Work} />
        <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
        <Route path={process.env.PUBLIC_URL + '/resume'} component={Resume} />
        <Route path={process.env.PUBLIC_URL + '/projects/pnc'} component={PNC} />
      </div>
    </Router>
);

export default App;
