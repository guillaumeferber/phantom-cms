import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import QuizQuestionListItem from './QuizQuestionListItem/QuizQuestionListItem';
import Title from '../../../components/UI/Title/Title';

const QuizQuestionList = props => {

    return (
        <Aux>
            <Title level='3'>{props.questionList.label}</Title>
            <ul>
                {props.questionList.answerList.map((answerListItem, index) => (
                    <li key={answerListItem.name+'%_%'+index}>
                        <QuizQuestionListItem
                        highlighted={props.disabled && answerListItem.isAnswer}
                        disabled={props.disabled}
                        label={answerListItem.label}
                        elementTypes={{name: answerListItem.name, id: answerListItem.slug+index, value: answerListItem.value}}
                        changed={() => props.answerHandler({quizId: props.quizId, quizListId: props.questionList.id, answer: answerListItem.slug, isAnswer: answerListItem.isAnswer})} />
                    </li>
                ))}
            </ul>
        </Aux>
    );
}

export default QuizQuestionList;
