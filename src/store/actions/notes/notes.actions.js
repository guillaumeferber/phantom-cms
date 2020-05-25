import * as ActionType from './notes.actionTypes';
export const addNote = (value) => ({
    type: ActionType.ADD_NOTE,
    payload: value
});
export const saveNote = (value) => ({
    type: ActionType.SAVE_NOTE,
    payload: { note: value }
});
export const selectNote = (value) => ({
    type: ActionType.SELECT_NOTE,
    payload: { id: value }
});
export const deleteNote = (value) => ({
    type: ActionType.DELETE_NOTE,
    payload: { id: value }
});
