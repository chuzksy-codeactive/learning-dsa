import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const Header = (props) => (
  <nav className="blue darken-4">
    <div className="nav-wrapper container">
      <Link to="/" className="brand-logo">Learning &lt;DSA&gt;</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li className={props.location.pathname === '/beginner' ? 'active' : ''}>
          <Link to="/beginner">Beginner</Link>
        </li>
        <li className={props.location.pathname === '/intermediate' ? 'active' : ''}>
          <Link to="/intermediate">Intermedate</Link>
        </li>
        <li className={props.location.pathname === '/advance' ? 'active' : ''}>
          <Link to="/advance">Advance</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default withRouter(Header);