import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import QuizQuestionListItem from './QuizQuestionListItem/QuizQuestionListItem';
import List from '../../../components/UI/List/List';
import ListItem from '../../../components/UI/List/ListItem/ListItem';
import Title from '../../../components/UI/Title/Title';
const QuizQuestionList = props => {

    return (
        <Aux>
            <Title level='3'>{props.questionList.label}</Title>
            <List>
                {props.questionList.answerList.map((answerListItem, index) => (
                    <ListItem variant="column" key={answerListItem.name+'%_%'+index}>
                        <QuizQuestionListItem
                        highlighted={props.disabled && answerListItem.isAnswer}
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
