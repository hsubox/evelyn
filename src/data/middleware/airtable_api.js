import {appIdSelector} from 'data/config/selectors';

export const airtableApi = store => next => action => {
    console.log(action);
    if (action.airtable) {
        const {dispatch} = store;
        const defaultHeaders = {
            'Authorization': `Bearer ${localStorage.getItem('airtable_key')}`,
            'Content-Type': 'application/json'
        };
        const {endpoint, customHeaders, method, types} = action.airtable;
        const {appId} = appIdSelector(store.getState());
        dispatch({
            type: types.init,
            payload: {}
        })
        fetch(`https://api.airtable.com/v0/${appId}/${endpoint}`, {
            method,
            headers: {...defaultHeaders, ...customHeaders},
        }).then((res) => {
            // throw new Error('asdfsad');
            return res.json();
        }).then((data) => {
            dispatch({
                type: types.success,
                payload: {
                    data,
                },
            });
        }).catch((err) => {
            dispatch({
                type: types.fail,
                err,
            });
        });
        next(action);
    } else {
        next(action);
    }
}