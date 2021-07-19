'use strict';

// import { createStore } from "redux";

const { createStore } = Redux;

console.log("APP STARTED!");

// default state
const defaultState = {
    balance: 0,
}

// actions
const actionIncrement = (amount) => {
    return {
        type: 'INCREMENT',
        payload: amount
    }
}

const actionDecrement = (amount) => {
    return {
        type: 'DECREMENT',
        payload: amount
    }
}

// reducer
const account = (state = defaultState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                balance: state.balance + action.payload
            };
        case 'DECREMENT':
            return {
                balance: state.balance - action.payload
            };
        default:
            return state;
    }
}

const store = createStore(account);

console.log("Starting store value is: ", store.getState());

store.subscribe(() => {
    console.log("Watching state changes...");
    const state = store.getState();
    console.log("The current state in the store is: ", state);
});

store.dispatch(actionIncrement(100));
store.dispatch(actionIncrement(13));
store.dispatch(actionDecrement(50));

console.log("The store value is: ", store.getState());