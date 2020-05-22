import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Aux/Aux';
import * as cx from './Notes.css';
import NotesList from './NotesList/NotesList';
import NoteEditor from './NoteEditor/NoteEditor';

import * as actionCreator from '../../store/actions/index';
class Notes extends Component {

    render() {
        return (
            <Aux>
                <h1>Notes</h1>
                <button onClick={this.props.noteAddeddHandler}>New note</button>
                <div className={cx.Notes}>
                    <NotesList
                        notes={this.props.notes}
                        onNoteItemSelected={(event) => this.props.noteSelectedHandler(event)}
                        onNoteItemDeleted={(event) => this.props.noteDeletedHandler(event)}
                    />
                    <NoteEditor
                        note={this.props.selectedNote}
                        onNoteUpdated={this.props.noteUpdatedHandler}
                    />
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
        noteUpdatedHandler: (note) => dispatch(actionCreator.updateNote(note)),
        noteDeletedHandler: (id) => dispatch(actionCreator.deleteNote(id)),
        noteSelectedHandler: (id) => dispatch(actionCreator.selectNote(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notes);
