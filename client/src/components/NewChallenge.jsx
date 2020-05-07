import React from 'react'
import NewChallengeForm from './NewChallengeForm';

class NewChallenge extends React.Component {

  render() {
    return (
      <NewChallengeForm onIsLoading={this.onIsLoading} />
    )
  }
}

export default NewChallenge;
