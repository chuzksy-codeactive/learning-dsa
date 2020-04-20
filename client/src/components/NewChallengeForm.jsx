import React from 'react'
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import ChallengeField from './ChallengeField';

import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';

const FIELDS = [
  { label: 'Title', name: 'title' },
  { label: 'Question', name: 'question' },
  { label: 'Pseudocode', name: 'pseudocode' },
  { label: 'Solutions', name: 'solutions' }
];

class NewChallengeForm extends React.Component {
  state = {
    pseudocode: [],
    title: '',
    question: '',
    solutions: []
  }

  onAddPseudocode = (values) => {
    if (values) {
      this.setState({
        pseudocode: [...this.state.pseudocode, values.pseudocode]
      });
    }
  }

  onRemove = (index) => {
    if (this.state.pseudocode.length > 0) {
      this.setState({
        pseudocode: this.state.pseudocode.filter((item, i) => i !== index)
      })
    }
  }

  onSubmitChallenge = ({ title, question }) => {
    this.setState({
      title,
      question
    }, () => {
      console.log(this.state, '==================');
    });
  }

  render() {
    const { formValues, sutmitBeginner, history } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col s6 offset-s3" style={{ marginTop: "40px" }}>
            <form onSubmit={this.props.handleSubmit(value => this.onSubmitChallenge(value))}>
              <Field key="title" component={ChallengeField} type="text" label="Title" name="title" />
              <Field key="question" component={ChallengeField} type="text" label="Question" name="question" />
              <Field key="pseudocode" component={ChallengeField} type="text" label="Pseudocode" name="pseudocode" />
              <a className="waves-effect waves-light btn btn-small" onClick={() => this.onAddPseudocode(formValues)}><i className="material-icons right">add_circle_outline</i>add</a>
              {(this.state.pseudocode.length > 0) && <ul className="collection with-header" >
                <li className="collection-header"><h5>Pseudocodes</h5></li>
                {this.state.pseudocode.map((item, i) => (
                  <li key={i} className="collection-item">
                    <div>{item}
                      <a href="#!" className="secondary-content" onClick={() => this.onRemove(i)}>
                        <i className="material-icons red-text">delete</i>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>}
              <button type="submit" className="teal btn-flat right white-text">
                Submit
              <i className="material-icons right">done</i>
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const validate = (values) => {
  const errors = {};

  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value'
    }
  })

  return errors;
}

const mapStateToProps = (state) => {
  return {
    formValues: state.form.challengeForm?.values
  }
}



export default connect(mapStateToProps, actions)(reduxForm({ validate, form: 'challengeForm' })(withRouter(NewChallengeForm)));
