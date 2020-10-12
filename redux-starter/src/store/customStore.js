import reducer from './reducer';

const createStore = (reducer) => {
    let state,
    listeners = [];

    const getState = () => ({ state })

    const dispatch = (action) => {
        state = reducer(state, action);
    }

    const subscribe = (listener) => {
        listeners.push(listener);
        listeners.forEach((listener) => listener());
    }

    return {
        subscribe,
        dispatch,
        getState,
    }
}


export default createStore(reducer);