'use strict';

import { createStore } from "redux";

console.log("APP STARTED!");

// default state
const defaultState = {
    balance: 0,
}

// actions
const actionIncrement = {
    type: 'INCREMENT',
}

const actionDecrement = {
    type: 'DECREMENT',
}

// reducer
const account = (state = defaultState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                balance: state.balance + 1
            };
        case 'DECREMENT':
            return {
                balance: state.balance - 1
            };
        default:
            return state;
    }
}

const store = createStore(account);

console.log("The store value is: ", store.getState());

store.subscribe(() => {
    console.log("Watching state changes...");
    const state = store.getState();
    console.log("The current state in the store is: ", state);
});

store.dispatch(actionIncrement);