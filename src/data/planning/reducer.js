import {
    PLANNING_FETCH,
    PLANNING_FETCH_FAIL,
    PLANNING_FETCH_SUCCESS,
} from 'data/planning/actions';

const initialState = {
    fetching: false,
    fetched: false,
    err: null,
    records: {},
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case PLANNING_FETCH:
            return {
                ...state,
                fetching: true,
                fetched: false,
                err: null,
            };
        case PLANNING_FETCH_SUCCESS:
            return {
                ...state,
                fetching: false,
                fetched: true,
                records: action.payload.data.records.reduce((memo, record) => {
                    memo[record.id] = record;
                    return memo;
                }, {}),
            };
        case PLANNING_FETCH_FAIL:
            return {
                ...state,
                fetching: false,
                fetched: false,
                err: action.err,
                records: {},
            };
        default:
            return state;
    }
};

export default reducer;