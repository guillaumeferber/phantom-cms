import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as cx from './NoteEditor.css';

class noteEditor extends Component {
    constructor(props) {
		super(props);
        this.inputEl = React.createRef();
    }

    onNameChangedHandler = (value) => {
        this.props.onNoteSaved({ ...this.props.note, name: value });
    }

    componentDidMount() {
        this.inputEl.current.value = '';
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.note.id !== this.props.note.id) {
            this.inputEl.current.value = '';
        }
    }

    renderInput = () => (<input
        type="text"
        className={cx.NoteEditorInput}
        placeholder={this.props.note.name}
        // value={this.props.note.name}
        ref={this.inputEl}
        onChange={(e) => this.props.onNoteSaved({ ...this.props.note, name: e.target.value })} />);

    renderEditor = () => (<CKEditor
        editor={ ClassicEditor }
        data={this.props.note.value !== null ? this.props.note.value : '' }
        value={this.props.note.value !== null ? this.props.note.value : '' }
        onChange={ ( event, editor ) => {
            this.props.onNoteSaved({ ...this.props.note, value: editor.getData() });
            // console.log( { event, editor, data } );
        } }
        onBlur={ ( event, editor ) => {
            if (this.props.note) {
                this.props.onNoteSaved({ ...this.props.note, value: editor.getData() });
            }
            // console.log( 'Blur.', editor );
        } }
    />);

    render() {
        return (<Aux>
            <div className={cx.NoteEditor}>
                {this.renderInput()}
                {this.renderEditor()}
            </div>
        </Aux>);
    }
}

export default noteEditor;
