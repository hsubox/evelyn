const EXPERIMENTS_FETCH = 'experiments/fetch';
const EXPERIMENTS_FETCH_FAIL = 'experiments/fetch_fail';
const EXPERIMENTS_FETCH_SUCCESS = 'experiments/fetch_success';

export const fetchExperiments = () => {
    return (dispatch, getState) => {
        dispatch({
            type: EXPERIMENTS_FETCH,
            payload: {},
        });

        const headers = new Headers();
        headers.append('Authorization', `Bearer ${localStorage.getItem('airtable_key')}`);

        fetch('url', {
            method: 'GET',
            headers: headers,
        }).then((res) => {
            dispatch({
                type: EXPERIMENTS_FETCH_SUCCESS,
                payload: {
                    data: {}
                }
            })
        }).catch((err) => {
            dispatch({
                type: EXPERIMENTS_FETCH_FAIL,
                payload: {
                    err
                }
            })
        });
    };
};
