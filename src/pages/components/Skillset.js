import React from 'react';

const Skillset = () => (
    <div className='fw-skillset d-flex flex-column flex-lg-row justify-content-center mt-4 mb-5'>
        <div>
            <p className='text-right mb-0 fw-skills fw-skills-a'>User Research, Market research, Data analysis</p>
            <p className='text-orange text-right font-nunito text-right'>DO THE RIGHT THINGS</p>
        </div>
        <div className='align-self-end'>
            <p className='text-blue mb-0 ml-auto mr-0 font-nunito position-relative'>DO THE THINGS RIGHT</p>
            <p className='mb-0 fw-skills fw-skills-b'>Interaction design, Usability test, Prototyping, <br/>Front end development, Project management</p>
        </div>
    </div>
);

export default Skillset;