import * as ActionTypes from '../../actions/notes/notes.actionTypes';
import * as utility from '../../utility';

const initialState = {
    notes: utility.storage.unload('notes') || [],
    selectedNote: null
}
const addNote = (state, action) => {
    const t = utility.generateTimestamp();
    const newNote = {
        id: utility.generateRandomId(),
        name: action.payload.name,
        value: null,
        creationDate: t,
        updateDate: t
    };
    utility.storage.load('notes', {notes: state.notes.concat(newNote)});
    return utility.updateObject(state, {
        notes: state.notes.concat(newNote),
        selectedNote: newNote
    });
};

const saveNote = (state, action) => {
    const notes = [...state.notes ];
    const noteIndex = state.notes.findIndex(note => note.id === action.payload.note.id);
    let updatedNote = { ...state.notes[noteIndex] };
    updatedNote = action.payload.note;
    notes[noteIndex] = updatedNote;
    utility.storage.load('notes', {notes: notes});
    return utility.updateObject(state, {
        notes: notes,
        selectedNote: updatedNote
    });
};

const deleteNote = (state, action) => {
    const updatedNotes = state.notes.filter(note => note.id !== action.payload.id);
    const prestoredNotes = {notes: updatedNotes};
    utility.storage.load('notes', prestoredNotes);
    return utility.updateObject(state, {
        notes: updatedNotes,
        selectedNote: null
    })
};

const selectNote = (state, action) => utility.updateObject(state, { selectedNote: state.notes.find(note => note.id === action.payload.id)});

const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.ADD_NOTE: return addNote(state, action);
        case ActionTypes.SAVE_NOTE: return saveNote(state, action);
        case ActionTypes.DELETE_NOTE: return deleteNote(state, action);
        case ActionTypes.SELECT_NOTE: return selectNote(state, action);
        default: return state;
    }
}

export default notesReducer;
