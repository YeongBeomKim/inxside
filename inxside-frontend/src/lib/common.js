import {pender} from 'redux-pender';

export const pressEnter = (fn) => (e) => {
    if(e.key='Enter'){
        fn();
    };
    return null;
};

export function applyPenders(reducer, penders){
    const updaters = Object.assign({}, ...penders.map(pender));
    return((state,action)=>{
        if(updaters[action.type]) {
            return updaters[action.type](state,action);
        }
        return reducer(state,action)
    });
}