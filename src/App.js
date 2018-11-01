import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Work from './pages/WorkPage';
import About from './pages/AboutPage';
import Resume from './pages/ResumePage';
import PNC from './pages/projects/PNC';


import './styles/scss/_app.scss';

const App =() => (
    <Router>
      <div> 
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Work} />
        <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
        <Route path={process.env.PUBLIC_URL + '/resume'} component={Resume} />
        <Route path={process.env.PUBLIC_URL + '/projects/pnc'} component={PNC} />
      </div>
    </Router>
);

export default App;
