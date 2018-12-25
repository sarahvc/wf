import React from 'react';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { Document, Page } from 'react-pdf';
import resume from '../styles/assets/WeiFangResume.pdf';

const Resume = () => (
    <div>
        <Menu main={true} active='resume'/>
            <div className='fw-resume-container text-right text-green'>
                <a className='text-green' href='http://www.fangweisarah.com/WeiFangResume.pdf' target='_blanck'>Download PDF</a>
            </div>
            <Document className='fw-resume-container border' file={resume}>
                <Page pageNumber={1}/>
            </Document>
        <Footer/>
    </div>
);

export default Resume;