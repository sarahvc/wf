import React from 'react';
import Above from './components/Above';
import Middle from './components/Middle';
import Footer from './atoms/Footer';
import Subscribe from './atoms/Subscribe';

const PlayPage = () => (
    <div className='artx-gradient-ball-bg pt-5'>
        <div className='container'>
            <Above/>
            <Middle/>
            <div className='amt-32'>
                <Subscribe/>
            </div>
        </div>
        <Footer/>
    </div> 
);
export default PlayPage;