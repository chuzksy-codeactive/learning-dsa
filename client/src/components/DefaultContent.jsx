import React from 'react';
import { withRouter } from 'react-router-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

import '../styles/css/Content.css';

class DefaultContent extends React.Component {

  render() {
    return (
      <div className="content">
        <h5>{this.props.contents && this.props.contents.title}</h5>
        <p>{this.props.contents && this.props.contents.question}</p>
        <div className="pseudocode">
          <h5>Pseudocode</h5>
          <ul className="collection">
            {
              this.props.contents && this.props.contents.pseudocode.map((item, i) => {
                return (<li key={i} className="collection-item">{item}</li>)
              })
            }
          </ul>
        </div>
        <div className="solution">
          {
            this.props.contents && this.props.contents.solutions.map((codeString, i) => (
              <div className="col s12" key={i}>
                <h5>{`Solution ${i + 1}`}</h5>
                <SyntaxHighlighter
                  language="javascript"
                  style={prism}
                  key={i}>
                  {codeString}
                </SyntaxHighlighter>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default withRouter(DefaultContent);
