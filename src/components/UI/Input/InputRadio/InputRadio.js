import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './InputRadio.css';
class InputRadio extends Component {
    static propTypes = {
        className: PropTypes.string,
        elementTypes: PropTypes.any,
        changed: PropTypes.func,
        variant: PropTypes.string,
        label: PropTypes.string,
        disabledClassName: PropTypes.string,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        className: "",
        label: "",
        variant: "basic",
        disabled: false,
        disabledClassName: "",
        changed: () => {}
    };

    renderChildren = () => {
        const { label, children } = this.props;
        if (label) { return label; }
        if (children) { return children; }
        return "Radio Input";
    }

    renderElement = () => {
        const { className, variant, disabled, changed, elementTypes } = this.props;
        const _classNames = cx(
            className,
            styles.InputRadio,
            styles[variant],
            { [styles.disabled]: disabled }
        );

        return (
            <div className={_classNames}>
                <input
                    disabled={disabled}
                    id={elementTypes.id}
                    type="radio"
                    {...elementTypes}
                    onChange={changed} />
                <label htmlFor={elementTypes.id}>{this.renderChildren()}</label>
            </div>
        );
    }

    render() { return this.renderElement() };
}

export default InputRadio;
