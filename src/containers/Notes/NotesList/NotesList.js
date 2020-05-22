import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import NoteListItem from './NoteListItem/NoteListItem';

import * as cx from './NotesList.css';

class NotesList extends Component {
    render() {
        return (
            <Aux>
                <div className={cx.NotesList}>
                    <ul>
                    {this.props.notes.map(note => {
                        return (
                            <NoteListItem
                                key={note.id}
                                label={note.id}
                                selected={() => this.props.onNoteItemSelected(note.id)}
                                deleted={() => this.props.onNoteItemDeleted(note.id)} />
                        )
                    })}
                    </ul>
                </div>
            </Aux>
         );
    }
}

export default NotesList;
