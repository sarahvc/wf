import React from 'react';
import Footer from '../components/Footer';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';
import top from '../../styles/assets/designsystemtop.png';
import content from '../../styles/assets/designsystemcontent.png';

const DesignSystem = () => (
    <div className='fw-designsystem'>
        <Menu main={false}/>
        <main>
            <Overview title='DESIGN SYSTEM' topimg={top} summary={["We're building a design system with tools and advice for every stage of the design process. This is a evolution from our current UX Framework which offers building blocks for designing digital learning products. "]} myrole={['As a teammember, I participated in design ideation and exploration, I provided suggestion on content and components as I have been working with different product teams, and I conducted UX audit and accessibility review for the website design. As the front end developer, I built the website and explored different ways of animation implementation with our motion designer.']} type='Project in work. Design system.' duration='4 months(on going).' members='Meredith Williamson, Parker Malenke, Bryttni Wolfe, Laura Wixted, Tony Nguyen.'/>
            <div className='container'>
                <h2 className='text-center mt-5'>THE PROJECT</h2>
                <div className='row'>
                    <div className='col-12 col-md-8 offset-md-2'>
                        <p>To create this design system, we did case study on the established design systems like <a className='text-green' href='https://www.carbondesignsystem.com/'>IBM's Carbon design system</a> and <a className='text-green' href='https://polaris.shopify.com/'>Shopify's Polaris</a>. We also invited the team leaders who supervised the IBM's design system to have a talk and Q&A with us to share their experience. As for logistics, we explored tools like InVision's design system manager, and we made a roadmap to plan for branding, release, test and iteration.</p>
                        <p className='mb-1'>Now the design system website is still in the process of design and implementation. And it's slated for release in Q1, 2019.</p>
                        <img className='img-fluid' src={content} alt=''/>
                    </div>
                </div>
                
            </div>
        </main>
        <Footlinks prev='tadpoles' next='decentralism'/>
        <Footer/>
    </div>
);

export default DesignSystem;