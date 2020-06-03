import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './List.css';

class List extends Component {
    static propTypes = {
        children: PropTypes.node,
        variant: PropTypes.string,
        className: PropTypes.string,
        type: PropTypes.string
    };

    static defaultProps = {
        className: "",
        variant: "basic",
        type: null
    };

    renderChildren = () => {
        const { children } = this.props;
        if (children) { return children; }
        return "List";
    };

    render() {
        const { className, variant, type } = this.props;

        const _className = cx(
            className,
            styles.List,
            styles[variant]
        );
        const ListType = type === 'ordered' ? `ol` : `ul`;
        return (
            <ListType className={_className}>{this.renderChildren()}</ListType>
         );
    }
}

export default List;
