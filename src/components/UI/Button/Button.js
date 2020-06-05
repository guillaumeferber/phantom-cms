import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from "classnames";
import styles from "./Button.css";
import globalStyles from "../../../assets/css/index.module.css";
class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    variant: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    size: PropTypes.string,
    disabledClassName: PropTypes.string,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    className: "",
    label: "",
    size: "",
    variant: "basic",
    disabled: false,
    disabledClassName: ""
  };

  handleButtonClick = event => {
    const { onClick, disabled } = this.props;

    if (disabled) return;

    onClick && onClick({ event });
  };

  renderChildren = () => {
    const { label, children } = this.props;

    if (label) {
      return label;
    }

    if (children) {
      return children;
    }

    return "Button";
  };
  render() {
    const {
      className,
      size,
      variant,
      disabled,
      disabledClassName,
      clicked
    } = this.props;

    const _className = cx(
      className,
      globalStyles[size],
      styles.button,
      globalStyles[variant],
      {
        [globalStyles.disabled]: disabled,
        [disabledClassName]: disabled
      }
    );
    return (
      <button type="button" onClick={clicked} className={_className}>
         {this.renderChildren()}
      </button>
    );
  }
}

export default Button;
