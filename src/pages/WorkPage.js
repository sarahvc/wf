import React from 'react';
import Footer from './components/Footer';
import Thumbnail from './components/Thumbnail';
import pnc from '../styles/assets/pncthumbnail.png';
import shoppinglist from '../styles/assets/shoppinglistthumbnail.png';
import personae from '../styles/assets/personamockup.png';
import Menu from './components/Menu';


const Work = () => (
    <div>
        <Menu main={true}/>
        <main className='container'>
            <div className='fw-skillset d-flex flex-column flex-md-row justify-content-center mt-4 mb-5'>
                <div className='position-relative'>
                    <p className='text-orange mb-0 font-nunito'>DO THE RIGHT THINGS</p>
                    <span className='position-absolute fw-skills-a text-right'>User Research<br/>Market research<br/>Data analysis</span>
                </div>
                <div className='position-relative d-flex'>
                    <p className='text-blue mb-0 mt-auto align-item-end ml-auto mr-0 text-right font-nunito'>DO THE THINGS RIGHT</p>
                    <span className='position-absolute fw-skills-b'>Interaction design, Usability test<br/>Prototyping, Front end development<br/>Project management</span>
                </div>
            </div>
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