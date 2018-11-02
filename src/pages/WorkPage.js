import React from 'react';
import Footer from './components/Footer';
import Thumbnail from './components/Thumbnail';
import pnc from '../styles/assets/pncthumbnail.png';
import shoppinglist from '../styles/assets/shoppinglistthumbnail.png';
import personae from '../styles/assets/personamockup.png';
import Menu from './components/Menu';
import Skillset from './components/Skillset';


const Work = () => (
    <div>
        <Menu main={true}/>
        <main className='container'>
            <Skillset/>
            <div className='row'>
                <Thumbnail bgcolor='bg-trans-blue' img={pnc} title='PNC COMMERCIAL CARD' brief='Making the commercial card onboarding easier for both bank employees and corporate clients.'/>
                <Thumbnail bgcolor='bg-trans-orange' img={shoppinglist} title='SOCIALIZED SHOPPING LIST' brief='a unified system'/>
                <Thumbnail bgcolor='bg-trans-yellow' img={personae} title='ONLINE SHOPPING PERSONAE' brief='a unified system'/>
                <Thumbnail bgcolor='bg-trans-purple' img={pnc} title='EZMOTO INC.' brief='a unified system'/>
                <Thumbnail bgcolor='bg-trans-green' img={pnc} title='MAKING THE DORM HOMEY' brief='a unified system'/>
                <Thumbnail bgcolor='bg-trans-orange' img={pnc} title='DASHBOARD' brief='a unified system'/>
                <Thumbnail bgcolor='bg-trans-yellow' img={pnc} title='BODY SCRABBLE' brief='a unified system'/>
                <Thumbnail bgcolor='bg-trans-orange' img={pnc} title='FAVORTITE LIST' brief='a unified system'/>
                <Thumbnail bgcolor='bg-trans-purple' img={pnc} title='EASY CROSSBORDER SHOPPING' brief='a unified system'/>
            </div>
        </main>
       <Footer/>
    </div> 
);
export default Work;