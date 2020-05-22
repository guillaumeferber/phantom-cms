import React from 'react';
import * as cx from './NoteListItem.css';
import editIcon from '../../../../assets/images/edit.svg';
import deleteIcon from '../../../../assets/images/delete.svg';
const noteListItem = (props) => {
    return (
        <li className={cx.NoteListItem}>
            {props.label}
            <span onClick={props.selected}><img src={editIcon} alt="Edit"/></span>
            <span onClick={props.deleted}><img src={deleteIcon} alt="Delete"/></span>
            </li>
    )
}

export default noteListItem;
