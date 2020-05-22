import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import * as cx from './NoteEditor.css';

const noteEditor = (props) => {

    return (
        <Aux>
            <div className={cx.NoteEditor}>
                <h2>Note Editor</h2>
                {props.note ? <p>{props.note.name + ' #' + props.note.id}</p> : null}
            </div>
        </Aux>
     );
}

export default noteEditor;
