import React from 'react';
import Footer from '../components/Footer';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';

import top from '../../styles/assets/ezmototop.png';
import content00 from '../../styles/assets/ezmotous01.png';
import content01 from '../../styles/assets/ezmotous00.png';
import wireframe01 from '../../styles/assets/ezmotowf01.png';
import wireframe02 from '../../styles/assets/ezmotowf02.png';
import wireframe03 from '../../styles/assets/ezmotowf03.png';
import wireframe04 from '../../styles/assets/ezmotowf04.png';
import wireframe05 from '../../styles/assets/ezmotowf05.png';
import sitemap from '../../styles/assets/sitemap.png';

const EZmoto = () => (
    <div className='fw-ezmoto'>
        <Menu main={false}/>
        <main>
        <Overview title='EZ MOTO INC.' topimg={top} summary={["This is a webiste for a used car dealer. Their goal for this site is mainly about demonstrating their cars on sale and showcasing their services while speaking with customers and vendors. The majority of their deals is done offline."]} myrole={['As the designer and the developer, I collected needs and requirements from the owner and sales people, created wireframes and high fidelity mockups, and used wordpress and bootstrap to build the website.']} type='Part-time work.' duration='6 months.' members='Individual Project.'/>
            <div className='container'>
                <h2 className='text-center mt-5'>THE PROJECT</h2>
                <div className='row'>
                    <div className='col-12 col-md-8 offset-md-2'>
                        <figure className='mt-4'>
                            <figcaption>Sitemap.</figcaption>
                            <img src={sitemap} className='img-fluid' alt=''/>
                        </figure>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6 offset-md-3'>
                        <p className='mt-4 mb-0'>Wireframes.</p>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100 rounded-0" src={wireframe01} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-0" src={wireframe02} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-0" src={wireframe03} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-0" src={wireframe04} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-0" src={wireframe05} alt=""/>
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
                    <div className='col-12 col-md-10 offset-md-1'>
                        <figure className='mt-4'>
                            <figcaption>Hifi mockups.</figcaption>
                            <img src={content00} className='img-fluid' alt=''/>
                            <img src={content01} className='img-fluid mt-2' alt=''/>
                        </figure>
                    </div>
                </div>
            </div>
        </main>
        <Footlinks prev='shoppinglist' next='dorm'/>
        <Footer/>
    </div>
);

export default EZmoto;