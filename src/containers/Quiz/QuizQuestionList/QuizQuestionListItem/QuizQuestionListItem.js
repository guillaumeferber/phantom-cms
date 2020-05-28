import React from 'react';
import RadioInput from '../../../../components/UI/Input/Radio/Radio';

const quizQuestionListItem = (props) => {
    return (
        <RadioInput
            label={props.label}
            elementTypes={props.elementTypes}
            changed={props.changed} />
     );
}

export default quizQuestionListItem;
