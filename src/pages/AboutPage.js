import React from 'react';
import Footer from './components/Footer';
import Menu from './components/Menu';
import aboutme from '../styles/assets/aboutme.png';
import amadeus from '../styles/assets/amadeus.png';
import bnsh from '../styles/assets/bnsh.png';
import althy from '../styles/assets/althy.png';
import wozj from '../styles/assets/wozj.png';
import wlxj from '../styles/assets/wlxj.png';

const About = () => (
    <div>
        <Menu main={true} active='about'/>
        <div className='fw-aboutme-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-8 col-md-6 offset-lg-2 col-lg-4'>
                        <p className='fw-aboutme mb-0'>Hello! I'm Wei. I'm a UX designer as well as a theater lover, all because of my curiosity about how different people think and behave, and my desire to create things that people can enjoy themselves with. I believe good designers should be invisible, just like good directors who arrange everything so naturally and appropriately that the audience can immerse themselves in the theater with no efforts.</p>
                    </div>
                </div>
            </div>     
        </div>
        <div className='container mt-5'>
            <div className='row mb-4'>
                <div className='col-12 col-md-4 d-flex'>
                    <h1 className='fw-aboutme-title font-nunito text-right w-100 align-self-end'>ON<br/>THE<br/>STAGE</h1>
                </div>
                <div className='col-12 col-md-4'>
                    <img className="d-block w-100 border rounded-0" src={bnsh} alt=""/>
                </div> 
                <div className='col-12 col-md-4'>
                    <img className="d-block w-100 border rounded-0" src={althy} alt=""/>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-4'>  
                    <img className="d-block w-100 border rounded-0" src={amadeus} alt=""/>
                </div>
                <div className='col-12 col-md-4'>
                    <img className="d-block w-100 border rounded-0" src={wlxj} alt=""/>
                </div>
                <div className='col-12 col-md-4'>
                    <img className="d-block w-100 border rounded-0" src={wozj} alt=""/>
                </div>
            </div>
        </div>
       <Footer/>
    </div>
);

export default About;