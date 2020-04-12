import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Sidebar from './Sidebar';
import Content from './Content';
import beginner from '../data/beginner';

import '../styles/css/Layout.css';

class Layout extends React.Component {
  state = {
    titles: []
  };

  componentDidMount() {
    this.setState({
      titles: beginner.map(item => ({ id: item.id, title: item.title }))
    });
  }

  render() {
    return (
      <div className="layout">
        <Sidebar titles={this.state.titles} />
        <Switch>
          <Route path={`${this.props.match.path}/:id`}>
            <Content />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(Layout);
