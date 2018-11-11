import React from 'react';
import Footer from '../components/Footer';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';

import top from '../../styles/assets/top.png';
import context from '../../styles/assets/scrabblecontext.png';
import draw from '../../styles/assets/scrabblescan.jpg';
import initial from '../../styles/assets/initialround.png';
import second from '../../styles/assets/secondround.png';
import third from '../../styles/assets/thirdround.png';
import materials from '../../styles/assets/materials.png';
import rules from '../../styles/assets/scrabblerules.jpeg';

const Scrabble = () => (
    <div className='fw-scrabble'>
        <Menu main={false}/>
        <main>
            <Overview title='BODY SCRABBLE' quote='Even though I lost, I enjoyed the game.' source='--- A player from our first round of testing' topimg={top}  type='Course Project. Game Design.' duration='4 weeks.' members='Jacqueline Chien, Shilpa Sarode, Katherine Habeck, Qianxu Zeng.'/>
            <div className='container'>
                <h2 className='text-center mt-5'>THE PROJECT</h2>
                <div className='row'>
                    <div className='col-12 col-md-8 offset-md-2'>
                        <h3>DESIGN CHALLENGE</h3>
                        <p className='mb-0'>In this game design project, we were asked to design a game that borrows elements from color zen and scrabble, and no dice is allowed in our game. We analyzed those two games from its game elements, material used, verbs involved, and types of fun.</p>
                        <img src={context} className='img-fluid' alt=''/>
                        <h3 className='mt-4'>BRAINSTORMING</h3>
                        <p className='mb-0'>To design our own game, we started with a brainstorming, in which everyone generated two ideas. Then we selected half of those ideas and drew sketches to demonstrate them with more details. We eventually chose the idea of body scrabble, which was proposed by me, because it can get people move around, and it has people factor and hard fun, and there are multiple related verbs involved, and it keeps dramatic and tension through the whole game.</p>
                        <img src={draw} className='img-fluid' alt=''/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6 offset-md-3'>
                        <h3 className='mt-4'>PLAY TEST #0</h3>
                        <p className='mb-0'>Firstly, we tried out the game on ourselves to gauge feasibility and fun factor. We found out that sticky notes are temporarily effective, and we designed rules on aspects including number of letters, number of people in play and so forth.</p>
                        <img src={initial} className='img-fluid' alt=''/>
                        <h3 className='mt-4'>PLAY TEST #1</h3>
                        <p className='mb-0'>We then tested our game on real players. Our game turned out to be surprisingly physical, and it&#39;s fun not only for players but also for others to watch. And we received many valuable insights for us to improve our game.</p>
                        <img src={second} className='img-fluid' alt=''/>
                        <h3 className='mt-4'>PLAY TEST #2</h3>
                        <p className='mb-0'>We tested our game again after we revised games rules and iterated some game material. This time, we got ideas to further perfect our game.</p>
                        <img src={third} className='img-fluid' alt=''/>
                        <h3 className='mt-4'>FINAL DESIGN</h3>
                        <p>
                            <ol>
                                <li>A game that combines physical and mental fun.</li>
                                <li>A catalyst for unique social experiences -- Memory-maker!</li>
                                <li>A great ice-breaker -- Takes the shy right out of you :)</li>
                            </ol>
                        </p>
                        <img src={materials} className='img-fluid' alt=''/>
                        <img src={rules} className='img-fluid' alt=''/>
                    </div>
                </div>          
            </div>
        </main>
        <Footlinks prev='dorm'/>
        <Footer/>
    </div>
);

export default Scrabble;