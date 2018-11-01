import React from 'react';
import Footer from './components/Footer';
import Menu from './components/Menu';

const Resume = () => (
    <div>
        <Menu main={true} active='resume'/>
        <Footer/>
    </div>
);

export default Resume;