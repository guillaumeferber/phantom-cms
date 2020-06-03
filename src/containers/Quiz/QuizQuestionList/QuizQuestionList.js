import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import { InputRadio, Title, ListItem, List } from '../../../components/UI';
import * as cn from './QuizQuestionList.css';
const QuizQuestionList = props => {
    return (
        <Aux>
            <Title level='2'>{props.questionList.position} - {props.questionList.label}</Title>
            <List>
                {props.questionList.answerList.map((answerListItem, index) => (
                    <ListItem variant="column" key={answerListItem.name+'%_%'+index}>
                        <InputRadio
                            className={props.hasAnswered && answerListItem.isAnswer ? cn.highlighted : null}
                            disabled={props.hasAnswered}
                            label={answerListItem.label}
                            elementTypes={{name: answerListItem.name, id: answerListItem.slug+index, value: answerListItem.value}}
                            changed={() => props.answerHandler({quizId: props.quizId, quizListId: props.questionList.id, answer: answerListItem.slug, isAnswer: answerListItem.isAnswer})} />
                    </ListItem>
                ))}
            </List>
        </Aux>
    );
}

export default QuizQuestionList;
