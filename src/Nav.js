import React from 'react';
import {Link} from 'react-router-dom';
import Zoom from 'react-reveal/Fade'

function Nav() {
    return (
            <div class="flex-grow pa3 flex items-center nav">
            <Zoom>
                <Link to='/matches' class="f6 link dib white dim mr3 mr4-ns">Matches</Link>
                <Link to='/members' class="f6 link dib white dim mr3 mr4-ns">Members</Link>
                <Link to='/' className="f6 dib white bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20">Home</Link>
            </Zoom>
            </div>
    )
}

export default Nav;