import React from 'react';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';
import Overview from '../components/Overview';
import Password from '../components/Password';
import top from '../../styles/assets/workshoptop.jpg';
import dayone from '../../styles/assets/dayone.jpeg';
import daytwo from '../../styles/assets/daytwo.jpeg';
import concepts from '../../styles/assets/concepts.jpeg';
import keys from '../../styles/assets/keys.jpeg';
import smp00 from '../../styles/assets/skillmarketplace00.png';
import smp01 from '../../styles/assets/skillmarketplace01.png';
import smp02 from '../../styles/assets/skillmarketplace02.png';
import smp03 from '../../styles/assets/skillmarketplace03.png';
import smp04 from '../../styles/assets/skillmarketplace04.png';
import wfinder from '../../styles/assets/Wayfinder.png';

const NEU = () => (
    <div className='fw-neu'>
        <Menu main={false}/>
        <Password>
        <main>
            <Overview title='NORTHEASTERN DESIGN WORKSHOP' topimg={top} summary={['The D’Amore-McKim School of Business (DMSB) at Northeastern University (NEU) has been a key client of Pearson’s Online Learning Service (POLS) since 2006. Our partnership agreement with NEU is up for renewal at the end of December ’19. To secure the renewal of the contract additional value outside of POLS core services must be brought to bear to enhance the student experience and therefore strengthen the Pearson offer to Northeastern. The purpose of this workshop is to  brainstorm, ideate, and illustrate solution concepts that can be shared with Northeastern during the contract negotiations.']} myrole={['UX designer, prototyper.']} type='Project in work. Design workshop.' duration='3 days.' members='Eric Austrew, Amy Peterson, Anand Castelino, Benjamin Rogers, Eric Basset, Jason Fournier, Katie Pounder, Leah Jewell, Mike Caskey, Paul Sisler, Rachel Sumner, Robert McConnell, Sara Bakken.'/>
            <div className="container">
                <h2 className='text-center mt-5'>THE PROJECT</h2>
                <div className='row'>
                    <div className='col-12 col-md-8 offset-md-2'>
                        <h3>PRE-WORKSHOP: BACKGROUND AND CONTEXT</h3>
                        <p>The project manager and workshop facilitators put together a Google drive folder to share all the related documents and materials, including research reports, introduction of DMSB online MBA, previous workshop artifacts etc. And they invited people from many different departments(Content Strategy, Student Service, AI Products and Solutions, Marketing, Assessments and so forth) to participate in this design workshop. </p>
                    </div>
                    <div className='col-12 col-md-8 offset-md-2 mt-3'>
                        <h3>DAY 1: ALIGN AND FOCUS</h3>
                        <p className="mb-0">People from different departments gave lightning talks to help everyone foster a better understanding on the problem space as well as what resources can we leverage for the future solutions. We also employed design methods like "HMW" to capture ideas and questions along with the talks. </p>
                        <img className='img-fluid' src={dayone} alt=''/>
                        <figure className="mt-3">
                            <figcaption>At the end of the day, we prioritized the challenges and pain points that we wanted to focus on.</figcaption>
                            <img className='img-fluid' src={keys} alt=''/>
                        </figure>
                    </div>
                    <div className='col-12 col-md-8 offset-md-2 mt-4'>
                        <h3>DAY 2: INSPIRE AND CONCEPT</h3>
                        <p className="mb-0">We did rounds of brainstorming to ideate and refine solutions for the pain points that we identified.</p>
                        <img className='img-fluid' src={daytwo} alt=''/>
                    </div>
                    <div className='col-12 mt-3'>
                        <img className='img-fluid' src={concepts} alt=''/>
                    </div>
                    <div className='col-12 col-md-8 offset-md-2 mt-4'>
                        <h3>DAY 3: CRAFT</h3>
                        <p>I partnered with another UX designer to work with the project manager and the partner director(who's the point of contact with NEU) to create hifi prototypes and mockups to use in the sales meeting with NEU. You can visite the live version of the prototype at <a href="https://ux.pearson.com/prototypes/northeastern-platform/#/neu/" target="_blank" rel="noopener noreferrer" className="text-green">here</a>.</p>
                        <p className="mb-0"><b>Deliverable #1:</b> Add Skills Marketplace, which is a brand new project at ideation phase in Pearson, as a new acquisition and onboarding experience for NEU.</p>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                            <div className="carousel-item active">
                                    <img className="d-block w-100 rounded-0" src={smp00} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-0" src={smp01} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-0" src={smp02} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-0" src={smp03} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-0" src={smp04} alt=""/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <div>
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </div>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <div>
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </div>
                            </a>
                        </div>
                        <figure className="mt-4">
                            <figcaption><b>Deliverable #2:</b> Connect the journey that students go on directly, explicitly, and consistently with the skills they need to achieve their educational goals.</figcaption>
                            <img className="img-fluid" src={wfinder} alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
        </main>
        </Password>
        <Footlinks prev='designsystem' next='statcrunch'/>
        <Footer/>
    </div>
);

export default NEU;