import React from 'react'
import Layout from './Layout'
import { connect } from 'react-redux';
import * as actions from '../actions';

class Beginner extends React.Component {
  componentDidMount() {
    this.props.fetchBeginner();
  }

  render() {
    return (
      <div className="container">
        <Layout beginner={this.props.beginner} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  beginner: state.beginners.beginner,
  loading: state.beginners.loading
});

export default connect(mapStateToProps, actions)(Beginner);