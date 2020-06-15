import React from 'react';
import Collapsible from './Collapsible';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            match: []
        }
    }

    
    componentWillMount() {
        localStorage.getItem('match') && this.setState({
            match: JSON.parse(localStorage.getItem('match')),
            isLoading: false
        })
    }
    

    componentDidMount(){

        const date = localStorage.getItem('matchDate');
        const matchDate = date && new Date(parseInt(date));
        const now = new Date();

        const dataAge = Math.round((now - matchDate) / (1000 * 60)); // in minutes
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
            match: []
        })

        fetch('https://api.chess.com/pub/club/alpha-zero/matches')
        .then(response => response.json())
        .then(parsedJSON => parsedJSON.finished.map(match => (
            {
                name: `${match.name}`,
                time_class: `${match.time_class}`,
                result: `${match.result}`
            }
        )))
        .then(match => this.setState({
            match,
            isLoading: false
        }))
        .catch(error => console.log('parsing failed', error))
        
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('match', JSON.stringify(nextState.match));
        localStorage.setItem('matchDate', Date.now());
    }
    

    render() {
        const {isLoading, match} = this.state;

        return (
            <div>
                <header>
                    <h1>Finished Matches</h1>
                </header>
                <div className={`content ${isLoading ? 'is-loading' : ''}`}>
                    <div className="panel-group">
                        {
                            !isLoading && match.length > 0 ? match.map(contact => {
                                const {name} = contact;
                                const {time_class} = contact;
                                const {result} = contact;
                                return <Collapsible title={name} time_class={time_class} result={result}>
                                </Collapsible>
                            }) : null
                        }
                    </div>
                    <div className="loader">
                    If nothing shows, look <a href='https://www.chess.com/clubs/matches/alpha-zero' className='members' target='blank'>HERE </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;