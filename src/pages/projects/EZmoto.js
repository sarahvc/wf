import React from 'react';
import Footer from '../components/Footer';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';

import top from '../../styles/assets/ezmototop.png';
import content from '../../styles/assets/ezmotocontent.png';

const EZmoto = () => (
    <div className='fw-ezmoto'>
        <Menu main={false}/>
        <main>
        <Overview title='EZ MOTO INC.' topimg={top} summary={["This is a webiste for a used car dealer. Their goal for this site is mainly about demonstrating their cars on sale and their services while speaking with customers and vendors. The majority of their deal is done offline."]} myrole={['As the designer and the developer, I collected needs and requirements from the owner and sales people, created wireframes and high fidelity mockups, and used wordpress and bootstrap built the website.']} type='Part-time work' duration='9 months.' members='Individual Project.'/>
            <div className='container'>
                <h2 className='text-center mt-5'>THE PROJECT</h2>
                <div className='row'>
                    <div className='col-12'>
                        <figure className='mt-4'>
                            <figcaption class='text-center'>Designs.</figcaption>
                            <img src={content} className='img-fluid' alt=''/>
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