import React from 'react';
import IN_PROGRESS from './in_progress/matches'
import UP_COMING from './up_coming/matches'
import FINISHED from './Finished/matches'

function Matches() {
    return(
        <div><br /><br />
        <UP_COMING />
        <IN_PROGRESS />
        <FINISHED />
        </div>
    )
}

export default Matches;