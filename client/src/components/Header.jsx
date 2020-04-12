import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <div className="nav-wrapper container">
      <Link to="/" className="brand-logo">Learning &lt;DSA&gt;</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link exact to="/beginner">Beginner</Link>
        </li>
        <li>
          <Link exact to="/intermediate">Intermedate</Link>
        </li>
        <li>
          <Link exact to="/advance">Advance</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;