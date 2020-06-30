import React from 'react';
import Collapsible from './Collapsible';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            matches: []
        }
    }

    
    componentWillMount() {
        localStorage.getItem('matches') && this.setState({
            matches: JSON.parse(localStorage.getItem('matches')),
            isLoading: false
        })
    }
    

    componentDidMount(){

        const date = localStorage.getItem('matchesDate');
        const matchesDate = date && new Date(parseInt(date));
        const now = new Date();

        const dataAge = Math.round((now - matchesDate) / (1000 * 60)); // in minutes
        const tooOld = dataAge >= 1;

        if(tooOld){
            this.fetchData();            
        } else {
            console.log(`Using data from localStorage that are ${dataAge} minutes old.`);
        }

    }

    fetchData(){

        this.setState({
            isLoading: true,
            matches: []
        })

        fetch('https://api.chess.com/pub/club/alpha-zero/matches')
        .then(response => response.json())
        .then(parsedJSON => parsedJSON.in_progress.map(match => (
            {
                name: `${match.name}`,
                url: `${match.id}`,
                time_class: `${match.time_class}`,
                id: `match.@id`
            }
        )))
        .then(matches => this.setState({
            matches,
            isLoading: false
        }))
        .catch(error => console.log('parsing failed', error))
        
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('matches', JSON.stringify(nextState.matches));
        localStorage.setItem('matchesDate', Date.now());
    }
    

    render() {
        const {isLoading, matches} = this.state;

        return (
            <div>
                <header>
                    <h1>Matches in Progress</h1>
                </header>
                <div className={`content ${isLoading ? 'is-loading' : ''}`}>
                    <div className="panel-group">
                        {
                            !isLoading && matches.length > 0 ? matches.map(contact => {
                                const {name} = contact;
                                const {time_class} = contact;
                                return <Collapsible title={name} time_class={time_class}>
                                </Collapsible>
                            }) : null
                        }
                    </div>
                    If nothing shows, look <a href='https://www.chess.com/clubs/matches/alpha-zero' className='members' target='blank'>HERE. </a>
                </div>
            </div>
        );
    }
}
export default App;