import React from 'react';
import Footer from '../components/Footer';
//import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';
//import Password from '../components/Password';
//import top from '../../styles/assets/designsystemtop.png';
//import content from '../../styles/assets/designsystemcontent.png';

const StatCrunch = () => (
    <div className='fw-designsystem'>
        <Menu main={false}/>
        <div className="container">
            <p className='text-center mt-5'>Coming soon.</p>
        </div>  
        <Footlinks prev='neu' next='ezmoto'/>
        <Footer/>
    </div>
);

export default StatCrunch;