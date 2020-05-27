import * as actionTypes from '../../actions//timers/timers.actionTypes';
import { updateObject } from '../../utility';
import * as constants from '../../constants/';

const initialState = {
    counter: constants.DEFAULT_TIMER_VALUE,
    counterStarted: constants.DEFAULT_TIMER_STATUS,
    presets: constants.DEFAULT_PRESETS
};
const incrementCounter = (state) => updateObject(state, { counter: state.counter + constants.DEFAULT_TIMER_STEP_VALUE });
const decrementCounter = (state) => updateObject(state, { counter: state.counter - constants.DEFAULT_TIMER_STEP_VALUE });
const presetCounter = (state, action) => updateObject(state, { counter: action.payload.value });
const startCounter = (state) => updateObject(state, { counterStarted: !constants.DEFAULT_TIMER_STATUS });
const stopCounter = (state) => updateObject(state, { counterStarted: constants.DEFAULT_TIMER_STATUS });

const timerReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT: return incrementCounter(state);
        case actionTypes.DECREMENT: return decrementCounter(state);
        case actionTypes.PRESET: return presetCounter(state, action);
        case actionTypes.START: return startCounter(state);
        case actionTypes.STOP: return stopCounter(state);
        default: return state;
    }
}

export default timerReducer;
