import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Sidebar from './Sidebar';
import Content from './Content';
import DefaultContent from './DefaultContent';
import beginner from '../data/beginner';

import '../styles/css/Layout.css';

class Layout extends React.Component {
  state = {
    titles: [],
    contents: [],
    challengeId: ''
  };

  componentDidMount() {
    this.setState({
      titles: beginner.map(item => ({ id: item.id, title: item.title })),
      contents: beginner
    });
  }

  onClickSidebar = (challengeId) => {
    this.setState({ challengeId })
  }

  render() {
    return (
      <div className="layout">
        <Sidebar titles={this.state.titles} onClickSidebar={this.onClickSidebar} />
        <Switch>
          {
            !this.props.match.params.id &&
              <Route exact path={`${this.props.match.path}`}>
                <DefaultContent contents={this.state.contents[0]} />
              </Route>
          }
          {
            this.state.challengeId &&
            (
              <Route path={`${this.props.match.path}/:id`}>
                <DefaultContent contents={this.state.contents.find(item => item.id === this.state.challengeId)} />
              </Route>
            )
          }
        </Switch>
      </div>
    );
  }
}

export default withRouter(Layout);
