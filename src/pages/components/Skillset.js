import React from 'react';

const Skillset = () => (
    <div className='row my-5'>
        <div className='col-12 col-xl-10 offset-xl-1 fw-skills-principles position-relative mb-4 mt-3'>
            <div className='fw-skills text-white'>
                <h1 className='font-yrsa mb-0 pl-5'>SKILL SET</h1>
                <div className='py-5 pl-5'>
                    <ul className='list-unstyled mb-0'>
                        <li className='mb-3'><span>Do the right things</span>
                            <ul className='list-inline'>
                                <li className='list-inline-item'>User research,</li>
                                <li className='list-inline-item'>Market research,</li>
                                <li className='list-inline-item'>Data analysis,</li>
                            </ul>
                        </li>
                        <li><span>Do the things right</span>
                            <ul className='list-inline'>
                                <li className='list-inline-item'>Interaction design,</li>
                                <li className='list-inline-item'>Interaction design,</li>
                                <li className='list-inline-item'>Usability test,</li>
                                <li className='list-inline-item'>Prototyping,</li>
                                <li className='list-inline-item'>Front end development,</li>
                                <li className='list-inline-item'>Web accessibility,</li>
                                <li className='list-inline-item'>Project management</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='fw-principles mt-4 ml-auto mr-0'>
                <h1 className='font-yrsa mb-0 text-right pr-5'>DESIGN PRINCIPLES</h1>
                <div className='py-5 pr-5'>
                    <ul className='list-unstyled text-right mb-0'>
                        <li>Use both quantitative and qualitative research methods</li>
                        <li>Take advantage of MVP when applicable</li>
                        <li>Have goals and objectives</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
);

export default Skillset;