import React from 'react';
import Footer from './components/Footer';
import Menu from './components/Menu';
import { Document, Page } from 'react-pdf';
import resume from '../styles/assets/WeiFangResume.pdf';

const Resume = () => (
    <div>
        <Menu main={true} active='resume'/>
            <Document className='border' file={resume}>
                <Page pageNumber={1}/>
            </Document>
        <Footer/>
    </div>
);

export default Resume;