import { createStore } from 'redux';
import rootReducer from './reducers/app.reducers';

const appStore = createStore(
    rootReducer
);
export default appStore;
