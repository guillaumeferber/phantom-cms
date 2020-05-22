import notesReducer from '../reducers/notes/notes.reducers';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    notes: notesReducer,
});

export default rootReducer;
