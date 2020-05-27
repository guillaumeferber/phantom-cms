import React, { Component } from 'react';
import Aux from '../../../hoc/Aux/Aux';
import classNames from './Timer.css';
class Timer extends Component {
    state = {
        count: this.props.countStart * 60,
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.countStart !== this.props.countStart) {
            this.setState({count: this.props.countStart * 60});
        }
        if (prevProps.started !== this.props.started) {
            this.doInterval();
        }
    }

    doInterval = () => {
        if (!this.props.started) {
            this.setState({count: this.props.countStart * 60});
            return;
        }
        const interval = setInterval(() => {
            if ( this.state.count === 0 || !this.props.started) {
                clearInterval(interval);
                return;
            }
            this.setState({count: this.state.count - 1});
        }, 1000);
        return () => clearInterval(interval);
    }

    renderCount = () => {
        const levels = [
            [Math.floor(this.state.count / 31536000), 'y'],
            [Math.floor((this.state.count % 31536000) / 86400), 'd'],
            [Math.floor(((this.state.count % 31536000) % 86400) / 3600), 'h'],
            [Math.floor((((this.state.count % 31536000) % 86400) % 3600) / 60), 'mn'],
            [(((this.state.count % 31536000) % 86400) % 3600) % 60, 's']
        ];
        let returntext = '';

        for (let i = 0, max = levels.length; i < max; i++) {
            if ( levels[i][0] === 0 ) continue;
            returntext += ' ' + levels[i][0] + '' + (levels[i][1] ? (levels[i][0] === 1 ? levels[i][1].substr(0, levels[i][1].length): levels[i][1]) : '');
        };
        returntext = !returntext.length ? (this.props.countStart * 60) + 's' : returntext.trim();
        return <div className={classNames.TimerCountInt}>{returntext}</div>;
    }

    render() {
        return (
            <Aux>
                <div className={classNames.Timer}>
                    <div className={classNames.TimerCount}>
                        {this.renderCount()}
                    </div>
                </div>
            </Aux>
        );
    }
}

export default Timer;
