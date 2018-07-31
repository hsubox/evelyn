export const EXPERIMENTS_FETCH = 'experiments/fetch';
export const EXPERIMENTS_FETCH_INIT = 'experiments/fetch_init';
export const EXPERIMENTS_FETCH_FAIL = 'experiments/fetch_fail';
export const EXPERIMENTS_FETCH_SUCCESS = 'experiments/fetch_success';

export const fetchExperiments = () => {
    return (dispatch, getState) => {
        dispatch({
            type: EXPERIMENTS_FETCH,
            airtable: {
                endpoint: 'Experiments',
                method: 'GET',
                customHeaders: {

                },
                types: {
                    init: EXPERIMENTS_FETCH_INIT,
                    success: EXPERIMENTS_FETCH_SUCCESS,
                    fail: EXPERIMENTS_FETCH_FAIL,
                },
            }
        });
    };
};
