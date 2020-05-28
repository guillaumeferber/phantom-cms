import { combineReducers } from 'redux';
import notesReducer from './notes/notes.reducer';
import timerReducer from './timers/timers.reducer';
import loremReducer from './lorem/lorem.reducer';
import quizReducer from './quiz/quiz.reducer';

const rootReducer = combineReducers({
    notes: notesReducer,
    timer: timerReducer,
    lorem: loremReducer,
    quiz: quizReducer
});

export default rootReducer;
