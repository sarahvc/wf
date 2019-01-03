import React from 'react';
import Footer from '../components/Footer';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';
import top from '../../styles/assets/tad-top.png';
import content from '../../styles/assets/tad-content.png';
import app00 from '../../styles/assets/IMG_4855.jpg';
import app01 from '../../styles/assets/IMG_4856.jpg';
import app02 from '../../styles/assets/IMG_4857.jpg';
import app03 from '../../styles/assets/IMG_4858.jpg';
import app04 from '../../styles/assets/IMG_4859.jpg';
import re00 from '../../styles/assets/tad-home.png';
import re01 from '../../styles/assets/tad-memories.png';
import re02 from '../../styles/assets/tad-report-firsthalf.png';
import re03 from '../../styles/assets/tad-familynote.png';
import re04 from '../../styles/assets/tad-liquids.png';

const Tadpoles = () => (
    <div className='fw-tadpoles'>
        <Menu main={false}/>
        <main>
            <Overview title='TADPOLES PARENT APP REDESIGN' topimg={top} summary={["The daycare that my daughter is going to is using ", <a href='https://www.tadpoles.com/' class='text-green'>Tadpoles</a>, " to connect with parents. Parents can check on daily reports, photos and notes from their child care centers with this app, which is a great help. However, the usability has a lot of room for improvement. So I decided to redesign the app from scratch as one of my side projects."]} myrole={['UX/UI designer.']} type='Side project. App design.' duration='2 weeks.' members='Individual project.'/>
            <div className='container'>
                <h2 className='text-center mt-5'>THE PROJECT</h2>
                <div className='row'>
                    <div className='col-12 col-md-10 offset-md-1'>
                        <p className='mb-0'>Current version.</p>
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
                    <div className='col-12 col-md-10 offset-md-1'>
                        <p className='mb-0'>My design.</p>
                    </div>
                    <div className='col-12 col-md-2 offset-md-1'>
                        <img className='img-fluid' src={re00} alt=''/>
                    </div>
                    <div className='col-12 col-md-2'>
                        <img className='img-fluid border' src={re01} alt=''/>
                    </div>
                    <div className='col-12 col-md-2'>
                        <img className='img-fluid border' src={re02} alt=''/>
                    </div>
                    <div className='col-12 col-md-2'>
                        <img className='img-fluid border' src={re03} alt=''/>
                    </div>
                    <div className='col-12 col-md-2'>
                        <img className='img-fluid border' src={re04} alt=''/>
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-12 col-md-10 offset-md-1'>
                        <img className='img-fluid' src={content} alt=''/>
                    </div>
                </div>
            </div>
        </main>
        <Footlinks next='designsystem'/>
        <Footer/>
    </div>
);

export default Tadpoles;