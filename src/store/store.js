import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/app.reducers';
import thunk from 'redux-thunk';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const appStore = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);
export default appStore;
