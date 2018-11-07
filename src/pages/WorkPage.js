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
                <Thumbnail bgcolor='bg-gray' img={gravity} url='designsystem' title='PEARSON DESIGN SYSTEM' brief='A design system for Pearson Higher Education digital learning products.'/>
                <Thumbnail bgcolor='bg-gray' img={ethereum} url='decentralism' title='DECENTRALISM' brief='A decentralized blockchain auction game, in which a data visualization artwork using transaction data is the lot.'/>
                <Thumbnail bgcolor='bg-gray' img={pnc} url='pnc' title='PNC COMMERCIAL CARD' brief='Making the commercial card onboarding easier for both bank employees and corporate clients.'/>
                <Thumbnail bgcolor='bg-gray' img={shoppinglist} url='shoppinglist' title='SOCIALIZED SHOPPING LIST' brief='a unified system'/>
                <Thumbnail bgcolor='bg-gray' img={personae} url='personae' title='ONLINE SHOPPING PERSONAE' brief='a unified system'/>
                <Thumbnail bgcolor='bg-gray' img={ezmoto} url='ezmoto' title='EZMOTO INC.' brief='a unified system'/>
                <Thumbnail bgcolor='bg-gray' img={dorm} url='dorm' title='HOMEY DORM' brief='a unified system'/>
                <Thumbnail bgcolor='bg-gray' img={dashboard} url='dashboard' title='DASHBOARD' brief='a unified system'/>
                <Thumbnail bgcolor='bg-scrabble' noimg={true} url='bodyscrabble' title='BODY SCRABBLE' brief='a unified system'/>
            </div>
        </main>
       <Footer/>
    </div> 
);
export default Work;