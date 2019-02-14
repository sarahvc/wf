import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGA from 'react-ga';
import Work from './pages/WorkPage';
import About from './pages/AboutPage';
import Resume from './pages/ResumePage';
import PNC from './pages/projects/PNC';
import Shoppinglist from './pages/projects/Shoppinglist';
import Personae from './pages/projects/Personae';
import EZmoto from './pages/projects/EZmoto';
import Dorm from './pages/projects/Dorm';
import Dashboard from './pages/projects/Dashboard';
import Scrabble from './pages/projects/Scrabble';
import DesignSystem from './pages/projects/DesignSystem';
import Decentralism from './pages/projects/Decentralism';
import Tadpoles from './pages/projects/Tadpoles';
import StatCrunch from './pages/projects/StatCrunch';
import NEU from './pages/projects/NEUonlineMBA';

import './styles/scss/_app.scss';


const App =() => (
    <Router>
      <div> 
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Work} />
        <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
        <Route path={process.env.PUBLIC_URL + '/resume'} component={Resume} />
        <Route path={process.env.PUBLIC_URL + '/projects/tadpoles'} component={Tadpoles} />
        <Route path={process.env.PUBLIC_URL + '/projects/designsystem'} component={DesignSystem} />
        <Route path={process.env.PUBLIC_URL + '/projects/decentralism'} component={Decentralism} />
        <Route path={process.env.PUBLIC_URL + '/projects/pnc'} component={PNC} />
        <Route path={process.env.PUBLIC_URL + '/projects/shoppinglist'} component={Shoppinglist} />
        <Route path={process.env.PUBLIC_URL + '/projects/personae'} component={Personae} />
        <Route path={process.env.PUBLIC_URL + '/projects/statcrunch'} component={StatCrunch} />
        <Route path={process.env.PUBLIC_URL + '/projects/neu'} component={NEU} />
        <Route path={process.env.PUBLIC_URL + '/projects/ezmoto'} component={EZmoto} />
        <Route path={process.env.PUBLIC_URL + '/projects/dorm'} component={Dorm} />
        <Route path={process.env.PUBLIC_URL + '/projects/dashboard'} component={Dashboard} />
        <Route path={process.env.PUBLIC_URL + '/projects/scrabble'} component={Scrabble} />
      </div>
    </Router>
);

function initializeReactGA() {
  ReactGA.initialize('UA-132599765-1');
  ReactGA.pageview('/');
  ReactGA.pageview('/about');
  ReactGA.pageview('/resume');
  ReactGA.pageview('/projects/pnc');
  ReactGA.pageview('/projects/tadpoles');
  ReactGA.pageview('/projects/designsystem');
  ReactGA.pageview('/projects/decentralism');
  ReactGA.pageview('/projects/shoppinglist');
  ReactGA.pageview('/projects/personae');
  ReactGA.pageview('/projects/ezmoto');
  ReactGA.pageview('/projects/dorm');
  ReactGA.pageview('/projects/dashboard');
}

initializeReactGA();

export default App;


