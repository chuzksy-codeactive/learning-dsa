import React from 'react'
import NewChallengeForm from './NewChallengeForm';
import { connect } from 'react-redux';
import * as actions from '../actions';

class NewChallenge extends React.Component {
  render() {
    return (
      <NewChallengeForm />
    )
  }
}

export default NewChallenge;
