import React from 'react';
import Zoom from 'react-reveal/Fade'

function About() {
    return (
        <div className='about'>
        <Zoom>
            We are a chess.com club that has vote chess, live tournaments, and more. Check out the home page
             <a href='https://www.chess.com/club/alpha-zero/' target='blank' className='join'>          
             <button variant="primary" size="lg" className='Button'>
                HERE.
            </button></a><br />Thanks!<br /><br /></Zoom>
        </div>
    );
}

export default About;