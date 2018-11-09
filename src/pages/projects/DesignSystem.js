import React from 'react';
import Footer from '../components/Footer';
import Takeaway from '../components/Takeaway';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';

const DesignSystem = () => (
    <div className='fw-designsystem'>
        <Menu main={false}/>
        <main>
            <Overview title='DESIGN SYSTEM' summary={['A design system for Pearson Higher Education digital learning products.']} myrole={['Front end developer']} type='' duration='2 months.' members=''/>
            <div className='container'>
                <h2 className='text-center mt-5'>THE PROJECT</h2>
                <h2 className='text-center mt-5'>TAKEAWAY</h2>
                <div className='row mt-4'>
                    <Takeaway title='' content=''/>
                    <Takeaway title='' content=''/>
                    <Takeaway title='' content=''/>
                </div>
            </div>
        </main>
        <Footlinks next='decentralism'/>
        <Footer/>
    </div>
);

export default DesignSystem;