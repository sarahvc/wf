import React from 'react';
import Above from './components/Above';
import Middle from './components/Middle';
import Bottom from './components/Bottom';
import Footer from './atoms/Footer';

const PlayPage = () => (
    <div>
        <div className='container'>
            <Above/>
            <Middle/>
            <Bottom/>
        </div>
        <Footer/>
    </div> 
);
export default PlayPage;