import React from 'react'

import '../styles/css/Home.css'

const Home = () => (
  <div className="container">
    <div className="home">
      <div className="home-left">
        <h3>Coding with<br /> Data Structures & Algorithms</h3>
        <p>Enhance your problem solving skills as you learn how to breakdown problems into pieces using the efficient data structures and algorithms</p>
        <p>Solutions to major coding problems in Javascript syntax</p>
        <a className="waves-effect waves-light red darken-3 btn-large">Start Learning</a>
      </div>
      <div className="home-right">
        <img src="img/programming.svg" alt="Programming with DSA"/>
      </div>
    </div>
  </div>
);

export default Home;