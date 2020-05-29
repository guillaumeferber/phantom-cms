import React from 'react';
import RadioInput from '../../../../components/UI/Input/Radio/Radio';
import './QuizQuestionListItem.css';
const quizQuestionListItem = (props) => {
    return (
        <RadioInput
            className={props.highlighted ? 'highlighted' : 'stroke'}
            disabled={props.disabled}
            label={props.label}
            elementTypes={props.elementTypes}
            changed={props.changed} />
     );
}

export default quizQuestionListItem;
