import {applyMiddleware, createStore, combineReducers, compose} from 'redux';
import experiments from 'data/experiments/reducer';
import planning from 'data/planning/reducer';
import config from 'data/config/reducer';
import thunk from 'redux-thunk';
import {airtableApi} from 'data/middleware/airtable_api';
import {errorsMiddleware} from 'data/middleware/errors';

const reducer = combineReducers({
    config,
    experiments,
    planning,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk, airtableApi, errorsMiddleware),
    )
);