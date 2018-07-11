export const EXPERIMENTS_FETCH = 'experiments/fetch';
export const EXPERIMENTS_FETCH_FAIL = 'experiments/fetch_fail';
export const EXPERIMENTS_FETCH_SUCCESS = 'experiments/fetch_success';

export const fetchExperiments = () => {
    return (dispatch, getState) => {
        dispatch({
            type: EXPERIMENTS_FETCH,
            payload: {},
        });

        const headers = new Headers();
        headers.append('Authorization', `Bearer ${localStorage.getItem('airtable_key')}`);
        headers.append('Content-Type', 'application/json');

        fetch('https://api.airtable.com/v0/appiXZeDAQB4CUWJn/Experiments', {
            method: 'GET',
            headers: headers,
        }).then((res) => {
            console.log(res);
            return res.json();
        }).then((data) => {
            dispatch({
                type: EXPERIMENTS_FETCH_SUCCESS,
                payload: {
                    data
                }
            })
        }).catch((err) => {
            console.error(err);
            dispatch({
                type: EXPERIMENTS_FETCH_FAIL,
                payload: {
                    err
                }
            })
        });
    };
};
