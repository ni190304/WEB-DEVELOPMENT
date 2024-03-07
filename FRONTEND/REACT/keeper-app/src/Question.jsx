import React from 'react';

function Question(props) {
  return (
    <div className='note'>
      <h1>{props.ques}</h1>
      <p>{props.ans}</p>
    </div>
  );
}

export default Question;
