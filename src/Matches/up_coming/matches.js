import React from 'react';
import Collapsible from './Collapsible';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            matches2: []
        }
    }

    
    componentWillMount() {
        localStorage.getItem('matches2') && this.setState({
            matches2: JSON.parse(localStorage.getItem('matches2')),
            isLoading: false
        })
    }
    

    componentDidMount(){

        const date = localStorage.getItem('matches2Date');
        const matches2Date = date && new Date(parseInt(date));
        const now = new Date();

        const dataAge = Math.round((now - matches2Date) / (1000 * 60)); // in minutes
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
            matches2: []
        })

        fetch('https://api.chess.com/pub/club/alpha-zero/matches')
        .then(response => response.json())
        .then(parsedJSON => parsedJSON.registered.map(match => (
            {
                name: `${match.name}`,
                url: `${match.id}`,
                time_class: `${match.time_class}`,
            }
        )))
        .then(matches2 => this.setState({
            matches2,
            isLoading: false
        }))
        .catch(error => console.log('parsing failed', error))
        
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('matches2', JSON.stringify(nextState.matches2));
        localStorage.setItem('matches2Date', Date.now());
    }
    

    render() {
        const {isLoading, matches2} = this.state;

        return (
            <div>
                <header>
                    <h1>Upcoming</h1>
                </header>
                <div className={`content ${isLoading ? 'is-loading' : ''}`}>
                    <div className="panel-group">
                        {
                            !isLoading && matches2.length > 0 ? matches2.map(contact => {
                                const {name} = contact;
                                const {time_class} = contact;
                                return <Collapsible title={name} time_class={time_class}>
                                </Collapsible>
                            }) : null
                        }
                    </div>
                    <div className="loader">
                        <div className="icon"></div>
                    </div>
                    If nothing shows, look <a href='https://www.chess.com/clubs/matches/alpha-zero' className='members' target='blank'>HERE. </a>
                </div>
            </div>
        );
    }
}
export default App;