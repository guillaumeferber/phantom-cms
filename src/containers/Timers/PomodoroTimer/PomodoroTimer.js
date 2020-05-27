import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../../hoc/Aux/Aux';
import TimerControl from '../TimerControl/TimerControl';
import Button from '../../../components/UI/Button/Button';
import Presets from '../Presets/Presets';
import Timer from '../Timer/Timer';
import * as actionCreator from '../../../store/actions';
import * as cn from './Pomodoro.css';

class PomodoroTimer extends Component {
    render() {
        return (
            <Aux>
                {/* presets */}
                <div className={cn.PomodoroPresets}>
                    <Presets
                        list={this.props.presets}
                        clicked={(e) => this.props.onUpdatePresetCounter(e)} />
                </div>
                {/* timer + controls*/}
                <div className={cn.PomodoroTimer}>
                    <div className={cn.PomodoroTimerControl}>
                        <TimerControl value="minus" amount="5" clicked={this.props.onDecrementCounter} />
                    </div>
                    <div>
                        <Timer
                            countStart={this.props.counter}
                            started={this.props.counterStarted} />
                    </div>
                    <div className={cn.PomodoroTimerControl}>
                        <TimerControl value="plus" amount="5" clicked={this.props.onIncrementCounter} />
                    </div>
                </div>

                {/* commands */}
               <div className={cn.PomodoroTimerButtonGroup}>
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

export default connect(mapStateToProps, mapDispatchToProps)(PomodoroTimer);
