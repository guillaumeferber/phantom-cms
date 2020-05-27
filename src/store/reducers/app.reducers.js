import { combineReducers } from 'redux';
import notesReducer from './notes/notes.reducer';
import timerReducer from './timers/timers.reducer';
import loremReducer from './lorem/lorem.reducer';

const rootReducer = combineReducers({
    notes: notesReducer,
    timer: timerReducer,
    lorem: loremReducer
});

export default rootReducer;
