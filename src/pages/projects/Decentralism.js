import React from 'react';
import Footer from '../components/Footer';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';
import top from '../../styles/assets/decentralismtop.png';
import wf from '../../styles/assets/decentralismwf.png';
import hf from '../../styles/assets/decentralismhf.png';

const Decentralism = () => (
    <div className='fw-decentralism'>
        <Menu main={false}/>
        <main>
            <Overview title='DECENTRALISM' topimg={top} summary={["This is a side project that I'm working on with a few friends of mine. This is the first decentralized art creation and auction project on the Ethereum blockchain, in which a DArt, Genesis, is created and auctioned simultaneously."]} myrole={['As one of the two UX designers, I created wireframes and high fidelity mockups with Wei Lv. As the front end developer, I employed force-directed graph drawing algorithm and ThreeJS to draw the art work from transaction data, and used React and Redux to build the website, and learnt web3.js to interact with the Ethereum blockchain.']} type='Side project. DApp.' duration='3 months(on going).' members='Wei Lv, Yuan Ren, Ricky Yang, Alvina Ding.'/>
            <div className='container'>
                <h2 className='text-center mt-5'>THE PROJECT</h2>
                <div className='row'>
                    <div className='col-12 col-md-10 offset-md-1'>
                        <figure>
                            <figcaption>Wireframes</figcaption>
                            <img src={wf} className='img-fluid' alt=''/>
                        </figure>
                        <figure className='mt-4'>
                            <figcaption>We explored different visual styles.</figcaption>
                            <img src={hf} className='img-fluid' alt=''/>
                        </figure>
                        <p className='mt-4'>The demo is currently available at <a className='text-green' href='https://sarahvc.github.io/artx00/'>here</a>. We're working on internal testing at this point. Look forward to releasing it soon!</p>
                    </div>
                </div> 
            </div>
        </main>
        <Footlinks prev='designsystem' next='pnc'/>
        <Footer/>
    </div>
);

export default Decentralism;