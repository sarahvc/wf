import React from 'react';
import Footer from './components/Footer';
import Thumbnail from './components/Thumbnail';
import Menu from './components/Menu';
import Skillset from './components/Skillset';

import pnc from '../styles/assets/pncthumbnail.png';
import shoppinglist from '../styles/assets/shoppinglistthumbnail.png';
import personae from '../styles/assets/personamockup.png';
import ezmoto from '../styles/assets/personamockup.png';
import dorm from '../styles/assets/personamockup.png';
import dashboard from '../styles/assets/personamockup.png';
import bodyscrabble from '../styles/assets/personamockup.png';
import favlist from '../styles/assets/personamockup.png';
import crossborder from '../styles/assets/personamockup.png';




const Work = () => (
    <div>
        <Menu main={true}/>
        <main className='container'>
            <Skillset/>
            <div className='row'>
                <Thumbnail bgcolor='bg-trans-blue' img={pnc} url='pnc' title='PNC COMMERCIAL CARD' brief='Making the commercial card onboarding easier for both bank employees and corporate clients.'/>
                <Thumbnail bgcolor='bg-trans-orange' img={shoppinglist} url='shoppinglist' title='SOCIALIZED SHOPPING LIST' brief='a unified system'/>
                <Thumbnail bgcolor='bg-trans-yellow' img={personae} url='personae' title='ONLINE SHOPPING PERSONAE' brief='a unified system'/>
                <Thumbnail bgcolor='bg-trans-purple' img={ezmoto} url='ezmoto' title='EZMOTO INC.' brief='a unified system'/>
                <Thumbnail bgcolor='bg-trans-green' img={dorm} url='dorm' title='HOMEY DORM' brief='a unified system'/>
                <Thumbnail bgcolor='bg-trans-orange' img={dashboard} url='dashboard' title='DASHBOARD' brief='a unified system'/>
                <Thumbnail bgcolor='bg-trans-yellow' img={bodyscrabble} url='bodyscrabble' title='BODY SCRABBLE' brief='a unified system'/>
                <Thumbnail bgcolor='bg-trans-orange' img={favlist} url='favlist' title='FAVORTITE LIST' brief='a unified system'/>
                <Thumbnail bgcolor='bg-trans-purple' img={crossborder} url='crossborder' title='EASY CROSSBORDER SHOPPING' brief='a unified system'/>
            </div>
        </main>
       <Footer/>
    </div> 
);
export default Work;