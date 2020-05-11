import React from 'react';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Matches from './matches';
import Members from './Member/Members';
import './App.css';

function App() {
  return (
    <div className="App">
     <Home />
    <About />
    <Matches />
    <Members /><br />
    <Footer />
    </div>
  );
}

export default App;
