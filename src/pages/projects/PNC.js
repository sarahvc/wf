import React from 'react';
import Footer from '../components/Footer';
import Takeaway from '../components/Takeaway';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import TwoColImg from '../components/TwoColImg';

import folder from '../../styles/assets/folders.png';
import visioning from '../../styles/assets/visioning.png';
import validating from '../../styles/assets/validating.png';
import ut from '../../styles/assets/ut.jpg';
import storyboard from '../../styles/assets/storyboard.jpg';
import pieces from '../../styles/assets/pieces.png';
import contextual from '../../styles/assets/contextualing.png';
import proto from '../../styles/assets/proto.png';

import card from '../../styles/assets/card.png';
import designProcess from '../../styles/assets/designProcess.png';
import ksarchit from '../../styles/assets/keystone-architecture.jpeg';
//import homepdt from '../../styles/assets/home-pdt.png';
//import homeportal from '../../styles/assets/home-portal.png';
// import homesa from '../../styles/assets/home-sa.png';
// import hometmo from '../../styles/assets/home-tmo.jpg';
// import homeimpl from '../../styles/assets/home-impl-manager.png';
import homesa from '../../styles/assets/sa1.gif';
import hometmo from '../../styles/assets/tmo.gif';
import hometmo2 from '../../styles/assets/tmo2.gif';

import pncsb00 from '../../styles/assets/pncsb00.jpg';
import pncsb01 from '../../styles/assets/pncsb01.jpg';
import pncsb02 from '../../styles/assets/pncsb02.jpg';
import pncsb03 from '../../styles/assets/pncsb03.jpg';

import clientvideo from '../../styles/assets/client-portal.mp4';

const PNC = () => (
    <div className='fw-pnc'>
        <Menu main={false}/>
        <main>
            <Overview title='PNC COMMERCIAL CARD' quote='This project was successful. It is going to happen at PNC and is slated for implementation and is on everyone&#39;s roadmap.' source='--- PNC Bank Treasury Management Group' summary={['We worked with ',<strong>PNC Bank</strong>, ' on improving customer onboarding process for their commercial card products. Based on our research, we built ',<strong>Keystone</strong>, ', a comprehensive end-to-end application with bank and client-facing components. And we also streamlined the workflow accordingly. Our work was speaking highly not only by faculty mentors but also by PNC client.']} myrole={['As the ',<strong>user research lead</strong>, ', I selected research methods, designed the research plan, drafted interview and usability test scripts, and managed the research process. I was also the ',<strong>project manager</strong>,' in the later half of this project. I organized the weekly summary & plan meeting, assigned work among teammates, and managed the project progress. Last but not least, as a team member, I worked with all my teammates in every part of our project.']} type='CMU MHCI Capstone Project. Commercial Banking Service.' duration='7 months / 2 semesters.' members='Jacqueline Chien, Maria Robles, Samarth Bahuguna.'/>
            <div className='container'>
                <h2 className='text-center mt-5'>THE PROJECT</h2>
                <div className='col-12 offset-md-2 col-md-8 mt-4'>
                    <h3>THE PROBLEM SPACE</h3>
                    <p>Our design aims to <strong>achieve faster revenue generation</strong> and a <strong>better client experience</strong> on one of PNC&#39;s most profitable products. The current onboarding process is slow (it might take from 6 weeks to a year) and complex, which affects the client&#39;s experience and the speed at which new clients can be signed up.</p>
                    <img className='img-fluid' src={card} alt=''/>
                    <h3 className='mt-5'>OUR APPROACH</h3>
                    <p>We followed a four-stage user-centered design approach. We gained a thorough understanding of the problem space with selected desk research and primary research methods. By synthesis and visioning, we chose the design opportunities to focus upon and explored possible solutions. We decided the solution to deliver based on our storybording sessions. And finally we employed different prototyping tools and worked with all stakeholders to iterate our solution.</p>
                    <img className='img-fluid' src={designProcess} alt=''/>
                    <h3 className='mt-5'>INTRODUCING KEYSTONE</h3>
                    <p>After months of research and design iterations, we delivered <strong>Keystone</strong> as our solution. Keystone consists of two components: a client-facing portal called <strong>Card Program Wizard</strong> and an internal system called <strong>Keystone</strong> for the various teams involved in onboarding. Our solution aims to unify information, people and functions across the process from start to finish.</p>
                    <img className='img-fluid' src={ksarchit} alt=''/>
                    <p><strong>The Card Program Wizard</strong> consists of 2 parts. The first part is a <strong>Product Decision Tree</strong> that collects basic information from the client and recommends the commercial card product best suited for their needs. By using simple language, step-by-step instructions and immediate feedback, we help the client prepare for a subsequent sales call with PNC employees. As a result, the client feels more confident and knowledgeable going into the process. And the second part is a <strong>Card Onboarding Portal</strong> which is the one place for the client to track their progress and receive/submit documents from PNC.</p>
                </div>
                <div className='row'>
                    <div className='col-12 offset-md-2 col-md-8'>
                        <video className='img-fluid' controls>
                            <source src={clientvideo} type="video/mp4"/>
                        </video>
                        <p className='mt-4'>The internal system <strong>Keystone</strong> is a dedicated web-based application for commercial card onboarding. It centralizes all client data and makes it available to the various teams involved in the process: Sales, Contracts and Implementation. It can send/receive information to/from the Card Program Wizard. For each team, we designed the dashboard pages with a consistent visual style yet with different modules to accommodate for their different needs. We designed the features to reduce redundancies and errors involved in current process,  and to help them get their tasks done with a higher efficiency by maximizing office automation.</p>
                    </div>
                    <div className='col-12 col-md-4'>
                        <img src={homesa} alt='' className='img-fluid'/>
                    </div>
                    <div className='col-12 col-md-4'>
                        <img src={hometmo} alt='' className='img-fluid'/>
                    </div>
                    <div className='col-12 col-md-4'>
                        <img src={hometmo2} alt='' className='img-fluid'/>
                    </div>
                    <div className='col-12 offset-md-2 col-md-8 mt-4'>
                        <p>Along with the Keystone, we drew a service blueprint to demonstrate the streamlined the work flow. In the model, we show the interaction between 10 teams in the four-stage onboarding process. (Below is the blurred model to protect the business information.)</p>
                    </div>
                    <div className='col-12'>
                        <img src={pncsb00} alt='' className='img-fluid'/>
                    </div>
                    <div className='col-12'>
                        <img src={pncsb01} alt='' className='img-fluid'/>
                    </div>
                    <div className='col-12'>
                        <img src={pncsb02} alt='' className='img-fluid'/>
                    </div>
                    <div className='col-12'>
                        <img src={pncsb03} alt='' className='img-fluid'/>
                    </div>
                    <div className='col-12'>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={pncsb00} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={pncsb01} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={pncsb02} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={pncsb03} alt=""/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <h2 className='text-center mt-4'>THE PROCESS</h2>
            </div>
            <TwoColImg textLeft={true} title='SURVEYING THE FIELD' text='We were all new to the bank service and none of us has done B to B product before. In order to make us familiar with this topic, we first did literature review and competitive analysis. We focused on client onboarding and digital banking, and found out that the digitalization in corporate banking is often not satisfying due to the legacy systems in banks. Then we investigated analogous domains including car sales, health insurance and visa application to get inspirations. Ans we read PNC internal documents related with their onboarding process to understand the workflow.' src={folder}/>
            <TwoColImg title='TAKING A CLOSER LOOK' text='Interviews were one of our primary research methods. The opportunities to speak with a large number of PNC employees involved with card onboarding became the backbone of our overall view of the roles and perspectives in the process. By contextual inquiry, we observed the use of three systems involved currently, and we examined employees&#39; daily tasks, the steps required to complete them, and the many information handoffs. This allowed us to find breakdowns and estimate the complexity of steps. We also evaluated the main onboarding systems against several usability heuristics.' src={contextual}/>
            <TwoColImg textLeft={true} title='PUTTING THE PIECES TOGETHER' text='We synthesized our interviews by modeling the workflow from each interviewee&#39;s point of view while reviewing our notes and audio recordings. We employed Flow, Sequence and Cultural Models to represented the entire process. Moreover, our interviews collectively resulted in a total of over 1500 short notes. In order to yield valuable insights from this information surplus, we created an affinity diagram: an organization of interview notes in a three-level hierarchy by grouping them under meaningful categories to quickly identify key issues and stimulate future design ideas.' src={pieces}/>
            <TwoColImg title='VALIDATING OUR FINDINGS' text='Once we determined what seemed like the most pressing issues, findings validation was the logical next step in our research. We returned to PNC intending to see which problems provoked what types of responses. Each salesperson was presented with a scenario derived from our findings in storyboard form. The results from these sessions informed our choice to feature five major findings.' src={validating}/>
            <TwoColImg textLeft={true} title='VISIONING' text='At the culmination of our research, it was time to use our analyses to generate design ideas. We invited our PNC mentors and guests to do a visioning session with us. In order to do this, we used three methods to gauge PNC&#39;s reaction to the opportunity areas we identified and vocalize their concerns. Overall, these exercises helped scope and prioritize our design ideas. We did our own Cost/Benefit analysis, with the axes of cost and benefit. Considering the length of our research and production timeframe, simply reorganizing the current workflow was going to be ineffective. Due to the many variables to account for, a solution without a total system redesign would inherently be incomplete. Using the insights we gained from our visioning session with PNC, we also generated many of our own visions.' src={visioning}/>
            <TwoColImg title='STORYBOARDING &amp; CONCEPT VALIDATION' text='Five visions generated through our visioning session were turned into storyboards. To create our project scope, we did "speed-dated" the storyboards with 9 PNC employees and 3 of their clients either remotely or in person. Two out of the five visions received the most positive feedback. As a matter of fact, they could be incorporated together in one coherent workflow. Thus we moved forward with both visions.' src={storyboard}/>
            <TwoColImg textLeft={true} title='PROTOTYPING' text='Each of our prototypes were developed through a similar process. We began by creating the prototype&#39;s content and purpose, information architecture, user flow between screens, and finshed with layout and visuals. We iterated our design through paper prototype, lo-fi prototype in Balsamiq, mid-fi prototype in Sketch and Invision, hi-fi prototype in Sketch and Framer.' src={proto}/>
            <TwoColImg title='USABILITY TESTING' text='Through our design iteration, we conducted 32 usability tests. 26 of them were done with PNC employees. And the rest were with company clients. Recruiting company clients was a challenge for us, since we were having issues getting enough company clients from PNC. We tried to find qualified company clients on our own by posting on Craigslist, making cold calls to local business, reaching out to friends and faculty. Fortunately, we found a few local companies who were willing to help.' src={ut}/>
            <div className='container'>
                <h2 className='text-center mt-5'>TAKEAWAY</h2>
                <div className='row mt-4'>
                    <Takeaway title='How to B product is different from to C product' content='I think there is two big differences between to B product and to C product. First, the requirement analysis is usually easier for to B product since users, needs and scenarios are already there. But for to C product, a designer needs to spend more time to define the target users and problems. Second, designing to B product is usually more intricate than designing to C product. For to B product, not only do groups of people interact with your service but also they interact with each other through your service. That is to say, a designer needs to think about the users as well as their internal relationship when he/she works on the UX. Knowing the differences could help designers spend their time more efficently.'/>
                    <Takeaway title='How to deal with the scarce of research time' content='As mentioned above, this project was totally new and challenging to all of us. But we only has the spring semester for research when each of us had other 3 or 4 demanding classes. But this is the case with many projects in the real world. There is never enough time. To use our time more wisely, we had a general plan. During our research, we first tried to make up for what we lack the most, and then to find what is causing the problem, and then to identify key part in there. We employed the useful part of our experience and also borrowed insights from our mentors.'/>
                    <Takeaway title='What makes team work efficently and happily' content='We had a meeting at the very beginning to discuss what are our specialties, what are our personal goals in this project, what are our team rules regarding daily works and project management, and we also decide to do team building since it’s going to be a long project, we all wanted to work in a joyful and inspiring environment. As the project going on, we did reflections every two week to make sure the project and the team are all on good track.'/>
                </div>
            </div>
        </main>
        <Footer/>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous"></script>
    </div>
);

export default PNC;