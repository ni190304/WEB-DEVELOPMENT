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
        <div className="boxstyle">
            <div className="box">
                {questions.map(createQues)}
            </div>
        </div>
    )
}

export default Note;