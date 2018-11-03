import React from 'react';
import Footer from '../components/Footer';
import Takeaway from '../components/Takeaway';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';

const Crossborder = () => (
    <div className='fw-crossborder'>
        <Menu main={false}/>
        <main>
            <Overview title='' quote='' source='--- ' summary={[' ',<strong>as</strong>, ' ']} myrole={[' ',<strong>aa</strong>, ' ']} type='' duration='7 months / 2 semesters.' members=''/>
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
        <Footlinks prev='pnc' next='personae'/>
        <Footer/>
    </div>
);

export default Crossborder;