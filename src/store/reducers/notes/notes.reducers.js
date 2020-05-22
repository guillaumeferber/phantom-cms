import * as ActionTypes from '../../actions/notes/notes.actionTypes';
import * as utility from '../../utility';

const initialState = {
    notes: [],
    selectedNote: null
}
const addNote = (state, action) => utility.updateObject(state, { notes: state.notes.concat({ id: utility.generateRandomId(), name: action.payload.name})});

const updateNote = (state, action) => utility.updateObject(state, { notes: state.notes.concat({ id: utility.generateRandomId(), name: action.payload.note.name})});

const deleteNote = (state, action) => utility.updateObject(state, {
    notes: state.notes.filter(note => note.id !== action.payload.id),
    selectedNote: null
});

const selectNote = (state, action) => utility.updateObject(state, { selectedNote: state.notes.find(note => note.id === action.payload.id)});

const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.ADD_NOTE: return addNote(state, action);
        case ActionTypes.UPDATE_NOTE: return updateNote(state, action);
        case ActionTypes.DELETE_NOTE: return deleteNote(state, action);
        case ActionTypes.SELECT_NOTE: return selectNote(state, action);
        default: return state;
    }
}

export default notesReducer;
