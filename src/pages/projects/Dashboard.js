import React from 'react';
import Footer from '../components/Footer';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';
import TwoColImg from '../components/TwoColImg';
import top from '../../styles/assets/dashboardtop.jpg';
import gif from '../../styles/assets/dashboard.gif';
import da from '../../styles/assets/dataanalysis.png';
import sketch00 from '../../styles/assets/sketch00.jpg';
import sketch01 from '../../styles/assets/sketch01.jpg';
import sketch02 from '../../styles/assets/sketch02.jpg';
import sketch03 from '../../styles/assets/sketch03.jpg';
import sketch04 from '../../styles/assets/sketch04.jpg';
import dsketch00 from '../../styles/assets/dashboardv0.jpg';
import dsketch01 from '../../styles/assets/dashboardv1.jpg';
import dsketch02 from '../../styles/assets/dashboardv2.jpg';

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
                        <p>We were asked to create an online dashboard design for the foresters of the Pennsylvania <a className='text-green' href='http://www.dcnr.state.pa.us'>Department of Conservation and Natural Resources (DCNR)</a> , which would supply information about pest presence and tree health to help DCNR make the actionable assessments. Specific design constraints including that there's no interaction involved, it's a single, non-scrolling, information display, and there should be simple animations that allow the viewer to process and understand information at a glance. </p>
                    </div>
                </div>
            </div>
            <TwoColImg textLeft={true} title='DATA ANALYSIS' text='We were given a giant spreadsheet of data supplied by Carnegie Museum of Natural History. They monitor collection sites and record tons of data. I first extracted the data about the tree species and corresponding destructive insect that I was assigned. And then I analyzed the data and found out there are prominent relationship between the bug activity and weather, and trees from different sites show different growth pattern.' src={da}/>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-12 col-md-7'>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100 rounded-0" src={sketch00} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-0" src={sketch01} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-0" src={sketch02} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-0" src={sketch03} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-0" src={sketch04} alt=""/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <div>
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </div>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <div>
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className='col-12 col-md-5'>
                        <h3 className='font-nunito'>SKETCH</h3>
                        <p>I sketched all the possible types of charts to demonstrate the relationships and patterns that I revealed from the data. In this way, I could quickly find out better ways to show the information jointly.</p>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12 col-md-5'>
                        <h3 className='font-nunito'>DIGITAL DESIGN</h3>
                        <p>In my first few drafts of digital design, I tried to present all of the information that I think of importance on the one single screen. The screen looked so busy. Then I realized I shouldn&#39;t be so obsessed with my findings from the data. I need to think of the design constraints carefully too. So in the final design, I removed some charts and combined some charts.</p>
                    </div>
                    <div className='col-12 col-md-7'>
                        <div id="carouselExample" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100 rounded-0" src={dsketch00} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-0" src={dsketch01} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-0" src={dsketch02} alt=""/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                                <div>
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </div>
                            </a>
                            <a className="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
                                <div>
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-8 offset-md-2 mt-4'>
                        <h3>FINAL DESIGN</h3>
                        <img className='img-fluid rounded-0' src={gif} alt=''/>
                    </div>
                </div>
            </div> 
        </main>
        <Footlinks prev='dorm' next='scrabble'/>
        <Footer/>
    </div>
);

export default Dashboard;