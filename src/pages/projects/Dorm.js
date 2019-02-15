import React from 'react';
import Footer from '../components/Footer';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';

import top from '../../styles/assets/cmudormtop.png';
import cjm from '../../styles/assets/presentcjm.jpg';
import moving from '../../styles/assets/moveinday.jpg';
import dorm from '../../styles/assets/dorm.png';
import dormweb from '../../styles/assets/dormweb.png';
import wf00 from '../../styles/assets/wireframesdorm.png';
import wf01 from '../../styles/assets/dormwireframes00.png';
import wf02 from '../../styles/assets/dormwireframes01.png';
import wf03 from '../../styles/assets/dormwireframes02.png';
import wf04 from '../../styles/assets/dormwireframes03.png';
import wf05 from '../../styles/assets/dormwireframes04.png';
import wf06 from '../../styles/assets/dormwireframes05.png';

const Dorm = () => (
    <div className='fw-dorm'>
        <Menu main={false}/>
        <main>
            <Overview title='MAKING THE DORM HOMEY' quote="I'd so touched to konw that my child is being taken such a good care of." source='--- A professor in critique sessions' topimg={top} type='Course Project. Responsive web.' duration='3 weeks.' members='Yujun Li.'/>
            <div className='container'>
                <h2 className='text-center mt-5'>THE PROJECT</h2>
                <div className='row'>
                    <div className='col-12 col-md-8 offset-md-2'>
                        <h3>DESIGN CHALLENGE</h3>
                        <p>We were given the task to explore new CMU student's journey to CMU campus, and to design a <strong>responsive web</strong> service based on identified opportunities within the journey.</p>
                        <h3 className='mt-4'>RESEARCH</h3>
                        <p>We interviewed four CMU students as our <strong>guerrilla research</strong>, and captured three pain points during their journey to CMU:</p>
                        <ol>
                            <li>They feel nervous and anxious about their new life in college.</li>
                            <li>Waiting in line for a long time to park their car when they arrive at CMU is annoying.</li>
                            <li>The new dorm room is not homey at all.</li>
                        </ol>
                        <p className='mb-0'>We drew a <strong>customer journey map</strong>, wrote <strong>scenarios</strong>, and created a <strong>persona</strong> to further discuss and explore those pain points.</p>
                        <img className='img-fluid' src={cjm} alt=''/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-8 offset-md-2'>
                        <p className='mb-0'>After discussion and brainstorming, we decided to proceed with the third pain points because we found this gap in their experience very subtle and interesting. When they arrived at CMU, there were volunteers who helped them with their luggage and and talked with them about the campus life. This was a very warm and nice experience as it could ease their weariness after a long trip and their tension to the new environment.</p>
                        <img className='img-fluid' src={moving} alt=''/>
                        <p className='mt-4 mb-0'>However, things were totally different after they got to the dorm. The volunteers left to help other new students. There were only them with lots of luggage waiting for unpacking in an empty and deserted room. To deal with this change, we proposed an idea of providing a little customization on their new dorm.</p>
                        <img className='img-fluid' src={dorm} alt=''/>
                        <p className='mt-4 mb-0'>To deal with this change, we proposed an idea of providing a little customization on their new dorm, so that their warm and suprising experience could continue after they arrived at the dorm.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-8 offset-md-2 mt-5'>
                        <h3>WIREFRAMES</h3>
                        <p className='mb-0'>We drew wireframes to discuss and iterate our design.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6 offset-md-3'>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={wf00} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={wf01} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={wf02} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={wf03} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={wf04} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={wf05} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={wf06} alt=""/>
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
                </div>
                <div className='row'>
                    <div className='col-12 col-md-8 offset-md-2 mt-4'>
                        <h3>FINAL DESIGN</h3>
                        <p id='dormmobile' className='mb-0 mx-auto'>Mobile version</p>
                        <iframe aria-labelledby='dormmobile' className='d-block mx-auto' width="560" height="315" title='mobile version demo' src="https://www.youtube.com/embed/pmCXO38TFZ0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-10 offset-md-1 mt-4'>
                        <figure>
                            <figcaption>Web version</figcaption>
                            <img className='img-fluid' src={dormweb} alt=''/>
                        </figure>
                    </div>
                </div>
            </div>
        </main>
        <Footlinks prev='ezmoto' next='dashboard'/>
        <Footer/>
    </div>
);

export default Dorm;