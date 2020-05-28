import React from 'react';
import './Radio.css';
const radioInput = (props) => {
    const id = props.elementTypes && props.elementTypes.id ? props.elementTypes.id : 'radio_id_gen_555777';
    return (
        <div className="RadioInput">
            <input
                id={id}
                type="radio"
                {...props.elementTypes}
                onChange={props.changed} />
            <label htmlFor={id}>{props.label}</label>
        </div>
     );
}

export default radioInput;
