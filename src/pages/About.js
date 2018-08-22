import React from 'react';
import Subscribe from './atoms/Subscribe';

const About = () => (

        <div>
            <h1 className='text-center'>ARTX LAB</h1>
            <p className='text-center'>A Decentralism Art Ecosystem: </p>
            <p>ARTX is a protocol</p>
            <img className='img-fluid' src='https://via.placeholder.com/1280x300' alt=''/>
            <div className='ml-auto'>
                <h2 className='text-right'>Proof-of-creativity</h2>
                <p className='text-right'>In the past<br/>CONSENSUS</p>
                <p className='text-right'>In the future<br/>CONSENSUS</p>
            </div>
            <div>
                <p>{`<html>`}</p>
                <p className='pl-1'>{`<head>`}</p>
                <p className='pl-2'>{`<title>What in the world is “Decentralism”?</title>`}</p>
                <p className='pl-1'>{`</head>`}</p>
                <p>{`<body>`}</p>
                <p className='pl-1'>{`<article>`}</p>
                <p className='pl-2'>{`<header>`}</p>
                <p className='pl-3'>{`<h1>Decentralist Manifesto</h1>`}</p>
                <p className='pl-3'>{`<p>Decentralism is one of the …..</p>`}</p>
                <p className='pl-2'>{`</header>`}</p>
                <p className='pl-2'>{`<time>July 7, 2018</time>`}</p>
                <p className='pl-2'>{`<p>Decentralism was founded on July 7, 2018 in a coffee shop in New York by a group of artists, critics, tech enthusiasts and philosophers who believe that every human is entitled to complete freedom of creativity. The creative process encompasses the inception of a divine idea to the physical manifestation of this vision to the interaction of this thought with its viewers. This process attains its highest and purest form only when it is independent of the judgement of any entrenched institution or individual.</p>`}</p> 
                <p className='pl-2'>{`<p>Heavily influenced by Satoshi Nakamoto and blockchain technology, Decentralists propose a blockchain-based methodology to create art that is fully impervious to external censorship and control. Because decentralist art is computationally impossible to censor or erase, it liberates the creator from the authority and control that vested institutions or individuals hold over the realm of art and aesthetics. Non-reversible creations on the blockchain etch moments of a fleeting human experience onto a tangible eternity, allowing anyone the opportunity to be remembered by history based solely on the value of one’s creation. Decentralism is a creative utopia and democratic initiative in which the power of creativity and judge of value belong in the hands and minds of each individual. </p>`}</p>
                <p className='pl-2'>{`<p>ARTX Lab is proud to be the pioneer of Decentralism. </p>`}</p> 
                <p className='pl-2'>{`<p>We are Satoshi. Join the movement. </p>`}</p>
                <p className='pl-1'>{`</article>`}</p>
                <p>{`</body>`}</p>
                <p>{`</html>`}</p>
            </div>
            <p className='text-center'>"Art cannot be"</p>
            <p className='text-center'>Egon</p>
            <Subscribe/>
        </div>
);

export default About;