export const errorsMiddleware = store => next => action => {
    if (action.err) {
        console.error(action.err)
    };
    next(action);
}