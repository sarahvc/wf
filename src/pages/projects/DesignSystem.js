import React from 'react';
import Footer from '../components/Footer';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';
import Password from '../components/Password';
import top from '../../styles/assets/designsystemtop.png';
import content from '../../styles/assets/designsystemcontent.png';
import process from '../../styles/assets/process.png';
import survey from '../../styles/assets/survey.png';
import audit from '../../styles/assets/audit.png';
import dssitemap from '../../styles/assets/dssitemap.png';

const DesignSystem = () => (
    <div className='fw-designsystem'>
        <Menu main={false}/>
        <Password>
            <main>
                <Overview title='PEARSON DESIGN SYSTEM' topimg={top} summary={["We're building a design system with tools and advice for every stage of the design process. This is a evolution from our current UX Framework which offers building blocks for designing digital learning products. "]} myrole={['I participated in design ideation and exploration, and I built the website and explored different ways of animation implementation with our motion designer.']} type='Project in work. Design system.' duration='5 months(on going).' members='Meredith Williamson, Parker Malenke, Bryttni Wolfe, Laura Wixted, Tony Nguyen, Amanda Carlile, Beulah Pidakala.'/>
                <div className='container'>
                    <h2 className='text-center mt-5'>THE PROJECT</h2>
                    <div className='row'>
                        <div className='col-12 col-md-8 offset-md-2'>
                            <h3>BACKGROUND</h3>
                            <p>Pearson has a components library called <a href="https://uxframework.pearson.com/" className='text-green'>UX Framework</a> which has provided designers with building blocks for several years. The UX Framework is aimed at making it quick and easy to design quality learning products. Over this time, we’ve realized the UX Framework would be even more useful with guidance around why components are designed the way they are and how to assemble them in a consistent and functional way. To provide this guidance, we’re expanding the existing UX Framework into a design system that contains guidelines and best practices that address everything from the high-level education design mindset down to the nuances of individual components.</p>
                            <h3 className='mt-4'>PROCESS</h3>
                            <p>To create this design system, we did a lot of preliminary work to define the problem scope, set up goals and make plan for branding, release, test and iteration. We also invited the team leaders who supervised the IBM's design system to have a talk and Q&A with us to share their experience.</p>
                        </div>
                        <div className='col-12 mb-5'>
                            <img className='img-fluid ' src={process} alt=''/> 
                        </div>
                        <div className='col-12 col-md-4'>
                            <figure>
                                <figcaption>We received 31 responses for our survey from UX designers, users researchers, UX writers etc. They shared their opinions about design system.</figcaption>
                                <img className='img-fluid ' src={survey} alt=''/>
                            </figure>
                        </div>
                        <div className='col-12 col-md-4'>
                            <figure>
                                <figcaption>We conducted a full audit on the UX Framework, also compared several well-established design systems like IBM's carbon and Shopify's Polaris.</figcaption>
                                <img className='img-fluid ' src={audit} alt=''/>
                            </figure>
                        </div>
                        <div className='col-12 col-md-4'>
                            <figure>
                                <figcaption>We consolidated and categorized the content that we want to include in the design system into sitemap.</figcaption>
                                <img className='img-fluid ' src={dssitemap} alt=''/>
                            </figure>
                        </div>
                        <div className='col-12 col-md-8 offset-md-2 mt-4'> 
                            <h3>RETROSPECTIVE</h3>
                            <p>After 5 months of work we released the Alpha version of our design system. We collected feedback from users and conducted a retrospective on our previous process. Below are some results from the retrospective session combined with some of my personal thoughts.</p>
                        </div>
                        <div className='col-12 col-md-4 offset-md-2'>
                            <h4>What worked well?</h4>
                            <ul>
                                <li>Preliminary research and ideation.</li>
                                <li>Added a project manager.</li>
                                <li>Standups and weekly sync-up meetings.</li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-4'>
                            <h4>What could be improved?</h4>
                            <ul>
                                <li>Lack of direction/management.</li>
                                <li>Lack of a clear standard for prioritization.</li>
                                <li>Lack of performance measurement/KPIs.</li>
                                <li>Lack of matching, usable code for components/styles.</li>
                                <li>Lack of expectation management for users.</li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-8 offset-md-2'> 
                            <img className='img-fluid' src={content} alt=''/>
                        </div>
                    </div>
                    
                </div>
            </main>
        </Password>
        <Footlinks prev='pnc' next='neu'/>
        <Footer/>
    </div>
);

export default DesignSystem;