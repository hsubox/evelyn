export const configSelector = (state) => {
    return {config: state.config};
};

export const appIdSelector = (state) => {
    return {appId: configSelector(state).config.appId};
};