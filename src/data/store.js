import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import experiments from 'data/experiments/reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    experiments
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk),
    )
);