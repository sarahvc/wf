import React from 'react';

const Footer = () => (
    <div>
        <div className='text-center fw-contact my-5'>
            <a className='text-green' href="mailto:fangwei.sarah@gmail.com"><i className="fas fa-at mr-1"></i>Email</a>
            <a className='text-green' target="_blank" href="https://www.linkedin.com/in/fangweisarah/" rel="noopener noreferrer"><i className="fab fa-linkedin mr-1"></i>LinkedIn</a>
        </div>
        <footer className='bg-white'>
            <div className='container py-4'>
                <p className='mb-0 font-nunito'>Website Designed &amp; Crafted by Wei Fang. 2018 &copy; Wei Fang</p>
            </div> 
        </footer>
    </div>
);

export default Footer;