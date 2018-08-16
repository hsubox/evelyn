// import {planningSelector} from '../planning/selectors';

export const experimentsSelector = (state) => {
    return {experiments: state.experiments};
};

// export const selectExperimentsWithPlanning = (state) => {
//     const {planning} = planningSelector(state);

    

//     return {experiments: state.experiments.map((experiment) => {

//     })}
// }