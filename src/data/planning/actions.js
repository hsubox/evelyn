export const PLANNING_FETCH = 'planning/fetch';
export const PLANNING_FETCH_INIT = 'planning/fetch_init';
export const PLANNING_FETCH_FAIL = 'planning/fetch_fail';
export const PLANNING_FETCH_SUCCESS = 'planning/fetch_success';

export const fetchPlanning = () => {
    return (dispatch, getState) => {
        dispatch({
            type: PLANNING_FETCH,
            airtable: {
                endpoint: 'Planning',
                method: 'GET',
                customHeaders: {

                },
                types: {
                    init: PLANNING_FETCH_INIT,
                    success: PLANNING_FETCH_SUCCESS,
                    fail: PLANNING_FETCH_FAIL,
                },
            }
        });
    };
};
