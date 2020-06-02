import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './List.css';

class List extends Component {
    static propTypes = {
        children: PropTypes.node,
        variant: PropTypes.string,
        className: PropTypes.string,
    };

    static defaultProps = {
        className: "",
        variant: "basic",
    };

    renderChildren = () => {
        const { children } = this.props;
        if (children) { return children; }
        return "List";
    };

    render() {
        const { className, variant } = this.props;

        const _className = cx(
            className,
            styles.List,
            styles[variant]
        );
        return (
            <ul className={_className}>{this.renderChildren()}</ul>
         );
    }
}

export default List;
