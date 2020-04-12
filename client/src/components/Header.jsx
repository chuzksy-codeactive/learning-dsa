import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="blue darken-4">
    <div className="nav-wrapper container">
      <Link to="/" className="brand-logo">Learning &lt;DSA&gt;</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to="/beginner">Beginner</Link>
        </li>
        <li>
          <Link to="/intermediate">Intermedate</Link>
        </li>
        <li>
          <Link to="/advance">Advance</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;