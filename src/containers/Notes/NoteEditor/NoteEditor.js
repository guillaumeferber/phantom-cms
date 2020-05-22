import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as cx from './NoteEditor.css';

const noteEditor = (props) => {

    return (
        <Aux>
            <div className={cx.NoteEditor}>
                <h2>Note Editor</h2>
                {props.note ? <p>{props.note.name + ' #' + props.note.id}</p> : null}
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
        </Aux>
     );
}

export default noteEditor;
