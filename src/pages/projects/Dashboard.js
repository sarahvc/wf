import React from 'react';
import Footer from '../components/Footer';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';
import TwoColImg from '../components/TwoColImg';
import top from '../../styles/assets/dashboardtop.jpg';

const Dashboard = () => (
    <div className='fw-dashboard'>
        <Menu main={false}/>
        <main>
            <Overview title='DASHBOARD' topimg={top} type='Course Project. Forestry.' duration='3 weeks.' members='Individual Project.'/>
            <div className='container'>
                <h2 className='text-center mt-5'>THE PROJECT</h2>
                <div className='row'>
                    <div className='col-12 col-md-6 offset-md-3'>
                        <h3>DESIGN CHALLENGE</h3>
                        <p>We were asked to create an online dashboard design for the foresters of the Pennsylvania <a className='fw-links' href='http://www.dcnr.state.pa.us'>Department of Conservation and Natural Resources (DCNR)</a> , which would supply information about pest presence and tree health to help DCNR make the actionable assessments. Specific design constraints including that there's no interaction involved, it's a single, non-scrolling, information display, and there should be simple animations that allow the viewer to process and understand information at a glance. </p>
                    </div>
                </div>
            </div>
            <TwoColImg textLeft={true} title='DATA ANALYSIS' text='We were given a giant spreadsheet of data supplied by Carnegie Museum of Natural History. They monitor collection sites and record tons of data. I first extracted the data about the tree species and corresponding destructive insect that I was assigned. And then I analyzed the data and found out there are prominent relationship between the bug activity and weather, and trees from different sites show different growth pattern.' src=''/>
            <TwoColImg title='SKETCH' text='I sketched all the possible types of charts to demonstrate the relationships and patterns that I revealed from the data. In this way, I could quickly find out better ways to show the information jointly.' src=''/>
            <TwoColImg textLeft={true} title='DIGITAL DESIGN' text='In my first few drafts of digital design, I tried to present all of the information that I think of importance on the one single screen. The screen looked so busy. Then I realized I shouldn&#39;t be so obsessed with my findings from the data. I need to think of the design constraints carefully too. So in the final design, I removed some charts and combined some charts.' src=''/>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6 offset-md-3'>
                        <h3>FINAL DESIGN</h3>
                        <img className='img-fluid' src='' alt=''/>
                    </div>
                </div>
            </div> 
        </main>
        <Footlinks prev='dorm' next='scrabble'/>
        <Footer/>
    </div>
);

export default Dashboard;