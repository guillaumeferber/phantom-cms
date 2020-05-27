import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../../components/UI/Button/Button';
import Timer from '../Timer/Timer';
import * as actionCreator from '../../../store/actions';
import * as cn from './BasicTimer.css';

class BasicTimer extends Component {
    render() {
        return (
            <Aux>
                {/* timer */}
                <div className={cn.BasicTimer}>
                    <div>
                        <Timer
                            countStart={this.props.counter}
                            started={this.props.counterStarted} />
                    </div>
                </div>
                {/* commands */}
               <div className={cn.BasicTimerButtonGroup}>
                   <Button label="Stop" variant="secondary" disabled={!this.props.counterStarted} clicked={this.props.onStopCounter}/>
                   <Button label="Start" variant="primary" clicked={this.props.onStartCounter} />
               </div>
            </Aux>
         );
    }
}

const mapStateToProps = state => ({
    counter: state.timer.counter,
    counterStarted: state.timer.counterStarted,
    presets: state.timer.presets
});

const mapDispatchToProps = dispatch => ({
    onIncrementCounter: () => dispatch(actionCreator.increment()),
    onDecrementCounter: () => dispatch(actionCreator.decrement()),
    onUpdatePresetCounter: (value) => dispatch(actionCreator.preset(value)),
    onStartCounter: () => dispatch(actionCreator.start()),
    onStopCounter: () => dispatch(actionCreator.stop())
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicTimer);
