import * as actionTypes from './quiz.actionsTypes';

export const startQuiz = () => ({
    type: actionTypes.START_QUIZ
});

export const finishQuiz = (value) => ({
    type: actionTypes.FINISH_QUIZ,
    payload: { value }
});

export const resetQuiz = () => ({
    type: actionTypes.RESET_QUIZ
});

export const selectQuiz = id => ({
    type: actionTypes.SELECT_QUIZ,
    payload: { id }
});

export const selectQuizList = id => ({
    type: actionTypes.SELECT_QUIZ_LIST,
    payload: { id }
});

export const selectQuizListAnswer = value => ({
    type: actionTypes.SELECT_QUIZ_LIST_ANSWER,
    payload: { value }
});

export const checkAnswer = (value) => ({
    type: actionTypes.CHECK_QUIZ_ANSWER,
    payload: { value }
});
