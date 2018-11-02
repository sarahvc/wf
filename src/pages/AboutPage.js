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
        <div>
            <img className='fw-aboutme-img' src={aboutme} alt=''/>
        </div>
        <div className='container pt-4'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <p className='fw-aboutme'>Hello! I'm Wei. I'm a UX designer as well as a theater lover, all because of my curiosity about how different people think and behave, and my desire to create things that people can enjoy themselves with. I believe good designers should be invisible, just like good directors who arrange everything so naturally and appropriately that the audience can immerse themselves in the theater with no efforts.</p>
                </div>
            </div> 
            <div className='row'>
                <div className='col-12 col-md-6 offset-md-6'>
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={amadeus} alt=""/>
                                <div class="carousel-caption">
                                    <p>Me as Constanze in Amadeus.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={bnsh} alt=""/>
                                <div class="carousel-caption">
                                    <p>Me in poetry performance for the 100th aniversary of Tsinghua University.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={althy} alt=""/>
                                <div class="carousel-caption">
                                    <p>Me as the nurse in The Peach Blossom Land.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={wozj} alt=""/>
                                <div class="carousel-caption">
                                    <p>Me as Mrs.Kristine Linde in A Doll's House.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={wlxj} alt=""/>
                                <div class="carousel-caption">
                                    <p>Me as Mathilde in The Physicists.</p>
                                </div>   
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
        </div>
       <Footer/>
    </div>
);

export default About;