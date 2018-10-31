import React from 'react';
import Footer from '../components/Footer';
import Takeaway from '../components/Takeaway';
import Overview from '../components/Overview';

const PNC = () => (
    <main>
        <div className='container'>
            <Overview summary='We worked with PNC Bank on improving customer onboarding process for their commercial card products. Based on our research, we built Keystone, a comprehensive end-to-end application with bank and client-facing components. And we also streamlined the workflow accordingly. Our work was speaking highly not only by faculty mentors but also by PNC client.' role='As a user research co-lead, I selected research methods, designed the research plan, drafted interview and usability test scripts, and managed the research process with Jacqueline, who is another user research co-lead. I was also the project manager in the later half of this project. I organized the weekly summary &amp; plan meeting, assigned work among teammates, and managed the project progress. Last but not least, as a team member, I worked with all my teammates in every part of our project.' type='CMU MHCI Capstone Project. Commercial Banking Service.' duration='7 months / 2 semesters.' members='Jacqueline Chien, Maria Robles, Samarth Bahuguna.'/>
            <h2 className='text-center'>THE PROJECT</h2>
            <h2 className='text-center'>THE PROCESS</h2>
            <h2 className='text-center'>TAKEAWAY</h2>
            <div className='row'>
                <Takeaway title='How to B product is different from to C product' content='I think there is two big differences between to B product and to C product. First, the requirement analysis is usually easier for to B product since users, needs and scenarios are already there. But for to C product, a designer needs to spend more time to define the target users and problems. Second, designing to B product is usually more intricate than designing to C product. For to B product, not only do groups of people interact with your service but also they interact with each other through your service. That is to say, a designer needs to think about the users as well as their internal relationship when he/she works on the UX. Knowing the differences could help designers spend their time more efficently.'/>
                <Takeaway title='How to deal with the scarce of research time' content='As mentioned above, this project was totally new and challenging to all of us. But we only has the spring semester for research when each of us had other 3 or 4 demanding classes. But this is the case with many projects in the real world. There is never enough time. To use our time more wisely, we had a general plan. During our research, we first tried to make up for what we lack the most, and then to find what is causing the problem, and then to identify key part in there. We employed the useful part of our experience and also borrowed insights from our mentors.'/>
                <Takeaway title='What makes team work efficently and happily' content='We had a meeting at the very beginning to discuss what are our specialties, what are our personal goals in this project, what are our team rules regarding daily works and project management, and we also decide to do team building since it’s going to be a long project, we all wanted to work in a joyful and inspiring environment. As the project going on, we did reflections every two week to make sure the project and the team are all on good track.'/>
            </div>
        </div>
        <Footer/>
    </main>
);

export default PNC;