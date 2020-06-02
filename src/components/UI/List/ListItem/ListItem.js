import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.css';
import cx from 'classnames';

class ListItem extends Component {
    static propTypes = {
        className: PropTypes.string,
        variant: PropTypes.string,
        children: PropTypes.node
    };

    static defaultProps = {
        className: "",
        variant: "row",
    };

    renderChildren = () => {
        const { children } = this.props;
        if (children) { return children; }
        return "List Item";
    }
    render() {
        const { className, variant } = this.props;
        const _classNames = cx(
            className,
            styles.ListItem,
            styles[variant]
        );
        return (
        <li className={_classNames}>{this.renderChildren()}</li>
        );
    }
}
export default ListItem;
