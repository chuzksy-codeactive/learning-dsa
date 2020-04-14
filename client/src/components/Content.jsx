import React from 'react';
import { withRouter } from 'react-router-dom';

import '../styles/css/Content.css';

const Content = (props) => (
  <div className="content">
    <h3>{props.match.params.id}</h3>
    <h3>{props.challengId}</h3>
  </div>
);

export default withRouter(Content);
