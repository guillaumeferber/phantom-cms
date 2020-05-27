import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux';
import PomodoroTimer from './PomodoroTimer/PomodoroTimer';
import BasicTimer from './BasicTimer/BasicTimer';
import cx from 'classnames';
import PropTypes from 'prop-types';

class Timers extends Component {
    static propTypes = {
        onClick: PropTypes.func,
        children: PropTypes.node,
        variant: PropTypes.string,
        className: PropTypes.string
    };

    static defaultProps = {
    className: "",
    variant: "pomodoro" // "basic, pomodoro"
    };

    renderChildren = (variant) => {
        switch(variant) {
            case 'pomodoro':
                return <PomodoroTimer />;
            default:
                return <BasicTimer />;
        }
    }
    render() {
        const {
            className,
            variant
          } = this.props;
          const _className = cx(
            className
          );
        return (
            <Aux>
                <div  className={_className}>
                    {this.renderChildren(variant)}
                </div>
            </Aux>
         );
    }
}

export default Timers;
