import React from 'react';
import Footer from './components/Footer';
import Menu from './components/Menu';

const About = () => (
    <div>
       <Menu main={true} active='about'/>
       <Footer/>
    </div>
);

export default About;