import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
  return (
    <div>
      <ul>
        {props.titles.map(item => (
          <li key={item.id}>
            <Link to={`${props.match.url}/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default withRouter(Sidebar);
