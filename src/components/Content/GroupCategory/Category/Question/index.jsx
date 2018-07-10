import React from 'react';

const Question = (props) =>{

    const renderQuestions = () =>{
        const listQuestions = props.listQuestions || []
        return listQuestions.map(question =>(
            <div className="questions"><a href="#">}>{question.textQuestion}</a></div>
        ))
    }

return({renderQuestions()})
}

export default Question;    