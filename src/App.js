import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home';
import Footer from './Footer';
import Matches from './Matches/Matches';
import Members from './Member/Members';
import Nav from './nav/Nav.jsx'
import './App.css';


function App() {
  return (
    <div className="App">
    <Router >
<Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Members' component={Members} />
        <Route exact path='/Matches' component={Matches} />
      </Switch>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
