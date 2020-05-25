import React from 'react';
import * as cx from './Placeholder.css';
const placeholder = (props) => {
    return (
        <p className={cx.Placeholder}>{props.children}</p>
     );
}

export default placeholder;
