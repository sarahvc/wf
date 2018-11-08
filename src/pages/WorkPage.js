import React from 'react';
import Footer from './components/Footer';
import Thumbnail from './components/Thumbnail';
import Menu from './components/Menu';
import Skillset from './components/Skillset';

import pnc from '../styles/assets/pncthumbnail.png';
import shoppinglist from '../styles/assets/shoppinglistthumbnail.png';
import personae from '../styles/assets/personamockup.png';
import ezmoto from '../styles/assets/personamockup.png';
import dorm from '../styles/assets/dormthumbnail.png';
import dashboard from '../styles/assets/dashboardthumbnail.png';
import ethereum from '../styles/assets/ethereum-outline.png';
import gravity from '../styles/assets/Gravity.png';

const Work = () => (
    <div>
        <Menu main={true}/>
        <main className='container'>
            <Skillset/>
            <div className='row'>
                <Thumbnail img={gravity} url='designsystem' title='PEARSON DESIGN SYSTEM' brief='A design system for Pearson Higher Education digital learning products.'/>
                <Thumbnail img={ethereum} url='decentralism' title='DECENTRALISM' brief='A decentralized blockchain auction game, in which a data visualization artwork using transaction data is the lot.'/>
                <Thumbnail img={pnc} url='pnc' title='PNC COMMERCIAL CARD' brief='Making the commercial card onboarding easier for both bank employees and corporate clients.'/>
                <Thumbnail img={shoppinglist} url='shoppinglist' title='SOCIALIZED SHOPPING LIST' brief='A new feature based on user research and data analysis.'/>
                <Thumbnail img={personae} url='personae' title='ONLINE SHOPPING PERSONAE' brief='Built five personae for online shopping products using qualitive and quantitive methods.'/>
                <Thumbnail img={ezmoto} url='ezmoto' title='EZMOTO INC.' brief='A website for buying &amp; selling used cars, and sharing experience.'/>
                <Thumbnail img={dorm} url='dorm' title='HOMEY DORM' brief='Bridged the gap in new students&#39; journey to CMU campus.'/>
                <Thumbnail img={dashboard} url='dashboard' title='DASHBOARD' brief='Designed dashboard to help DCNR assessing pest presence and tree health.'/>
                <Thumbnail briefcolor='fw-brief-white' noimg={true} url='bodyscrabble' title='BODY SCRABBLE' brief='A game that combines physical and mental fun. A catalyst for unique social experiences'/>
            </div>
        </main>
       <Footer/>
    </div> 
);
export default Work;