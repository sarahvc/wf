import React from 'react';
import Footer from '../components/Footer';
import Takeaway from '../components/Takeaway';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';

import cardstyle from '../../styles/assets/shoppingCard.png';
import liststyle from '../../styles/assets/shoppingLiebiao.png';
import dliststyle from '../../styles/assets/doubleLiebiao.png';
import shoppinglistArchi from '../../styles/assets/shoppinglistArchi.png';
import shoppinglistIllus from '../../styles/assets/shoppinglist00.png';
import shoppinglistresult from '../../styles/assets/shoppinglistresult.png';

const Shoppinglist = () => (
    <div className='fw-shoppinglist'>
        <Menu main={false}/>
        <main>
            <Overview title='SOCIALIZED SHOPPING LIST' quote='Some products with a very similar idea began to show up in the market after us.' source='' topimg={shoppinglistIllus} summary={["I proposed a feature called socialized shopping list, in which buyers could share their experience by making a public shopping list based on scenarios. And potential buyers could refer to the list to find what they need. We implemented this feature and achieved high user retention rate and conversion rate. And it's also the pioneer in the market."]} myrole={['As the product owner, I initiated this project based on my user research results and my analysis of our product. And I managed to convince my manager and colleagues when they were not positive about this idea. As this project being carried out, I built the prototype, worked with the visual designer and developers to implement it, and coordinated with digital content editors and business development executives to promote it.']} type='New feature in work. E-Commerce.' duration='2 months.' members='Jingjing Du, Minghao Wang, Meng Zhu, Jian Dun, Zhao Xu, Hong Hai.'/>
            <div className='container'>
                <h2 className='text-center mt-5'>THE PROJECT</h2>
                <div className='row'>
                    <div className='col-12 offset-md-2 col-md-8 mt-4'>
                        <h3>PROBLEMS AND ANALYSIS</h3>
                        <p>When I was conducting user interviews, I discovered that some users were not satisfied with the amount of content our products offered. Other users, though they didn’t explicitly express that they wanted more content, remarked that they could finish browsing all of our new content every day within a matter of minutes. This problem was also validated by our backend data.</p>
                        <p>Moreover, based on the personae that I created before, there were user needs that we haven’t fulfilled very well. To be more detailed, persona A is keen on discovering more interesting content and goods. Persona B prefers goods with high quality.</p>
                        <p>As for our product, we were offering mainly gathered deals from online retailers and shopping experience sharing articles from our users. The deals are limited by sales from online retailers. We could control neither the amount of deals nor what kinds of goods are included in the deals. In the articles, users reviewed goods from package to the experience of using thoroughly, which means the contribution is not very high since it really takes time for users to write the article. Nevertheless, articles are too long and detailed for some people. Our top competitors were having the same gap in their content.</p>
                        <h3>MY PROPOSAL</h3>
                        <p className='mb-1'>To address these problems, I proposed "socialized shopping list". Buyers could share their shopping experience with others by making their shopping list public. The list should be scenarios based, so that it would tell a story, and it would be like a solution to a better quality of life. For example, what do you need to start baking. What is recommended to improve your hair. And then potential buyers could easily decide which item best fulfilled their purpose. Actually, I noticed that there were already users who submitted articles in which they shared multiple products. But they format and the criteria that we selected articles were not friendly to this kind of sharing. Connecting these two types of buyers would benefit them both. In addition, this feature would create valuable content without straining our already-overworked digital content editors.</p>
                        <img className='img-fluid' src={shoppinglistArchi} alt=''/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6 mt-4'>
                        <h3>A CHALLENGE</h3>
                        <p>Nevertheless, some of my colleagues, even the director of our department, weren’t supportive initially. They were not sure that user needs were strong enough to support this feature. They were also in doubt that users could be convinced to buy things only by a list since it's not necessarily in sale like deals and it also doesn't have detailed experience sharing like articles.</p>
                    </div>
                    <div className='col-12 col-md-6 mt-4'>
                        <h3>MY APPROACH</h3>
                        <p>To address their concern, I outlined a strategy explaining how this feature would develop and benefit our products in both the short- and long-term. For example, I explained how could we also employ this concept to recommend goods for cross-border e-commerce, which was a focus of our department since the summer of 2014. Also, I proposed to a trial of this idea within our company. I used a coordination work tool to ask colleagues to create and share shopping lists with each other. It was an extremely successful trial: not only did it prove the user needs, but it also provided insights for the subsequent design of this feature. Finally, they agreed to implement the idea. I took charge of the interaction design and the development management.</p>
                    </div>
                </div>
                <div className='col-12 offset-md-2 col-md-8 mt-4'>
                    <h3>DESIGN</h3>
                    <p className='mb-1'>Though the pilot test equipped me with useful information on design, I went through several iterations and many discussions with my colleagues to design: there wasn’t a feature or product like that before, and I had to follow the design style and constraints of our products. After we settled in our team about the design, I also conducted cognitive walkthrough with colleagues in other department to improve it.</p>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <img className='img-fluid rounded-0' src={cardstyle} alt=''/>
                    </div>
                    <div className='col-12 col-md-4'>
                        <img className='img-fluid rounded-0' src={liststyle} alt=''/>
                    </div>
                    <div className='col-12 col-md-4'>
                        <img className='img-fluid rounded-0' src={dliststyle} alt=''/>
                    </div>
                </div>
                <div className='col-12 offset-md-2 col-md-8 mt-4'>
                    <h3>IMPLEMENTATION</h3>
                    <p>During the development process, I worked with our graphic designers and developers using Agile/Scrum development processes. I also collaborated with editors to create the curated content users would see during the feature introduction phase. And I coordinated with business development executives to employ methods and identify leads to promote this feature.</p>
                </div>
                <div className='col-12 offset-md-2 col-md-8 mt-4'>
                    <h3>RESULTS</h3>
                    <p className='mb-1'>This feature went live and achieved a 7-day user retention rate of 19%, and 5% conversion rate from clicks into orders. Not only did the users give positive feedback like ‘can’t wait to see more!’, but furthermore many of them signed up for an invitation code to create their own shopping lists. Moreover, some products with a very similar idea began to show up in the market after us.</p>
                    <img className='img-fluid' src={shoppinglistresult} alt=''/>
                </div>
                <h2 className='text-center mt-5'>TAKEAWAY</h2>
                <div className='row mt-4'>
                    <Takeaway title='Minimum viable product' content='I think minimum viable product is a great idea. First, I’m a doer, and I believe that action speaks louder than words. Therefore I think a great way to convince others is to present them with some actual results instead of pure theory. Second, trying to do something in a minimum viable way provides a chance for trial and error with low expense.'/>
                    <Takeaway title='UX is not only about interaction' content='In this project I worked with many people from different teams to make it successful. The interaction design is not the only thing that matters in the user experience. I think it is the case with most of the products out there. Therefore as a practitioner in UX, one should always think more, and have the initiatives to work with different people to build a better user experience together. '/>
                    <Takeaway title='Grow with my product' content='From this project, I’m determined that I would keep working in company instead of agency because I like to be dedicated and to think about how to improve a product, it’s like growing with your product. It makes me feel the ownership as well as a sense of belonging.'/>
                </div>
            </div>
        </main>
        <Footlinks prev='personae' next='ezmoto'/>
        <Footer/>
    </div>
);

export default Shoppinglist;