import React from 'react';
import Footer from '../components/Footer';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';
import Password from '../components/Password';
import top from '../../styles/assets/sctop.png';
import sccurrent from '../../styles/assets/scscreenshot.jpeg';
import pearson from '../../styles/assets/pearsonhighered.png';
import uikit from '../../styles/assets/uikit.jpg';
import sitemap from '../../styles/assets/scsitemap.png';
import sitemapwithnote from '../../styles/assets/sitemapwithnote.png';
import newsitemap from '../../styles/assets/newscsitemap.png';

const StatCrunch = () => (
    <div className='fw-designsystem'>
        <Menu main={false}/>
        <Password>
            <main>
                <Overview title='STATCRUNCH.COM REDESIGN' topimg={top} summary={["StatCrunch is a web-based software for statistics classes. Pearson has been its main distributer for years and has aquired it about two years ago. Last year Pearson embarked on a new project to introduce a brand new version of the website to improve the user experience and also to match with Peason branding. I partnered with another UX designer to redesign the website and I produced functional prototype for usability test as well as to help with the development work. It's now fully transit to development phase and Pearson aims at releasing the new version in the back to school season in 2019."]} myrole={['UX designer, prototyper.']} type='Project in work. Website redesign.' duration='6 months.' members='Timothy Garrand, Nathan Torno, Alex Paone, Justine Sundaram, Surangi Nethsinghe'/>
                <div className="container">
                    <h2 className='text-center mt-5'>THE PROJECT</h2>
                    <div className='row'>
                        <div className='col-12 col-md-8 offset-md-2'>
                            <h3>BACKGROUND</h3>
                            <p>The interface of StatCrunch website hasn't been updated for a few years. As you can see it looks outdated, and the user experience is kind of awkward in many details. The goal of this project is to redesign the website using Pearson's UI kit to improve the UX and also to provide a unified experience among all the Pearson e-learning tools. </p>
                        </div>
                        <div className='col-12 col-md-6'>
                            <figure>
                                <figcaption>Current StatCrunch home page.</figcaption>
                                <img className='img-fluid ' src={sccurrent} alt=''/>
                            </figure>
                        </div>
                        <div className='col-12 col-md-6'>
                            <figure>
                                <figcaption>Pearson higher education home page.</figcaption>
                                <img className='img-fluid ' src={pearson} alt=''/>
                            </figure>
                        </div>
                        <div className='col-12 mt-2'>
                            <figure>
                                <figcaption>Our UI kit.</figcaption>
                                <img className='img-fluid ' src={uikit} alt=''/>
                            </figure>
                        </div>
                        <div className='col-12 col-md-8 offset-md-2 mt-4'>
                            <h3>INFORMATION ARCHITECHTURE REDESIGN</h3>
                            <p>We first worked on re-structure the information on StatCrunch.com. I created a site map and then I worked with another UX designer to identify duplicate content, and re-arrange the information flow.</p>
                        </div>
                        <div className='col-12 col-md-6'>
                            <figure>
                                <figcaption>Current StatCrunch site map.</figcaption>
                                <img className='img-fluid border' src={sitemap} alt=''/>
                            </figure>
                        </div>
                        <div className='col-12 col-md-6'>
                            <figure>
                                <figcaption>Current StatCrunch site map with marks about grouping and deletion.</figcaption>
                                <img className='img-fluid border' src={sitemapwithnote} alt=''/>
                            </figure>
                        </div>
                        <div className='col-12 col-md-8 offset-md-2 mt-2'>
                            <figure>
                                <figcaption>Redesigned site map.</figcaption>
                                <img className='img-fluid border' src={newsitemap} alt=''/>
                            </figure>
                        </div>
                        <div className='col-12 col-md-8 offset-md-2 mt-4'>
                            <h3>WEB PAGES REDESIGN</h3>
                            <p>Then we started to redesign the web content. The process is that the other designer works on the design first and then he sends his work to me for review, and I would rovide suggestions for improving or use Sketch to create my own take. And we would have discussion around different design options. Depending on the complexity of interaction, we would involve user researchers to conduct usabilty test. <a className="text-green" href="https://overflow.io/s/WWRIS9/?node=5a1622f3">Here are a few examples of my redesign work</a>.</p>
                        </div>
                    </div>    
                </div>
            </main> 
        </Password>
        <Footlinks prev='neu' next='decentralism'/>
        <Footer/>
    </div>
);

export default StatCrunch;