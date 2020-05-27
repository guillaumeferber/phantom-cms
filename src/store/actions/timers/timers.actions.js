import * as actionTypes from './timers.actionTypes';

export const increment = () => ({
   type:  actionTypes.INCREMENT
});
export const decrement = () => ({
   type:  actionTypes.DECREMENT
});
export const preset = value => {
   return {
      type:  actionTypes.PRESET,
      payload: {value: value}
   }
};
export const start = () => {
   return {
      type:  actionTypes.START
   }
};
export const stop = () => {
   return {
      type:  actionTypes.STOP
   }
};
