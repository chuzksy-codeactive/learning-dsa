import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header'
import Beginner from './components/Beginner';
import Intermediate from './components/Intermediate';
import Advance from './components/Advance';
import Home from './components/Home';
import NewChallenge from './components/NewChallenge';

import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/beginner" component={Beginner} />
        <Route path="/intermediate" component={Intermediate} />
        <Route path="/advance" component={Advance} />
        <Route path="/new-challenge" component={NewChallenge} />
      </Router>
    </div>
  );
}

export default App;
