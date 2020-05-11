import React from 'react';
import Collapsible from './Collapsible';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            contacts: []
        }
    }

    
    componentWillMount() {
        localStorage.getItem('contacts') && this.setState({
            contacts: JSON.parse(localStorage.getItem('contacts')),
            isLoading: false
        })
    }
    

    componentDidMount(){

        const date = localStorage.getItem('contactsDate');
        const contactsDate = date && new Date(parseInt(date));
        const now = new Date();

        const dataAge = Math.round((now - contactsDate) / (1000 * 60)); // in minutes
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
            contacts: []
        })

        fetch('https://api.chess.com/pub/club/alpha-zero/members')
        .then(response => response.json())
        .then(parsedJSON => parsedJSON.weekly.map(user => (
            {
                name: `${user.username}`
            }
        )))
        .then(contacts => this.setState({
            contacts,
            isLoading: false
        }))
        .catch(error => console.log('parsing failed', error))
        
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('contacts', JSON.stringify(nextState.contacts));
        localStorage.setItem('contactsDate', Date.now());
    }
    

    render() {
        const {isLoading, contacts} = this.state;

        return (
            <div>
                <header>
                    <h1>Members who were active the last week</h1>
                </header>
                <div className={`content ${isLoading ? 'is-loading' : ''}`}>
                    <div className="panel-group">
                        {
                            !isLoading && contacts.length > 0 ? contacts.map(contact => {
                                const {name} = contact;
                                return <Collapsible title={name}>
                                    
                                </Collapsible>
                            }) : null
                        }
                    </div>
                    <div className="loader">
                        <div className="icon"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;