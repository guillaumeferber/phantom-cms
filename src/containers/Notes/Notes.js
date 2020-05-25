import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import * as cx from './Notes.css';
import NotesList from './NotesList/NotesList';
import NoteEditor from './NoteEditor/NoteEditor';
import Placeholder from '../../components/UI/Placeholder/Placeholder';

import * as actionCreator from '../../store/actions/index';
class Notes extends Component {

    render() {
        return (
            <Aux>
                <h1 className={cx.NoteTitle}>Notes</h1>
                <button onClick={this.props.noteAddeddHandler} className={cx.AddButton}><span>+</span></button>
                <div className={cx.Notes}>
                    {this.props.notes.length > 0 ? <NotesList
                        notes={this.props.notes}
                        onNoteItemSelected={(event) => this.props.noteSelectedHandler(event)}
                        onNoteItemDeleted={(event) => this.props.noteDeletedHandler(event)}
                    /> : <Placeholder><b>No note yet</b><span>Start by adding a new one</span></Placeholder>}
                    {this.props.selectedNote ? <NoteEditor
                        note={this.props.selectedNote}
                        onNoteSaved={(e) => this.props.noteSavedHandler(e)}
                    /> : <Placeholder>No note selected</Placeholder>}
                </div>
            </Aux>
         )

    }
}

const mapStateToProps = state => ({
    notes: state.notes.notes,
    selectedNote: state.notes.selectedNote
});

const mapDispatchToProps = dispatch => {
    return {
        noteAddeddHandler: () => dispatch(actionCreator.addNote({name: 'New note'})),
        noteSavedHandler: (note) => dispatch(actionCreator.saveNote(note)),
        noteDeletedHandler: (id) => dispatch(actionCreator.deleteNote(id)),
        noteSelectedHandler: (id) => dispatch(actionCreator.selectNote(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notes);
