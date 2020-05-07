import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import Sidebar from './Sidebar';
import Content from './Content';
// import beginner from '../data/beginner';
import * as actions from '../actions';

import '../styles/css/Layout.css';
import { connect } from 'react-redux';

class Layout extends React.Component {
  state = {
    titles: [],
    contents: [],
    challengeId: ''
  };

  componentDidMount() {
    // this.setState({
    //   titles: beginner.map(item => ({ id: item.id, title: item.title })),
    //   contents: beginner
    // });
  }

  onClickSidebar = (challengeId) => {
    this.setState({ challengeId })
  }

  render() {
    const { beginner } = this.props;
    return (
      <div className="layout">
        <Sidebar titles={beginner && beginner.map(item => ({ id: item._id, title: item.title }))} onClickSidebar={this.onClickSidebar} />
        <Switch>
          {
            !this.props.match.params.id &&
            <Route exact path={`${this.props.match.path}`}>
              <Content contents={beginner && beginner[0]} />
            </Route>
          }
          {
            this.state.challengeId &&
            (
              <Route path={`${this.props.match.path}/:id`}>
                <Content contents={beginner && beginner.find(item => item._id === this.state.challengeId)} />
              </Route>
            )
          }
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  beginner: state.beginners.beginner,
  loading: state.beginners.loading
});

export default connect(mapStateToProps, actions)(withRouter(Layout));
