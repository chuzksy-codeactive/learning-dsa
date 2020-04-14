import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../styles/css/Sibebar.css';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <h5>Challenges</h5>
      <ul>
        {props.titles.map(item => (
          <li key={item.id}>
            <Link 
              className="truncate" 
              to={`${props.match.url}/${item.id}`}
              onClick={() => props.onClickSidebar(item.id)}
              >
                {item.title}
              </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default withRouter(Sidebar);
