import React from 'react';

const ChallengeField = ({ input, label, meta: { touched, error } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} className="input-field" />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  )
}

export default ChallengeField;
