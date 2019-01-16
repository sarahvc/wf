import React from 'react';
import Footer from '../components/Footer';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';
import top from '../../styles/assets/tad-top.png';
import content from '../../styles/assets/tad-userflow.png';
import app00 from '../../styles/assets/IMG_4855.jpg';
import app01 from '../../styles/assets/IMG_4856.jpg';
import app02 from '../../styles/assets/IMG_4857.jpg';
import app03 from '../../styles/assets/IMG_4858.jpg';
import app04 from '../../styles/assets/IMG_4821.PNG';
import re00 from '../../styles/assets/tad-home.png';
import re01 from '../../styles/assets/tad-memories.png';
import re02 from '../../styles/assets/tad-report-half.png';
import re03 from '../../styles/assets/tad-report-laterhalf.png';
import re04 from '../../styles/assets/tad-familynote.png';
import re05 from '../../styles/assets/tad-liquids.png';
import re06 from '../../styles/assets/tad-meds.png';
import re07 from '../../styles/assets/tad-meal.png';
import currentia from '../../styles/assets/tad-redesign-before.png';
import redesignia from '../../styles/assets/tad-redesign-after.png';
import ratings from '../../styles/assets/tad-ratings.PNG';
import reviews from '../../styles/assets/tad-reviews.png';
import quotes from '../../styles/assets/tad-quote.png';

const Tadpoles = () => (
    <div className='fw-tadpoles'>
        <Menu main={false}/>
        <main>
            <Overview title='TADPOLES PARENT APP REDESIGN' topimg={top} summary={["The daycare that my daughter is going to is using ", <a href='https://www.tadpoles.com/' class='text-green'>Tadpoles</a>, " to connect with parents. Parents can check on daily reports, photos and notes from their child care centers with this app, which is a great help. However, the usability has a lot of room for improvement. So I decided to redesign the app as a side project."]} myrole={['UX/UI designer.']} type='Side project. App design.' duration='2 weeks.' members='Individual project.'/>
            <div className='container'>
                <h2 className='text-center mt-5'>THE PROJECT</h2>
                <div className='row'>
                    <div className='col-12 col-md-8 offset-md-2'>
                        <h3 className='mt-3'>DEFINE PROBLEMS</h3>
                        <p>As a user who uses this app on a daily basis, I have a lots of complaints about it and hence a lot of ideas to improve it. But I didn't want to start just based on my own opinions. In order to stay unbiased and identify the most pressing issues, <strong>I went through the first 100 reviews on App Store</strong>(sorted by most helpful), and summarized them.</p> 
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-2 offset-md-1'>
                        <img src={ratings} className='img-fluid border' alt='A screen shot showing that Tadpoles parent app is rated 2.4 out of 5 on App Store with 209 entries of ratings.'/>
                    </div>
                    <div className='col-12 col-md-8 position-relative text-right'>
                        <img src={reviews} className='img-fluid review' alt='summarization of reviews'/>
                        <img src={quotes} className='img-fluid quote position-absolute' alt='selection of reviews'/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-8 offset-md-2'>
                        <p className='mt-3'>To resolve those issues around UX/UI, I decided to first touch on the information architechture, because that's the fundation to foster a clear and simple mental model for users and to make the navigation more intuitive. And then redesign the interface to address the usability problems and provide a better look and feel on visual.</p>
                    </div>
                </div>
                <div className='row mt-2'>
                    <div className='col-12 col-md-8 offset-md-2'>
                        <h3 className='mt-3'>REDESIGN THE INFORMATION ARCHITECHTURE</h3>
                        <p className='mb-0'>I made two major changes around the information architechture:</p>
                        <ul className='mb-0'>
                            <li><strong>Categorized content.</strong> In the current version, you can find all of the photos/video, daily reports and school messages under "Memories", but are those of equal importance and have same meanings towards parents? I think the answer is no. So I simplified the "Memories" to contain only photos/videos, while have a access to all daily reports inside Today's report, and made the school messages a individual section.</li>
                            <li><strong>Simplified notes entry process.</strong> Now they collapsed the "Mark absent" at the right top cornor on the Dropoff note page, which is not easy to find. I understand that this may be out of the consideration that "Mark absent" is less used than leaving a note. But I think there are other ways to accommodate for this while not sacrificing the findability.</li>
                        </ul>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12 col-md-6'>
                        <figure>
                            <figcaption>Current.</figcaption>
                            <img src={currentia} className='img-fluid' alt=''/>
                        </figure>
                    </div>
                    <div className='col-12 col-md-6'>
                        <figure>
                            <figcaption>Redesign.</figcaption>
                            <img src={redesignia} className='img-fluid' alt=''/>
                        </figure>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-8 offset-md-2'>
                        <h3 className='mt-5'>REDESIGN THE INTERFACE</h3>
                        <p className='mb-0'>Then I redesigned the interface. My objectives including:</p>
                        <ul className='mb-0'>
                            <li><strong>Clean and warm look and feel</strong>, which helps to improve the usability as well as the visual aesthetics.</li>
                            <li><strong>Less workload for leaving a note</strong>, which is the section that's the most interaction-heavy if parents have needs for sending message to teachers.</li>
                            <li><strong>Compliant with accessibility criteria on color usage</strong>. One major thing that I learnt at Pearson is about accessibility. Indeed, you need to invest a lot to make your product completely accessible. Sometimes you don't have the resources. But that doesn't mean that you should just ignore accessbility, because some basic work can help with the accessibility significantly. Trying to use accessible colors and using semantic HTML markup are two of them.</li>
                        </ul>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12 col-md-10 offset-md-1'>
                        <p className='mb-0'>Current.</p>
                    </div>
                    <div className='col-12 col-md-2 offset-md-1'>
                        <img className='img-fluid' src={app00} alt=''/>
                    </div>
                    <div className='col-12 col-md-2'>
                        <img className='img-fluid' src={app01} alt=''/>
                    </div>
                    <div className='col-12 col-md-2'>
                        <img className='img-fluid' src={app02} alt=''/>
                    </div>
                    <div className='col-12 col-md-2'>
                        <img className='img-fluid' src={app03} alt=''/>
                    </div>
                    <div className='col-12 col-md-2'>
                        <img className='img-fluid' src={app04} alt=''/>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12'>
                        <p className='mb-0'>Redesign.</p>
                    </div>
                    <div className='col-12 col-md-3'>
                        <img className='img-fluid' src={re00} alt=''/>
                    </div>
                    <div className='col-12 col-md-3'>
                        <img className='img-fluid border' src={re01} alt=''/>
                    </div>
                    <div className='col-12 col-md-3'>
                        <img className='img-fluid border' src={re02} alt=''/>
                    </div>
                    <div className='col-12 col-md-3'>
                        <img className='img-fluid border' src={re03} alt=''/>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-12 col-md-3'>
                        <img className='img-fluid border' src={re04} alt=''/>
                    </div>
                    <div className='col-12 col-md-3'>
                        <img className='img-fluid border' src={re05} alt=''/>
                    </div>
                    <div className='col-12 col-md-3'>
                        <img className='img-fluid border' src={re06} alt=''/>
                    </div>
                    <div className='col-12 col-md-3'>
                        <img className='img-fluid border' src={re07} alt=''/>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12 col-md-10 offset-md-1'>
                        <figure>
                            <figcaption>User flow.</figcaption>
                            <img className='img-fluid' src={content} alt=''/>
                        </figure>
                    </div>
                </div>
            </div>
        </main>
        <Footlinks prev='pnc' next='designsystem'/>
        <Footer/>
    </div>
);

export default Tadpoles;

/*
<ul className='mb-0'>
    <li><strong>57 people gave low rating because of bugs</strong> around login, notification and features/buttons not functioning, which make it impossible or very frustrating to use the app.</li>
    <li>For those who didn't encounter those major bugs, <strong>13 people mentioned the usabiltiy/design issues</strong>. Amoung them: 
        <ul>
            <li><strong>10 people complained about UI</strong>, e.g. "The user interface is so poor", "It has a terribly designed interface.", "The design is not the best.".</li>
            <li><strong>5 people complained about navigation</strong>, e.g. "Trying to navigate the app is clunky", "Navigation is a little painful, not as intuitive as perhaps it could/should be".</li>
            <li><strong>2 people complained about overall usability</strong>, e.g. "The usability is cluncky".</li>
        </ul> 
    </li>
</ul>
*/