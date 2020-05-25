import React from 'react';
import * as cx from './NoteListItem.css';
import deleteIcon from '../../../../assets/images/delete.svg';
import * as utility from '../../../../store/utility';

const noteListItem = (props) => {
    return (
        <li className={cx.NoteListItem} onClick={props.selected}>
            <div className={cx.row}>
                <b>{props.labelData.label}</b>
                <span onClick={props.deleted}><img src={deleteIcon} alt="Delete"/></span>
            </div>
            <small>{utility.getDateFromTimestamp(props.labelData.date)}</small>
        </li>
    )
}

export default noteListItem;
