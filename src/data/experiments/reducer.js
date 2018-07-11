import {
    EXPERIMENTS_FETCH,
    EXPERIMENTS_FETCH_FAIL,
    EXPERIMENTS_FETCH_SUCCESS
} from 'data/experiments/actions';

const initialState = {
    fetching: false,
    fetched: false,
    err: null,
    records: []
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case EXPERIMENTS_FETCH:
            return {
                ...state,
                fetching: true,
                fetched: false,
                err: null
            };
        case EXPERIMENTS_FETCH_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                records: action.payload.data.records
            };
        case EXPERIMENTS_FETCH_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: false,
                records: []
            };
        default:
            return state;
    }
};

export default reducer;