import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from "classnames";
import styles from "./Card.css";
import globalStyles from "../../../assets/css/index.module.css";
class Card extends Component {
    state = {
        showComponent: true
    };
    static propTypes = {
        onClick: PropTypes.func,
        children: PropTypes.node,
        variant: PropTypes.string,
        className: PropTypes.string,
        label: PropTypes.string,
        size: PropTypes.string,
        closable: PropTypes.bool,
        disabledClassName: PropTypes.string,
        disabled: PropTypes.bool
    };

    static defaultProps = {
        className: "",
        label: "",
        size: "",
        variant: "",
        disabled: false,
        closable: false,
        disabledClassName: ""
    };

    handleCardClick = event => {
        const { onClick, disabled } = this.props;

        if (disabled) return;

        onClick && onClick({ event });
    }

    renderChildren = () => {
        const { label, children } = this.props;

        if (label) { return label; }
        if (children) { return children; }

        return "Card";
    }

    renderCloseButton = () => {
        return (
            <div className={styles['card__close']} onClick={() => this.setState({showComponent: false})}>&times;</div>
        )
    }
    render() {
        const {
            className,
            size,
            variant,
            disabled,
            closable,
            disabledClassName
          } = this.props;

          const _className = cx(
            className,
            styles[size],
            styles.card,
            globalStyles[variant],
            {
              [globalStyles.disabled]: disabled,
              [disabledClassName]: disabled
            }
        );
        return (
            this.state.showComponent ? (
                <div onClick={this.handleCardClick} className={_className}>
                    {this.renderChildren()}
                    {closable ? this.renderCloseButton() : null}
                </div>
            ) : null
         );
    }
}

export default Card;

/**
 * example usage
 *
 * <Card size="medium" variant="primary" disabled closabled>
        <header>Test</header>
        <main>Body</main>
        <footer>Footer</footer>
    </Card>
 */
