import React from 'react';
import Footer from '../components/Footer';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';

import top from '../../styles/assets/ezmototop.png';
import content00 from '../../styles/assets/ezmoto01.png';
import content01 from '../../styles/assets/ezmoto00.png';
import sitemap from '../../styles/assets/sitemap.png';

const EZmoto = () => (
    <div className='fw-ezmoto'>
        <Menu main={false}/>
        <main>
        <Overview title='EZ MOTO INC.' topimg={top} summary={["This is a webiste for a used car dealer. Their goal for this site is mainly about demonstrating their cars on sale and their services while speaking with customers and vendors. The majority of their deal is done offline."]} myrole={['As the designer and the developer, I collected needs and requirements from the owner and sales people, created wireframes and high fidelity mockups, and used wordpress and bootstrap built the website.']} type='Part-time work.' duration='6 months.' members='Individual Project.'/>
            <div className='container'>
                <h2 className='text-center mt-5'>THE PROJECT</h2>
                <div className='row'>
                    <div className='col-12 col-md-8 offset-md-2'>
                        <figure className='mt-4'>
                            <figcaption>Sitemap</figcaption>
                            <img src={sitemap} className='img-fluid' alt=''/>
                        </figure>
                    </div>
                </div> 
                <div className='row'>
                    <div className='col-12 col-md-8 offset-md-2'>
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