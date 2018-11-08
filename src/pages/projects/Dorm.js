import React from 'react';
import Footer from '../components/Footer';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';

import top from '../../styles/assets/cmudormtop.png';
import cjm from '../../styles/assets/presentcjm.jpg';
import dorm from '../../styles/assets/dorm.png';

const Dorm = () => (
    <div className='fw-dorm'>
        <Menu main={false}/>
        <main>
            <Overview title='MAKING THE DORM HOMEY' quote="I'd so touched to konw that my child is being taken care of." source='--- Professor' topimg={top} type='Course Project. Responsive web.' duration='3 weeks.' members='Yujun Li.'/>
            <div className='container'>
                <h2 className='text-center mt-5'>THE PROJECT</h2>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-6 offset-md-3'>
                            <h3>DESIGN CHALLENGE</h3>
                            <p>We were given the task to explore new CMU student's journey to CMU campus, and to design a <strong>responsive web</strong> service based on identified opportunities within the journey.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6 offset-md-3'>
                            <h3>RESEARCH</h3>
                            <p>We interviewed four CMU students as our <strong>guerrilla research</strong>, and captured three pain points during their journey to CMU:</p>
                            <ol>
                                <li>They feel nervous and anxious about their new life in college.</li>
                                <li>Waiting in line for a long time to park their car when they arrive at CMU is annoying.</li>
                                <li>The new dorm room is not homey at all.</li>
                            </ol>
                            <p>We drew a <strong>customer journey map</strong>, wrote <strong>scenarios</strong>, and created a <strong>persona</strong> to further discuss and explore those pain points.</p>
                            
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-8 offset-md-2'>
                            <img className='img-fluid' src={cjm} alt=''/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6 offset-md-3'>
                            <p>After discussion and brainstorming, we decided to proceed with the third pain points because we found this gap in their experience very subtle and interesting. When they arrived at CMU, there were volunteers who helped them with their luggage and and talked with them about the campus life. This was a very warm and nice experience as it could ease their weariness after a long trip and their tension to the new environment. However, things were totally different after they got to the dorm. The volunteers left to help other new students. There were only them with lots of luggage waiting for unpacking in an empty and deserted room. To deal with this change, we proposed an idea of providing a little customization on their new dorm.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <img className='img-fluid' src={cjm} alt=''/>
                        </div>
                        <div className='col-12 col-md-6'>
                            <img className='img-fluid' src={dorm} alt=''/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6 offset-md-3'>
                            <h3>WIREFRAMES</h3>
                            <p>We drew wireframes to discuss and iterate our design.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-8 offset-md-2'>
                            <h3>FINAL DESIGN</h3>
                            <img className='img-fluid' src={dorm} alt=''/>
                            <iframe className='d-block mx-auto' width="560" height="315" title='mobile version demo' src="https://www.youtube.com/embed/pmCXO38TFZ0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footlinks prev='ezmoto' next='dashboard'/>
        <Footer/>
    </div>
);

export default Dorm;