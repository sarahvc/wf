import React from 'react';
import Footer from '../components/Footer';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';

const Decentralism = () => (
    <div className='fw-decentralism'>
        <Menu main={false}/>
        <main>
            <Overview title='DECENTRALISM' summary={['This is the first decentralized art creation and auction project on the Ethereum blockchain, in which a DArt, Genesis, is created and auctioned simultaneously.']} myrole={['UX designer. Front end developer.']}type='Side project. DApp.' duration='3 months' members='Wei Lv, Yuan Ren, Ricky Yang, Alvina.'/>
            <div className='container'>
                <h2 className='text-center mt-5'>THE PROJECT</h2>
            </div>
        </main>
        <Footlinks prev='designsystem' next='pnc'/>
        <Footer/>
    </div>
);

export default Decentralism;