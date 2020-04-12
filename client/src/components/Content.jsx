import React from 'react';
import { withRouter } from 'react-router-dom';

const Content = (props) => (
  <div className="content">
    <h3>{props.match.params.id}</h3>
  </div>
);

export default withRouter(Content);
