import * as actionTypes from './quiz.actionsTypes';

export const startQuiz = () => ({
    type: actionTypes.START
});

export const stopQuiz = () => ({
    type: actionTypes.STOP
});

export const resetQuiz = () => ({
    type: actionTypes.RESET
});

export const selectQuiz = id => ({
    type: actionTypes.SELECT_QUIZ,
    payload: { id: id }
});
export const selectQuizList = id => ({
    type: actionTypes.SELECT_QUIZ_LIST,
    payload: { id: id }
});

export const checkAnswer = (value) => ({
    type: actionTypes.CHECK_ANSWER,
    payload: { value: value }
});

export const storeResults = value => ({
    type: actionTypes.STORE_RESULTS,
    payload: { value: value }
});

export const deleteResults = (value) => ({
    type:  actionTypes.DELETE_RESULTS,
    payload: { id: value }
});
