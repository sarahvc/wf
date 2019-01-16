import React from 'react';
import Footer from './components/Footer';
import Thumbnail from './components/Thumbnail';
import Menu from './components/Menu';
import Skillset from './components/Skillset';

import pnc from '../styles/assets/pncthumbnail.png';
import shoppinglist from '../styles/assets/shoppinglistthumbnail.png';
import personae from '../styles/assets/personamockup.png';
import ezmoto from '../styles/assets/ezmotothumbnail.png';
import dorm from '../styles/assets/dormthumbnail.png';
import dashboard from '../styles/assets/dashboardthumbnail.png';
import ethereum from '../styles/assets/ethereum-outline.png';
import gravity from '../styles/assets/Gravity.png';
import tad from '../styles/assets/tad-thumbnail.png';

const Work = () => (
    <div className='fw-wp-bg fw-work-page'>
        <Menu main={true}/>
        <main className='container'>
            <Skillset/>
            <div className='fw-projects-container d-flex flex-wrap'>
                <Thumbnail img={pnc} brieflast={true} url='pnc' title='PNC COMMERCIAL CARD' brief='Making the commercial card onboarding easier for both bank employees and corporate clients.'/>
                <Thumbnail img={tad} url='tadpoles' title='TADPOLES PARENT APP REDESIGN' brief='Redesigned the Tadpoles parent app from information architechture to user interface.'/>
                <Thumbnail img={gravity} url='designsystem' title='PEARSON DESIGN SYSTEM' brief='Participated in the design system for Pearson Higher Education digital learning products.'/>
                <Thumbnail img={ethereum} url='decentralism' title='DECENTRALISM - A BLOCKCHAIN GAME' brief='Designed and developed a decentralized blockchain auction game, in which a data visualization artwork using transaction data is the lot.'/>
                <Thumbnail img={personae} url='personae' title='ONLINE SHOPPING PERSONAE' brief='Built five personae for online shopping products using qualitive and quantitive methods.'/>
                <Thumbnail img={shoppinglist} url='shoppinglist' title='SOCIALIZED SHOPPING LIST' brief='Initiated a new feature for online shopping content based on user research and data analysis.'/>
                <Thumbnail img={ezmoto} brieflast={true} url='ezmoto' title='EZ MOTO INC.' brief='Designed and developed a website for a used car dealer.'/>
                <Thumbnail img={dorm} url='dorm' title='HOMEY DORM' brief='Bridging the gap in new students&#39; journey to CMU campus.'/>
                <Thumbnail img={dashboard} url='dashboard' title='DASHBOARD' brief='Designed dashboard to help DCNR assessing pest presence and tree health.'/>
            </div>
        </main>
       <Footer/>
    </div> 
);
export default Work;
/*
<Thumbnail briefcolor='fw-brief-white' brieflast={true} noimg={true} url='scrabble' title='BODY SCRABBLE' brief='A game that combines physical and mental fun. A catalyst for unique social experiences'/>
*/