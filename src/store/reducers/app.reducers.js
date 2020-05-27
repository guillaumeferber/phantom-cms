import notesReducer from './notes/notes.reducer';
import timerReducer from './timers/timers.reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    notes: notesReducer,
    timer: timerReducer
});

export default rootReducer;
