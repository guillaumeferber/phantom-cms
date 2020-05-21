import React from 'react';
import cx from './Input.css';

const input = ( props ) => {
    let inputElement = null;
    let inputClasses = [cx.InputElement];
    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(cx.InputInvalid);
    }
    switch(props.elementType) {
        case 'input':
            inputElement = <input
            className={inputClasses.join(' ')}
            {...props.elementConfig}
            onChange={props.changed}
            value={props.value} />;
            break;
        case 'textarea':
            inputElement = <textarea
            className={inputClasses.join(' ')}
            {...props.elementConfig}
            onChange={props.changed}
            value={props.value} />;
            break;
        case 'select':
            const options = props.elementConfig.options;
            inputElement = (
                <select
                onChange={props.changed}
                className={inputClasses.join(' ')}>
                    {options.map(option => (
                        <option
                            key={option.value}
                            value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
            className={inputClasses.join(' ')}
            {...props.elementConfig}
            onChange={props.changed}
            value={props.value} />;
    }

    return (
        <div className={cx.Input}>
            <label className={cx.Label}>{props.label}</label>
            {inputElement}
        </div>
     );
}

export default input;
