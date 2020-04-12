import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header'
import Beginner from './components/Beginner';
import Intermediate from './components/Intermediate';
import Advance from './components/Advance';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/beginner" component={Beginner} />
        <Route path="/intermediate" component={Intermediate} />
        <Route path="/advance" component={Advance} />
      </Router>
    </div>
  );
}

export default App;
