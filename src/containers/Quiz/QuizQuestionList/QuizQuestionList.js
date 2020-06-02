import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import { InputRadio, Title, ListItem, List } from '../../../components/UI';
const QuizQuestionList = props => {
    return (
        <Aux>
            <Title level='2'>{props.questionList.label}</Title>
            <List>
                {props.questionList.answerList.map((answerListItem, index) => (
                    <ListItem variant="column" key={answerListItem.name+'%_%'+index}>
                        <InputRadio
                            className={!props.disabled && answerListItem.isAnswer ? 'highlighted' : 'stroke'}
                            disabled={props.disabled}
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
