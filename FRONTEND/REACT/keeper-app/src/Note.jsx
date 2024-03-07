import React from 'react';
import questions from './questions';
import Question from './Question';

function createQues(question) {
    return (
        <Question ques={question.ques} ans={question.ans} />


    );
}

function Note() {
    return (
        <div className="box">

            {questions.map(createQues)}

        </div>
    )
}

export default Note;