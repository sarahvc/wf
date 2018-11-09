import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
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

import './styles/scss/_app.scss';

const App =() => (
    <Router>
      <div> 
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Work} />
        <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
        <Route path={process.env.PUBLIC_URL + '/resume'} component={Resume} />
        <Route path={process.env.PUBLIC_URL + '/projects/designsystem'} component={DesignSystem} />
        <Route path={process.env.PUBLIC_URL + '/projects/decentralism'} component={Decentralism} />
        <Route path={process.env.PUBLIC_URL + '/projects/pnc'} component={PNC} />
        <Route path={process.env.PUBLIC_URL + '/projects/shoppinglist'} component={Shoppinglist} />
        <Route path={process.env.PUBLIC_URL + '/projects/personae'} component={Personae} />
        <Route path={process.env.PUBLIC_URL + '/projects/ezmoto'} component={EZmoto} />
        <Route path={process.env.PUBLIC_URL + '/projects/dorm'} component={Dorm} />
        <Route path={process.env.PUBLIC_URL + '/projects/dashboard'} component={Dashboard} />
        <Route path={process.env.PUBLIC_URL + '/projects/scrabble'} component={Scrabble} />
      </div>
    </Router>
);

export default App;
