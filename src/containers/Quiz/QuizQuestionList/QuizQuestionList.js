import React, { useState } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import QuizQuestionListItem from './QuizQuestionListItem/QuizQuestionListItem';
import Title from '../../../components/UI/Title/Title';
import Button from '../../../components/UI/Button/Button';

const QuizQuestionList = (props) => {
    const [ answer, setAnswer] = useState(0);

    return (
        <Aux>
            <Title level='3'>{props.questionList.label}</Title>
            <ul>
                {props.questionList.answerList.map((answerListItem, index) => (
                    <li key={answerListItem.name+'%_%'+index}>
                        <QuizQuestionListItem
                        label={answerListItem.label}
                        elementTypes={{name: answerListItem.name, id: answerListItem.slug+index, value: answerListItem.value}}
                        changed={() => setAnswer({answer: answerListItem.slug, isAnswer: answerListItem.isAnswer})} />
                    </li>
                ))}
            </ul>
            <Button label="Check" variant="basic" clicked={() => props.answerHandler(answer)} />
        </Aux>
    );
}

export default QuizQuestionList;
