import {applyMiddleware, createStore, combineReducers} from 'redux';
import experiments from 'data/experiments/reducer';
import thunk from 'redux-thunk';

export const store = createStore(combineReducers({
        experiments
    }),
    applyMiddleware(thunk)
);