import React from 'react';
import Footer from '../components/Footer';
import Overview from '../components/Overview';
import Menu from '../components/Menu';
import Footlinks from '../components/Footlinks';
import TwoColImg from '../components/TwoColImg';

const Scrabble = () => (
    <div className='fw-scrabble'>
        <Menu main={false}/>
        <main>
            <Overview title='BODY SCRABBLE' quote='Even though I lost, I enjoyed the game.' source='--- A player from our first round of testing' src='' type='Course Project. Game Design.' duration='4 weeks.' members='Jacqueline Chien, Shilpa Sarode, Katherine Habeck, Qianxu Zeng.'/>
            <div className='container'>
                <h2 className='text-center mt-5'>THE PROJECT</h2>
                <div className='row'>
                    <div className='col-12 col-md-6 offset-md-3'>
                        <h3>DESIGN CHALLENGE</h3>
                        <p>In this game design project, we were asked to design a game that borrows elements from color zen and scrabble, and no dice is allowed in our game. We analyzed those two games from its game elements, material used, verbs involved, and types of fun.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6 offset-md-3'>
                        <h3>BRAINSTORMING</h3>
                        <p>To design our own game, we started with a brainstorming, in which everyone generated two ideas. Then we selected half of those ideas and drew sketches to demonstrate them with more details. We eventually chose the idea of body scrabble because it can get people move around, and it has people factor and hard fun, and there are multiple related verbs involved, and it keeps dramatic and tension through the whole game.</p>
                    </div>
                </div>
            </div>
            <TwoColImg textLeft={true} title='PLAY TEST #0' text='Firstly, we tried out the game on ourselves to gauge feasibility and fun factor. We found out that sticky notes are temporarily effective, and we designed rules on aspects including number of letters, number of people in play and so forth.' src=''/>
            <TwoColImg title='PLAY TEST #1' text='We then tested our game on real players. Our game turned out to be surprisingly physical, and it&#39;s fun not only for players but also for others to watch. And we received many valuable insights for us to improve our game.' src=''/>
            <TwoColImg textLeft={true} title='PLAY TEST #2' text='We tested our game again after we revised games rules and iterated some game material. This time, we got ideas to further perfect our game.' src=''/>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6 offset-md-3'>
                        <h3>FINAL DESIGN</h3>
                        <p>
                            <ol>
                                <li>Combines physical and mental fun.</li>
                                <li>Catalyst for unique social experiences -- Memory-maker!</li>
                                <li>A great ice-breaker -- Takes the shy right out of you :)</li>
                            </ol>
                        </p>
                    </div>
                </div>
            </div>
        </main>
        <Footlinks prev='dorm'/>
        <Footer/>
    </div>
);

export default Scrabble;