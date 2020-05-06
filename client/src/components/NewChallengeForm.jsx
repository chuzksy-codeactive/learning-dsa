import React from 'react'
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import ChallengeField from './ChallengeField';
import '../styles/css/NewChallengeForm.css';

import { connect } from 'react-redux';
import * as actions from '../actions';
import { withRouter } from 'react-router-dom';

import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import '../../src/styles/css/Editor.css';
import dedent from 'dedent';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

require('prismjs/components/prism-jsx');

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
    solutions: [],
    code: dedent``,
    isCode: false,
    isSolution: false
  }

  onAddPseudocode = (values) => {
    if (values) {
      this.setState({
        pseudocode: [...this.state.pseudocode, values.pseudocode],
        isCode: false
      });
    }
  }

  onAddCode = () => {
    if (this.state.code) {
      this.setState({
        solutions: [...this.state.solutions, this.state.code],
        isSolution: false
      }, () => {
        this.setState({
          code: dedent``
        });
      });
    }
  }

  onRemovePseudocode = (index) => {
    if (this.state.pseudocode.length > 0) {
      this.setState({
        pseudocode: this.state.pseudocode.filter((item, i) => i !== index)
      })
    }
  };

  onRemoveCode = (index) => {
    if (this.state.solutions.length > 0) {
      this.setState({
        solutions: this.state.solutions.filter((item, i) => i !== index)
      })
    }
  };

  onSubmitChallenge = ({ title, question }) => {
    if (this.state.pseudocode.length === 0) {
      this.setState({ isCode: true });
      return;
    }

    if (this.state.solutions.length === 0) {
      this.setState({ isSolution: true });
      return
    }
    this.setState({
      title,
      question,
      isCode: false,
      isSolution: false
    }, () => {
      this.props.submitBeginner({
        title: this.state.title,
        question: this.state.question,
        pseudocode: this.state.pseudocode,
        solutions: this.state.solutions
      }, this.props.history)
    });
  }

  render() {
    const { formValues, submitBeginner, history } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col s6 offset-s3" style={{ marginTop: "40px" }}>
            <h4 style={{ marginBottom: "30px" }}>Add a new code challenge</h4>
            <form onSubmit={this.props.handleSubmit(value => this.onSubmitChallenge(value))}>
              <Field key="title" component={ChallengeField} type="text" label="Title" name="title" />
              <Field key="question" component={ChallengeField} type="text" label="Question" name="question" />
              <Field key="pseudocode" component={ChallengeField} type="text" label="Pseudocode" name="pseudocode" />
              <a className="waves-effect waves-light btn-small" onClick={() => this.onAddPseudocode(formValues)}><i className="material-icons right">add_circle_outline</i>add</a>
              {this.state.isCode && <div className="error-pseudocode"><span>Pls, add your pseudocode</span></div>}
              {(this.state.pseudocode.length > 0) && <ul className="collection with-header" >
                <li className="collection-header"><h5>Pseudocodes</h5></li>
                {this.state.pseudocode.map((item, i) => (
                  <li key={i} className="collection-item">
                    <div>{item}
                      <a href="#!" className="secondary-content" onClick={() => this.onRemovePseudocode(i)}>
                        <i className="material-icons red-text">delete</i>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>}
              <div className="container_editor_area">
                <Editor
                  placeholder="Type some code here…"
                  value={this.state.code}
                  onValueChange={code => this.setState({ code })}
                  highlight={code => highlight(code, languages.jsx)}
                  padding={10}
                  className="container__editor"
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                    marginBottom: 20,
                    marginTop: 10,
                  }}
                />
                {this.state.isSolution && <div className="error-code"><span>Pls, you should add code solution </span></div>}
                <a className="waves-effect waves-light btn-small" onClick={this.onAddCode} ><i className="material-icons right">add_circle_outline</i>add</a>

                {
                  this.state.solutions && this.state.solutions.map((codeString, i) => (
                    <div className="col s12" key={i}>
                      <h5>{`Solution ${i + 1}`}</h5>
                      <SyntaxHighlighter
                        language="javascript"
                        style={prism}
                        key={i}>
                        {codeString}
                      </SyntaxHighlighter>
                      <div>
                        <a href="#!" className="secondary-content" onClick={() => this.onRemoveCode(i)}>
                          <i className="material-icons red-text tiny">clear</i>
                        </a>
                      </div>
                    </div>
                  ))
                }
              </div>
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
