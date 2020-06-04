import * as actionTypes from '../../actions/quiz/quiz.actionsTypes';
import { updateObject, storage } from '../../utility';
import * as constants from '../../constants/';
const initialState = {
    quiz: storage.unload('quiz') || constants.QUIZ_LIST,
    selectedQuiz: null,
    selectedQuizList: null,
    selectedQuizListAnswer: null,
    quizStatus: { hasAnswered: false, progress: constants.QUIZ_PROGRESS.STOPPED },
    error: { message: '', status: false },
    results: []
}
const startQuiz = state => updateObject(state, { quizStatus: { progress: constants.QUIZ_PROGRESS.STARTED } });
const finishQuiz = (state, action) => {
    let updatedResults = [ ...state.results ];
    updatedResults = updatedResults.concat(action.payload.value);
    return updateObject(state, {
        quizStatus: { progress: constants.QUIZ_PROGRESS.FINISHED },
        results: updatedResults
    });
};
const resetQuiz = state => updateObject(state, { ...initialState });

const selectQuiz = (state, action) => {
    const quizIndex = state.quiz.findIndex(quiz => quiz.id === action.payload.id);
    const quizList = [ ...state.quiz ];
    const updatedQuizStatus = { ...state.quizStatus };
    updatedQuizStatus.hasAnswered = false;
    updatedQuizStatus.progress = constants.QUIZ_PROGRESS.STOPPED;
    return updateObject(state, {
        selectedQuiz: quizList[quizIndex],
        selectedQuizList: quizList[quizIndex].quiz[0],
        quizStatus: updatedQuizStatus,
        results: initialState.results
    });
};

const selectQuizList = (state, action) => {
    const quizListIndex = state.selectedQuiz.quiz.findIndex(quizItem => quizItem.id === action.payload.id);
    const quizList = [ ...state.selectedQuiz.quiz ];
    let updatedSelectedQuizList = { ...state.selectedQuizList };
    updatedSelectedQuizList = quizList[quizListIndex + 1];

    const updatedQuizStatus = { ...state.quizStatus };
    updatedQuizStatus.hasAnswered = false;
    updatedQuizStatus.progress = constants.QUIZ_PROGRESS[(quizListIndex !== state.selectedQuiz.quiz.length - 1 ? 'IN_PROGRESS' : 'FINISHED')];
    return updateObject(state, {
        selectedQuizList: updatedSelectedQuizList,
        quizStatus: updatedQuizStatus,
        results: [...state.results]
     });
};

const checkAnswer = (state, action) => {
    const updatedQuizStatus = { ...state.quizStatus };
    updatedQuizStatus.hasAnswered = true;
    updatedQuizStatus.progress =  constants.QUIZ_PROGRESS.IN_PROGRESS;
    let updatedResults = [ ...state.results ];
    updatedResults = updatedResults.concat(action.payload.value);

    return updateObject(state, {
        error: initialState.error,
        selectedQuizListAnswer: initialState.selectedQuizListAnswer,
        quizStatus: updatedQuizStatus,
        results: updatedResults
    });
};

const selectQuizListAnswer = (state, action) => updateObject(state, { selectedQuizListAnswer: action.payload.value });

const quizReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.START_QUIZ: return startQuiz(state);
        case actionTypes.FINISH_QUIZ: return finishQuiz(state, action);
        case actionTypes.RESET_QUIZ: return resetQuiz(state);
        case actionTypes.CHECK_QUIZ_ANSWER: return checkAnswer(state, action);
        case actionTypes.SELECT_QUIZ: return selectQuiz(state, action);
        case actionTypes.SELECT_QUIZ_LIST: return selectQuizList(state, action);
        case actionTypes.SELECT_QUIZ_LIST_ANSWER: return selectQuizListAnswer(state, action);
        default: return state;
    }
}

export default quizReducer;
