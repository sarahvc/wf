import React from 'react';
import Footer from '../components/Footer';
import Takeaway from '../components/Takeaway';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';
import TwoColImg from '../components/TwoColImg';

import deskresearch from '../../styles/assets/deskResearch.png';
import interview from '../../styles/assets/interview.png';
import clusterAna from '../../styles/assets/clusterAnalysis.png';
import backendData from '../../styles/assets/backendData.png';
import synthesis from '../../styles/assets/synthesis.png';
import personae00 from '../../styles/assets/persona1.png';
import personae01 from '../../styles/assets/persona2.png';
import personae02 from '../../styles/assets/persona3.png';
import personae03 from '../../styles/assets/persona4.png';
import personae04 from '../../styles/assets/persona5.png';

const Personae = () => (
    <div className='fw-personae'>
        <Menu main={false}/>
        <main>
            <Overview title='PERSONAE' quote='We should have done this a long time ago.' source='--- A colleague from the market department' summary={['I initiated a personae project after working in our online shopping products team as the user researcher for months. In this project, I employed methods that I learnt from my psychology research projects in college, and categorized users into five personae. And this is only a start. I kept promoting the personae so that it could be handy for my colleagues and that it could cast real influence on our daily work. Eventually, the personae got referred to more and more, and people from other department employed it too.']} myrole={['Individual Project.']} type='User research in work. E-commerce.' duration='4 months.' members='Individual Project.'/>
            <div className='container'>
                <h2 className='text-center mt-5'>THE PROJECT</h2>
                <div className='row'>
                    <div className='col-12 col-md-6 mt-4'>
                        <h3>PROBLEMS AND ANALYSIS</h3>
                        <p>As a user researcher, I was mainly doing in-depth interviews, usability tests and web surveys to help product managers to analyze user needs and gather user feedback. I discovered that the lack of user-centered thinking hindered our team from delivering products with a clear and consentaneous vision. Some trials and errors could be saved if the team had known and agreed on who the target users are.</p>
                    </div>
                    <div className='col-12 col-md-6 mt-4'>
                        <h3>MY APPROACH</h3>
                        <p>To help my colleagues gain a deeper understanding of users, I applied the techniques I developed from my own experience. During my days in the Drama Troupe, for each character I acted, I did background research and wrote short biography of her to help myself to understand the character in depth and to grow into the role. I believed that a similar approach could be adopted. And I later found out that this is already an established method named as User Persona in UX. </p>
                    </div>
                </div>
                <h2 className='text-center mt-4'>THE PROCESS</h2>
                <div className='row'>
                    <div className='col-12 offset-md-2 col-md-8'>
                        <p>To classify our users, I employed methods and techniques I learned from my psychology research projects, including literature review, in-depth interviews, web surveys and data analysis. </p>
                    </div>
                </div>
                <TwoColImg title='DESK RESEARCH' text='I looked for literature about Chinese consumer, online consumer and middle class, because our product is e-commerce related, and our users are close to, if not are, middle class. By literature review, I understood the general definition of middle class and dimensions of the definition, which is helpful for me to draft the interview script from the structure to detailed items.' src={deskresearch}/>
                <TwoColImg textLeft={true} title='IN-DEPTH INTERVIEW' text='Based on the desk research and our former research on our users, I selected some index to filter the participants for the interview including age, education, vocation and so forth. We recruited 12 participants. 8 of them are middle class according to our definition, the rest are potential middle class. The interview has three parts: life, work and consumption. There was a survey to collect their detailed demographic info and a questionnaire about their life style after the interview so that I could have some more structured data. I used a two dimension coordinates to analyze and catalog the interview data.' src={interview}/>
                <TwoColImg title='WEB SURVEY' text='I made the web survey from the interview analysis results and established surveys that I found during desk research. We send the survey to last month active users via email and received 4078 answers. I first accomplished data clean according to the check questions that I set in the questionnaire and other index. Then I used key factor analysis to decrease the dimensions of the questionnaire by categorizing the questions. For the last step, I cluster the participants into 6 groups by cluster analysis.' src={clusterAna}/>
                <TwoColImg textLeft={true} title='BACKEND DATA ANALYSIS' text='I filtered millions of users backend session data. There are 9 variables in the row data, including the site they were visiting, the actions they took on our extension and so forth. I categorize and integrate them into 4 variables. Since there are two types of the variables: nominal and interval, I used two step cluster to analysis the data and the users were grouped into 4 types.' src={backendData}/>
                <TwoColImg title='SYNTHESIS' text='I compared and combined results from the backend data analysis, the web survey, and the in-depth interview, and finally created the five personae.' src={synthesis}/>
                <div className='row'>
                    <div className='col-12 offset-md-2 col-md-8 mt-4'>
                        <h3>WHAT'S MORE</h3>
                        <p>After months of work, I accomplished a report that classifies our users into five personae. Despite its value on helping us understanding users better, I realized that producing the report was only a start. What remained more challenging to promote the user-centered thinking, was to let these five user personae cast real effect on products. To accept this challenge, first I kept applying user personae myself. I cataloged feedbacks from usability tests in order to help product managers comprehend how some behavior or perception was related with the characteristics of a particular user persona. Second, I iteratively revised these personae. I made every user persona more succinct and representative by accumulating user behavior data over research projects as well as learning more about our products from experienced colleagues.</p>
                        <h3>RESULTS</h3>
                        <p>Eventually, my efforts were rewarded. These user personae were applied on not only the development but also the marketing of our products. Even our web content editors benefited from the personae. They catered target users’ preference in subscription emails based on the personae, and the open rate of emails improved from 6% to 13%.</p>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100 rounded-0" src={personae00} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-0" src={personae01} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-0" src={personae02} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-0" src={personae03} alt=""/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100 rounded-0" src={personae04} alt=""/>
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
                    </div>
                </div>
                <h2 className='text-center mt-5'>TAKEAWAY</h2>
                <div className='row mt-4'>
                    <Takeaway title='Promote your work' content='In real work, resource are limited all the time. We need to promote your work especially when we believe there’s value in it. Otherwise people won’t pay attention to it because they always have things urgent to deal with, and they never have time to explore things we think of highly importance. We also promote ourselves during this process. People will see our initiatives and passion, which make them value our opinions.'/>
                    <Takeaway title='Borrow from your experience' content='There are always things new to us, especially being a practitioner in tech company. However, the essentials of things never change. So we could always borrow something from our past experience. On the other hand, try to embrace and to actually do whatever we like, we never know someday it will be a valuable experience for us.'/>
                    <Takeaway title='Iteration everywhere' content='To some extent, our work is a kind of product that we are selling to our boss or say our company. Why not employ the idea of minimum viable product in our work. To be more specific, as a user researcher, we could update points of our findings to colleagues time to time instead of having them to wait for the final report. And we could revise our work all the time. Our product features change, users change, the user research work should keep changing too.'/>
                </div>
            </div>
        </main>
        <Footlinks prev='shoppinglist' next='ezmoto'/>
        <Footer/>
    </div>
);

export default Personae;