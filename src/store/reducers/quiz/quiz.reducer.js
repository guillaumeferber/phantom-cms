import * as actionTypes from '../../actions/quiz/quiz.actionsTypes';
import { updateObject, storage } from '../../utility';
import * as constants from '../../constants/';
const initialState = {
    quiz: storage.unload('quiz') || constants.QUIZ_LIST,
    selectedQuiz: constants.QUIZ_LIST[0],
    selectedQuizList: constants.QUIZ_LIST[0].quiz[0],
    selectedQuizListAnswer: null,
    quizStarted: constants.DEFAULT_QUIZ_STATUS,
    quizStatus: { hasAnswered: false },
    error: { message: '', status: false },
    results: null
}
const startQuiz = state => updateObject(state, { quizStarted: !initialState.quizStarted });
const stopQuiz = state => updateObject(state, { quizStarted: initialState.quizStarted });
const resetQuiz = state => updateObject(state, { ...initialState });
const selectQuiz = (state, action) => {
    const quizIndex = state.quiz.findIndex(quiz => quiz.id === action.payload.id);
    const quizList = [ ...state.quiz ];
    return updateObject(state, { selectedQuiz: quizList[quizIndex], selectedQuizList: quizList[quizIndex].quiz[0] });
};

const selectQuizList = (state, action) => {
    const quizListIndex = state.selectedQuiz.quiz.findIndex(quizItem => quizItem.id === action.payload.id);
    const quizList = [ ...state.selectedQuiz.quiz ];
    return updateObject(state, { selectedQuizList: quizList[quizListIndex] });
};

const checkAnswer = (state, action) => {
    const updatedQuizStatus = { ...state.quizStatus };
    updatedQuizStatus.hasAnswered = true;
    if (action.payload.value.isAnswer) {
        let updatedSelectedQuizList = { ...state.selectedQuizList };
        const quizListIndex = state.selectedQuiz.quiz.findIndex(quiz => quiz.id === state.selectedQuizList.id);
        updatedSelectedQuizList = state.selectedQuiz.quiz[quizListIndex + 1];

        return updateObject(state, {
            error: initialState.error,
            selectedQuizList: updatedSelectedQuizList,
            selectedQuizListAnswer: initialState.selectedQuizListAnswer,
            quizStatus: updatedQuizStatus
         });
    }

    const updatedError = { ...state.error };
    updatedError.message = `Try again!`;
    updatedError.status = true;
    return updateObject(state, { error: updatedError, quizStatus: updatedQuizStatus });
};

const selectQuizListAnswer = (state, action) => updateObject(state, { selectedQuizListAnswer: action.payload.value });
const storeResults = (state, action) => updateObject(state, { results: action.payload.results });
const deleteResults = (state, action) => updateObject(state, { id: action.payload.id });

const quizReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.START_QUIZ: return startQuiz(state);
        case actionTypes.STOP_QUIZ: return stopQuiz(state);
        case actionTypes.RESET_QUIZ: return resetQuiz(state);
        case actionTypes.CHECK_QUIZ_ANSWER: return checkAnswer(state, action);
        case actionTypes.SELECT_QUIZ: return selectQuiz(state, action);
        case actionTypes.SELECT_QUIZ_LIST: return selectQuizList(state, action);
        case actionTypes.SELECT_QUIZ_LIST_ANSWER: return selectQuizListAnswer(state, action);
        case actionTypes.STORE_QUIZ_RESULTS: return storeResults(state, action);
        case actionTypes.DELETE_QUIZ_RESULTS: return deleteResults(state, action);
        default: return state;
    }
}

export default quizReducer;
